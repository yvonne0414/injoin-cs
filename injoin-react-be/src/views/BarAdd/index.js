import './_index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 圖片upload
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, Upload, Modal } from 'antd';

import React, { useEffect, useState } from 'react';

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
  const [form] = Form.useForm();

  // 類型大分類
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
  };

  // 類型大分類
  // 大分類
  const [barCateLList, setBarCateLList] = useState([]);
  useEffect(() => {
    const getBarCateL = async () => {
      let res = await axios.get(`${API_URL}/bar/cateL`);
      setBarCateLList(res.data.data);
      // console.log(res.data.data);
    };
    getBarCateL();
  }, []);

  // 大分類改變時
  const [barCateMList, setBarCateMList] = useState([]);
  const handleChangeBarCateL = (value) => {
    // console.log(`selected ${value}`);
    // 打中分類api
    const getBarCateM = async () => {
      let res = await axios.get(`${API_URL}/bar/cateM`, { params: { cateL: value } });
      setBarCateMList(res.data.data);
      // console.log(res.data.data);
    };
    getBarCateM();
  };

  const onFinish = async (values) => {
    console.log('Received values of form:', values);
    try {
      let materialListStr = JSON.stringify(values.materialList);
      let bartdCateListStr = JSON.stringify(values.bartdCateList);

      let formData = new FormData();
      formData.append('name', values.name);
      formData.append('recipe', values.recipe);
      formData.append('materialList', materialListStr);
      formData.append('bartdCateList', bartdCateListStr);
      formData.append('bartdImg', values.bartdImg[0]['originFileObj']);

      // console.log('formData', formData);
      let res = await axios.post(`${API_URL}/bar/`, formData);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  // name bartdImg recipe materialList bartdCateList
  // materialList [{name:,materAmount,materCateL,materCateM}]
  // bartdCateList[{bartdMaterCateM:, bartdMaterCateS}]
  return (
    <>
      <h2 className="mb-5">新增酒譜</h2>
      <div className="add-bartd">
        <Form onFinish={onFinish} form={form}>
          <div className="d-flex flex-wrap">
            <div className="form-item">
              <Form.Item name="name" label="酒譜名稱">
                <Input />
              </Form.Item>
            </div>
            {/* 酒譜類型 */}
            <div className="form-item w-75">
              <Form.List name="bartdCateList">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <Space key={field.key} align="baseline">
                        <span className="form-title">類型：</span>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="大分類"
                            name={[field.name, 'bartdMaterCateM']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing bartdMaterCateM',
                              },
                            ]}
                          >
                            <Select
                              style={{
                                width: 130,
                              }}
                              onChange={handleChangeBarCateL}
                            >
                              {barCateLList.map((item) => {
                                return (
                                  <Option key={item.id} values="1">
                                    {item.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="中分類"
                            name={[field.name, 'bartdMaterCateS']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing bartdMaterCateS',
                              },
                            ]}
                          >
                            <Select
                              style={{
                                width: 130,
                              }}
                            >
                              {barCateMList.map((item) => {
                                return (
                                  <Option value={item.id} key={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </Space>
                    ))}

                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        新增類型
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
            <div className="form-item">
              <Form.Item name="recipe" label="作法">
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="bartdImg" valuePropName="fileList" getValueFromEvent={normFile} label="酒譜圖片">
                <Upload customRequest={dummyRequest} listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
                  {fileList.length >= 1 ? null : uploadButton}
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
            {/* 食材 */}
            <div className="form-item w-75">
              <Form.List name="materialList">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <Space key={field.key} align="baseline">
                        <span className="form-title">材料：</span>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="食材名稱"
                            name={[field.name, 'name']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing name',
                              },
                            ]}
                          >
                            <Input></Input>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="份量"
                            name={[field.name, 'materAmount']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing materAmount',
                              },
                            ]}
                          >
                            <Input></Input>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="大分類"
                            name={[field.name, 'materCateL']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing materCateL',
                              },
                            ]}
                          >
                            <Select
                              style={{
                                width: 130,
                              }}
                              onChange={handleChangeCateL}
                            >
                              {cateLList.map((item) => {
                                return (
                                  <Option value={item.id} key={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item noStyle>
                          <Form.Item
                            {...field}
                            label="中分類"
                            name={[field.name, 'bartdMaterCateS']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing bartdMaterCateS',
                              },
                            ]}
                          >
                            <Select
                              style={{
                                width: 130,
                              }}
                            >
                              {cateMList.map((item) => {
                                return (
                                  <Option value={item.id} key={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </Space>
                    ))}

                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        新增食材
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>

          <div className="mx-auto text-center mt-4">
            <Form.Item>
              <Button htmlType="submit">送出</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};
export default PrdAdd;
