import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import logoimg from '../../../assets/images/shared/injoinlogo.png';
import { Modal, Upload, Button, Form, Input, DatePicker, Select, InputNumber, message } from 'antd';
import { useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { userState } from '../../../App';

const Login = ({ setlogoutState, setisLogin }) => {
  const apple = useContext(userState);
  // console.log("login: ", apple);

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
      // axios.post(URL, data, config)
      let response = await axios.post(`${API_URL}/auth/login`, member, {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      });
      // console.log('登入成功', response.data);
      message.success('登入成功');
      apple.setislogin(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (e) {
      // console.log(e);
      message.error('帳號或密碼錯誤');
      return

      // if (e.response.data.code == 3003) {
      //   帳號沒註冊;
      // } else {
      //   密碼錯誤;
      // }
    }
  }
  // Form
  const [form] = Form.useForm();
  const page1HeaderInfo = {
    titleEn: 'Log in',
    titleCn: '會員登入',
    menuList: [],
    imgs: {
      m: 'login.png',
      pc: 'login.png',
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
  const loginusermailLabel = (
    <div className="login-title">
      <span>使用者帳號</span>
    </div>
  );
  const loginuserpasswordLabel = (
    <div className="login-title">
      <span>使用者密碼</span>
    </div>
  );

  return (
    <>
      <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        <section className="loginpage">
          <div className="logintitle">
            <div className="page-type1-area-title">登入</div>
          </div>
          <div className="logincard">
            <div className="loginimg">
              <img src={logoimg} alt="" />
            </div>
            <div className="loginform">
              <Form form={form}>
                <Form.Item
                  className="loginformpart"
                  name="loginusermail"
                  label={loginusermailLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者帳號',
                    },
                  ]}
                >
                  <Input name="loginusermail" placeholder="使用者帳號" value={member.loginusermail} onChange={handleChange} />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="loginuserpassword"
                  label={loginuserpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入使用者密碼',
                    },
                  ]}
                >
                  <Input.Password name="loginuserpassword" placeholder="使用者密碼" value={member.loginuserpassword} onChange={handleChange} />
                </Form.Item>
                <Form.Item className="loginformpart w-100 text-center mt-4">
                  <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit" onClick={handleSubmit}>
                    會員登入
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="signup">
              還不是會員 ? 點我{' '}
              <span
                onClick={() => {
                  // console.log('click');
                  setlogoutState(2);
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                style={{ cursor: 'pointer' }}
              >
                註冊會員
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
