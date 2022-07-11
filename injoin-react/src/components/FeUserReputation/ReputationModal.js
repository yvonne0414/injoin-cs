import react from 'react';
import { Upload, Button, Rate, Form, Input, Modal, Spin, message } from 'antd';
import reputationimg from '../../assets/images/fe/userReputation/reputation_1.png';
import axios from 'axios';
import { BE_IMAGE_URL, API_URL } from '../../utils/config';

// 圖片upload
import { PlusOutlined } from '@ant-design/icons';

import { useState, useEffect, useContext } from 'react';

// upload
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const normFile = (e) => {
  // console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const ReputationModal = (props) => {
  const { data, userId, orderId, setCommit } = props;

  // 圖片upload
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  // loading
  const [loading, setLoading] = useState(false);

  // 提示
  const success = () => {
    message.success('評論成功');
  };
  const error = () => {
    message.error('評論失敗');
  };

  const [isReview, setIsReview] = useState(false);
  useEffect(() => {
    if (Number(data.is_review) === 1) {
      setIsReview(true);
    }
  }, []);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    setLoading(true);

    // console.log(reviewImg);
    try {
      let formData = new FormData();
      formData.append('userId', userId);
      formData.append('orderId', orderId);
      formData.append('prdId', data.prd_id);
      formData.append('content', values.commit);
      formData.append('rating', values.rate);
      if (values.reviewImg) {
        for (let i = 0; i < values.reviewImg.length; i++) {
          formData.append('reviewImg[]', values.reviewImg[i]['originFileObj']);
        }
      }
      formData.append('orderDetailId', data.orderDetailId);
      // console.log('formData', formData);
      let res = await axios.post(`${API_URL}/reputation/`, formData);
      console.log(res);
      if (res.data.result == 'ok') {
        setLoading(false);
        success();
        setIsReview(true);
        setCommit(data.orderDetailId);
      } else {
        setLoading(false);
        error();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Form layout="vertical" disabled={isReview} initialValues={{ rate: 5 }} onFinish={onFinish}>
      <div className="reputation-pop ">
        <div className="container">
          <Spin spinning={loading} tip="Loading...">
            <div className="reputation-pop-content">
              <div className="reputation-pop-img">
                <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt={data.name} />
              </div>
              <div className="reputation-pop-prd">
                <div className="reputation-pop-tittle">{data.name}</div>
                {!isReview && (
                  <div className="reputation-pop-star">
                    <Form.Item name="rate">
                      <Rate allowHalf allowClear={false} />
                    </Form.Item>
                  </div>
                )}
              </div>

              {!isReview && (
                <>
                  <div className="reputation-pop-commit">
                    {/* <span>評論</span>
                <textarea cols="30"></textarea> */}
                    <Form.Item name="commit" label="評論">
                      <Input.TextArea className="reputation-pop-commit-context" />
                    </Form.Item>
                  </div>
                  <div className="reputation-pop-img w-100">
                    <Form.Item name="reviewImg" valuePropName="fileList" getValueFromEvent={normFile}>
                      <Upload customRequest={dummyRequest} listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
                        {fileList.length >= 3 ? null : uploadButton}
                      </Upload>
                    </Form.Item>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                  </div>
                </>
              )}

              <Form.Item className="mx-auto mb-0">
                <Button type="primary" htmlType="submit" className="btn btn-injoin-outline py-0 text-white">
                  {!isReview ? '評價' : '已評價'}
                </Button>
              </Form.Item>
            </div>
          </Spin>
        </div>
      </div>
    </Form>
  );
};
export default ReputationModal;
