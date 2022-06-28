// 圖片upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button, Form, Input, DatePicker, Select, InputNumber } from 'antd';
import { useState,useContext } from 'react';
import moment from 'moment';
import { userState } from '../../App';


// upload
const getBase64 = (file) =>

  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const UserInfoProfile = () => {
  // 圖片upload
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  // const usermember = useContext(userState)
  // console.log('userinfopro: ', usermember);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  // 表單
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      groupDate: fieldsValue['groupDate'].format('YYYY-MM-DD HH:mm'),
      groupDeadLine: fieldsValue['groupDeadLine'].format('YYYY-MM-DD HH:mm'),
    };
    console.log('Received values of form: ', values);
  };
  // label
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

  const fullnameLabel = (
    <div className="userinfo-profile-title">
      <span>姓名</span>
    </div>
  );
  const usernicknameLabel = (
    <div className="userinfo-profile-title">
      <span>顯示暱稱</span>
    </div>
  );
  const useremailLabel = (
    <div className="userinfo-profile-title">
      <span>電子郵件</span>
    </div>
  );
  const usergenderLabel = (
    <div className="userinfo-profile-title">
      <span>性別</span>
    </div>
  );
  const userbirthdayLabel = (
    <div className="userinfo-profile-title">
      <span>生日</span>
    </div>
  );
  const dateFormat = 'YYYY-MM-DD';
  const userphoneLabel = (
    <div className="userinfo-profile-title">
      <span>手機號碼</span>
    </div>
  );
  const useraddressLabel = (
    <div className="userinfo-profile-title">
      <span>地址</span>
    </div>
  );

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          fullname: 'Chen',
          usergender: '1',
          useremail: 'test@email.com',
          userphone: '0911222333',
          userbirthday: moment('2015-06-06', dateFormat),
        }}
        onFinish={onFinish}
      >
        <div className="UserInfoProfile">
          {/* 照片 */}
          <div className="user-info-img">
            <Form.Item name="userinfoImg" getValueFromEvent={normFile} rules={[{ required: true, message: '請上傳使用者照片' }]}>
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>
            <Modal className='userinfoShowImg' visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          <div className="userInfo-input">
            {/* 姓名 */}
            <Form.Item label={fullnameLabel} name="fullname">
              <Input disabled />
            </Form.Item>
            {/* 暱稱 */}
            <Form.Item label={usernicknameLabel} name="usernickname">
              <Input placeholder="請輸入暱稱" />
            </Form.Item>
            {/* 電子信箱 */}
            <Form.Item label={useremailLabel} name="useremail">
              <Input disabled type="email" />
            </Form.Item>
            {/* 性別 */}
            <Form.Item label={usergenderLabel} name="usergender" >
              <Select placeholder="請選擇姓別" disabled>
                <Option value="1" disabled>
                  男
                </Option>
                <Option value="2" disabled>
                  女
                </Option>
              </Select>
            </Form.Item>
            {/* 生日 */}
            <Form.Item label={userbirthdayLabel} name="userbirthday">
              <DatePicker  disabled />
            </Form.Item>
            {/* 手機號碼 */}
            <Form.Item label={userphoneLabel} name="userphone">
              <Input disabled />
            </Form.Item>
            {/* 地址 */}
            <Form.Item label={useraddressLabel} name="useraddress">
              <Input.Group compact>
                <Form.Item
                  name={['useraddress', 'city']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '請選擇活動縣市',
                    },
                  ]}
                >
                  <Select placeholder="請選擇縣市">
                    <Option value="1">台北市</Option>
                    <Option value="2">新北市</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={['useraddress', 'street']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '請輸入聯絡地址',
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: '60%',
                    }}
                    placeholder="地址"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item className="w-100 text-center mt-4">
              <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit">
                送出資料
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
};

export default UserInfoProfile;
