import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import { Modal, Upload, Button, Form, Input, DatePicker, Select, InputNumber } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const Sighup = () => {
  const [member, setMember] = useState({
    loginusermail: '',
    loginuserpassword: '',
  });
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('');
    } catch (e) {
      console.error(e);
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

  return (
    <>
      <div className="container">
        <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
        <section className="signuppage">
          <div className="signuptitle">
            <div className="page-type1-area-title">註冊</div>
          </div>
          <div className="signupcard">
            <div className="signupform">
              <Form form={form}>
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
                  <Input placeholder="使用者姓名" />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuserbirth"
                  label={signupuserbirthLabel}
                  rules={[
                    {
                      required: true,
                      message: '請填寫出生年月',
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuseremail"
                  label={signupuseremailLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者姓名',
                    },
                  ]}
                >
                  <Input placeholder="使用者姓名" />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuserpassword"
                  label={signupuserpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者姓名',
                    },
                  ]}
                >
                  <Input.Password placeholder="使用者姓名" />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="signupuserconfirmpassword"
                  label={signupuserconfirmpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者姓名',
                    },
                  ]}
                >
                  <Input.Password placeholder="使用者姓名" />
                </Form.Item>
                <Form.Item className="loginformpart w-100 text-center mt-4">
                  <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit">
                    會員註冊
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="login">
            已經是會員 ? 點我 <span>登入會員</span>
          </div>
        </section>
        <section className="notice">
          注意事項 : <br /> ※未滿18歲請勿註冊。 <br /> ※本頁面只提供會員註冊，如要修改會員資料請至會員中心 > 會員資料，進行更新。
        </section>
      </div>
    </>
  );
};

export default Sighup;
