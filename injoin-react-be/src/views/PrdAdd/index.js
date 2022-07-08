import './_index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 圖片upload
import { PlusOutlined } from '@ant-design/icons';

import { Button, Form, Input, InputNumber, Select, Upload, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
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

const PrdAdd = () => {
  const navigate = useNavigate();

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
  const [prdCate, setPrdCate] = useState(0);

  // 大分類
  const [cateLList, setCateLList] = useState([]);
  useEffect(() => {
    const getCateL = async () => {
      let res = await axios.get(`${API_URL}/prd/cateL`);
      setCateLList(res.data.data);
      // console.log(res.data.data);
    };
    getCateL();
  }, []);

  // 大分類改變時
  const [cateMList, setCateMList] = useState([]);
  const handleChangeCateL = (value) => {
    // console.log(`selected ${value}`);
    // 打中分類api
    const getCateM = async () => {
      let res = await axios.get(`${API_URL}/prd/cateM`, { params: { cateL: value } });
      setCateMList(res.data.data);
      // console.log(res.data.data);
    };
    getCateM();
    // 轉換填寫欄位
    setPrdCate(value);
  };
  // 中分類改變時
  const [cateSList, setCateSList] = useState([]);
  const handleChangeCateM = (value) => {
    // console.log(`selected ${value}`);
    // 打小分類api
    const getCateS = async () => {
      let res = await axios.get(`${API_URL}/prd/cateS`, { params: { cateM: value } });
      setCateSList(res.data.data);
    };
    getCateS();
  };

  // 產地
  const [originList, setOriginList] = useState([]);
  useEffect(() => {
    const getOriginList = async () => {
      let res = await axios.get(`${API_URL}/origin`);
      setOriginList(res.data.data);
    };
    getOriginList();
  }, []);

  // 材質
  const [materialList, setMaterialList] = useState([]);
  useEffect(() => {
    const getMaterialList = async () => {
      let res = await axios.get(`${API_URL}/prd/material`);
      setMaterialList(res.data.data);
    };
    getMaterialList();
  }, []);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);

    try {
      let formData = new FormData();
      formData.append('prdNum', values.prdNum);
      formData.append('name', values.prdName);
      formData.append('price', values.prdPrice);
      formData.append('disc', values.prdDisc);
      formData.append('inventoryQuantity', values.prdInventory);
      formData.append('category', values.cateL);
      if (values.prdAbv) {
        formData.append('abv', values.prdAbv || 0);
      }
      formData.append('origin', values.prdOrigin);
      if (values.prdBrand) {
        formData.append('brand', values.prdBrand);
      }
      formData.append('capacity', values.prdCapacity);
      formData.append('cate_m', values.cateM);
      if (values.cateS) {
        formData.append('cate_s', values.cateS);
      }
      if (values.mater) {
        formData.append('mater', values.mater);
      }
      if (values.prdImg) {
        for (let i = 0; i < values.prdImg.length; i++) {
          formData.append('prdImg[]', values.prdImg[i]['originFileObj']);
        }
      }
      // console.log('formData', formData);
      let res = await axios.post(`${API_URL}/prd/`, formData);
      console.log(res);
      if (res.data.code === 0) {
        message.success({ content: '商品新增成功' });
        navigate(-1);
      } else {
        message.warning({ content: '商品新增失敗' });
      }
    } catch (e) {
      console.error(e);
    }
  };

  // 需要 編號 名稱 圖片上傳（多）價格 介紹 庫存 大分類 中分類 小分類 產地 容量 品牌
  // type1 酒精濃度
  return (
    <>
      <div className="container">
        <h2 className="mb-5">新增商品</h2>
        <div className="add-prd">
          <Form onFinish={onFinish}>
            <div className="d-flex flex-wrap">
              <div className="form-item">
                <Form.Item name="prdNum" label="商品編號">
                  <Input />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="prdName" label="商品名稱">
                  <Input />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="prdPrice" label="價格">
                  <InputNumber min={1} />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="prdInventory" label="庫存">
                  <InputNumber min={1} />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="prdDisc" label="介紹">
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="prdImg" valuePropName="fileList" getValueFromEvent={normFile} label="商品圖片">
                  <Upload customRequest={dummyRequest} listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
                    {fileList.length >= 5 ? null : uploadButton}
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
              <div className="form-item">
                <Form.Item label="商品產地" name="prdOrigin">
                  <Select>
                    {originList.map((item) => {
                      return (
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="商品容量" name="prdCapacity">
                  <InputNumber min={1} />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="商品大分類" name="cateL">
                  <Select onChange={handleChangeCateL}>
                    {cateLList.map((item) => {
                      return (
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="商品中分類" name="cateM">
                  <Select onChange={handleChangeCateM}>
                    {cateMList.map((item) => {
                      return (
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
              {prdCate === 1 && (
                <div className="form-item">
                  <Form.Item label="商品小分類" name="cateS">
                    <Select>
                      {cateSList.map((item) => {
                        return (
                          <Option value={item.id} key={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </div>
              )}

              {(prdCate === 1 || prdCate === 2) && (
                <div className="form-item">
                  <Form.Item label="商品品牌" name="prdBrand">
                    <Input></Input>
                  </Form.Item>
                </div>
              )}
              {prdCate === 1 && (
                <div className="form-item">
                  <Form.Item label="酒精濃度" name="prdAbv">
                    <InputNumber min={1} max={100} />
                  </Form.Item>
                </div>
              )}
              {(prdCate === 3 || prdCate === 4) && (
                <div className="form-item">
                  <Form.Item label="商品材質" name="prdMater">
                    <Select>
                      {materialList.map((item) => {
                        return (
                          <Option value={item.id} key={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </div>
              )}
            </div>
            <div className="mx-auto text-center mt-4">
              <Form.Item>
                <Button htmlType="submit">送出</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default PrdAdd;
