import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import { API_URL } from '../../../utils/config';

import { useState, useEffect } from 'react';
import axios from 'axios';

// 圖片upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button, Form, Input, DatePicker, Select, InputNumber, Spin, message } from 'antd';
const { Option } = Select;
const Sighup = ({ setlogoutState }) => {
  const [member, setMember] = useState({
    username: '',
    useremail: '',
    userpassword: '',
    userconfirmpassword: '',
    usergender: '',
    userbirthday: '',
    userage: '',
    userphone: '',
    userphoto: '',
  });

  function handleOnChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    // e.preventDefault();
    if (member.userage < 18) {
      message.error('未滿18歲');
      return;
    }
    try {
      let formData = new FormData();
      formData.append('username', member.username);
      formData.append('useremail', member.useremail);
      formData.append('userpassword', member.userpassword);
      formData.append('userconfirmpassword', member.userconfirmpassword);
      formData.append('usergender', member.usergender);
      formData.append('userbirthday', member.userbirthday);
      formData.append('userage', member.userage);
      formData.append('userphone', member.userphone);
      formData.append('userphoto', member.userphoto);
      let response = await axios.post(`${API_URL}/auth/register`, formData);
      // console.log(response.data.result);

      message.success('註冊成功');
      setlogoutState(1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (e) {
      // console.log(e.response.data.error);
      message.error(e.response.data.error);
    }
  }

  const [form] = Form.useForm();

  const page1HeaderInfo = {
    titleEn: 'Sign up',
    titleCn: '會員註冊',
    menuList: [],
    imgs: {
      m: 'signup.png',
      pc: 'signup.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '首頁',
      },
      selected: 'groupList',
      selectOptions: [
        {
          name: '揪團專區',
          value: 'groupList',
        },
        {
          name: 'test',
          value: 'groupList2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  // form label
  const signupuserimgLabel = (
    <div className="login-title">
      <span>使用者頭像</span>
    </div>
  );
  const signupusernameLabel = (
    <div className="login-title">
      <span>使用者姓名</span>
    </div>
  );
  const signupuserbirthLabel = (
    <div className="login-title">
      <span>出生年月</span>
    </div>
  );
  const signupusergenderLabel = (
    <div className="login-title">
      <span>使用者性別</span>
    </div>
  );
  const signupuseremailLabel = (
    <div className="login-title">
      <span>使用者帳號</span>
    </div>
  );
  const signupuserpasswordLabel = (
    <div className="login-title">
      <span>使用者密碼</span>
    </div>
  );
  const signupuserconfirmpasswordLabel = (
    <div className="login-title">
      <span>再次輸入密碼</span>
    </div>
  );

  // 圖片upload
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
  const handleChange = ({ fileList: newFileList }, e) => {
    setFileList(newFileList);
    console.log(newFileList[0]['originFileObj']);
    setMember({ ...member, userphoto: newFileList[0]['originFileObj'] });
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
    <>
      <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        <section className="signuppage">
          <div className="signuptitle">
            <div className="page-type1-area-title">註冊</div>
          </div>
          <div className="signupcard">
            <div className="signupform">
              <Form form={form} layout="vertical">
                <Form.Item className="loginformimg" name="signupuserimg" label={signupuserimgLabel}>
                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>

                  <div>
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
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupusername"
                  label={signupusernameLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者姓名',
                    },
                  ]}
                >
                  <Input placeholder="使用者姓名" name="username" value={member.username} onChange={handleOnChange} />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  label={signupuserbirthLabel}
                  rules={[
                    {
                      required: true,
                      message: '請填寫出生年月',
                    },
                    {},
                  ]}
                >
                  <DatePicker
                    onChange={(e) => {
                      let newDate = new Date(e._d);
                      let nowDate = new Date();
                      let age = nowDate.getFullYear() - newDate.getFullYear();
                      let result = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
                      // console.log(age);
                      // console.log(result);
                      setMember({ ...member, userbirthday: result, userage: age });
                    }}
                  />
                </Form.Item>
                <Form.Item className="loginformpart" name="signupusergender" label={signupusergenderLabel} rules={[{ required: true, message: '請輸入使用者性別' }]}>
                  <Select
                    name="usergender"
                    value={member.usergender}
                    onChange={(e) => {
                      setMember({ ...member, usergender: e });
                    }}
                  >
                    <Option value="M">男生</Option>
                    <Option value="F">女生</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  className="loginformpart"
                  name="signupuseremail"
                  label={signupuseremailLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者信箱',
                    },
                  ]}
                >
                  <Input name="useremail" value={member.useremail} onChange={handleOnChange} placeholder="使用者信箱" />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuserpassword"
                  label={signupuserpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者密碼',
                    },
                  ]}
                >
                  <Input.Password name="userpassword" value={member.userpassword} onChange={handleOnChange} placeholder="使用者密碼" />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuserconfirmpassword"
                  label={signupuserconfirmpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者密碼',
                    },
                  ]}
                >
                  <Input.Password placeholder="使用者密碼" name="userconfirmpassword" value={member.userconfirmpassword} onChange={handleOnChange} />
                </Form.Item>
                <Form.Item className="loginformpart w-100 text-center mt-4">
                  <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit" onClick={handleSubmit}>
                    會員註冊
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="login">
            已經是會員 ? 點我{' '}
            <span
              onClick={() => {
                setlogoutState(1);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              登入會員
            </span>
          </div>
        </section>
        <section className="notice">
          注意事項 :<span>※未滿18歲請勿註冊。</span>
          <span>※本頁面只提供會員註冊，如要修改會員資料請至會員中心 > 會員資料，進行更新。</span>
        </section>
      </div>
    </>
  );
};

export default Sighup;
