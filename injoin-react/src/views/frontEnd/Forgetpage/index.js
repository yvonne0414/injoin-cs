import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../utils/config';
import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import logoimg from '../../../assets/images/shared/injoinlogo.png';
import Swal from 'sweetalert2';

const ForgetPage = () => {
  const navigate = useNavigate();
  const { mail } = useParams();
  const [passwordTable, setPasswordTable] = useState({
    id: 1,
    name: '',
    password: '',
    repassword: '',
  });
  useEffect(() => {
    let getUser = async () => {
      // console.log(`${API_URL}/reset/getUserByemail?mail=${mail}`);
      let res = await axios.get(`${API_URL}/reset/getUserByemail?mail=${mail}`);
      // console.log(res.data[0].id);
      // console.log(res.data[0].name);
      setPasswordTable({ ...passwordTable, id: res.data[0].id, name: res.data[0].name });
    };
    getUser();
  }, []);

  function handleChange(e) {
    console.log(e.target.name);
    setPasswordTable({ ...passwordTable, [e.target.name]: e.target.value });
  }

  console.log(passwordTable);

  // chenn

  const page1HeaderInfo = {
    titleEn: 'ForgetPassword',
    titleCn: '忘記密碼',
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
      <span>請輸入新的密碼</span>
    </div>
  );
  const loginuserpasswordLabel = (
    <div className="login-title">
      <span>再次輸入新密碼</span>
    </div>
  );
  const [form] = Form.useForm();

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordTable.password !== passwordTable.repassword) {
      message.error('請輸入相同的密碼');
      return;
    }

    let res = await axios.post(`${API_URL}/reset`, passwordTable);
    Swal.fire({
      icon: 'success',
      title: '成功更換密碼，幫你跳轉至登入頁面',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/account/user')
  };

  return (
    <>
      <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        <section className="loginpage">
          <div className="logintitle">
            <div className="page-type1-area-title">歡迎使用者：{passwordTable.name}</div>
          </div>
          <div className="logincard">
            <div className="loginimg">
              <img src={logoimg} alt="" />
            </div>
            <div className="loginform">
              <Form form={form}>
                <Form.Item
                  className="loginformpart"
                  name="password"
                  label={loginusermailLabel}
                  rules={[
                    {
                      required: true,
                      message: '請輸入新的密碼',
                    },
                  ]}
                >
                  <Input.Password name="password" placeholder="請輸入新的密碼" value={passwordTable.password} onChange={handleChange} />
                </Form.Item>
                <Form.Item
                  className="loginformpart"
                  name="repassword"
                  label={loginuserpasswordLabel}
                  rules={[
                    {
                      required: true,
                      message: '再次輸入新密碼',
                    },
                  ]}
                >
                  <Input.Password name="repassword" placeholder="再次輸入新密碼" value={passwordTable.repassword} onChange={handleChange} />
                </Form.Item>
                <Form.Item className="loginformpart w-100 text-center mt-4">
                  <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit" onClick={handleSubmit}>
                    更改密碼
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="box-title">
        歡迎{passwordTable.name},{passwordTable.id}
      </div>
      <div>
        <input type="text" name="password" value={passwordTable.password} onChange={handleChange} />
        <input type="text" name="repassword" value={passwordTable.repassword} onChange={handleChange} />
      </div> */}
    </>
  );
};

export default ForgetPage;
