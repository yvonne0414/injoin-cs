import { Modal, Upload, Button, Form, Cascader, Input, Space, DatePicker, Select, InputNumber, message } from 'antd';
import axios from 'axios';
import { useState, useContext } from 'react';
import { userState } from '../../App';
import { API_URL } from '../../utils/config';

const UserInfoChangePasswd = () => {
  let userstate = useContext(userState);

  const [changepwd, setChangepwd] = useState({
    userid: userstate.member.id,
    passwd: '',
    newpasswd: '',
    renewpasswd: '',
  });
  const handleChange = (e) => {
    setChangepwd({ ...changepwd, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (changepwd.passwd !== changepwd.renewpasswd) {
      message.error('請輸入相同密碼');
      return;
    } else {
      try {
        let response = await axios.post(`${API_URL}/auth/changepwd`, changepwd, {
          // 如果想要跨源讀寫 cookie
          withCredentials: true,
        });
        message.success('更改密碼成功');
      } catch (e) {
        // console.error(e.response.data.error);
        message.error(e.response.data.error);
      }
    }
  }
  // 表單
  const [form] = Form.useForm();
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      groupDate: fieldsValue['groupDate'].format('YYYY-MM-DD HH:mm'),
      groupDeadLine: fieldsValue['groupDeadLine'].format('YYYY-MM-DD HH:mm'),
    };
    console.log('Received values of form: ', values);
  };

  // label
  const originallypasswordLabel = (
    <div className="userinfo-change-title">
      <span>原始密碼</span>
    </div>
  );
  const newpasswordLabel = (
    <div className="userinfo-change-title">
      <span>新密碼</span>
    </div>
  );
  const confirmpasswordLabel = (
    <div className="userinfo-change-title">
      <span>確認新密碼</span>
    </div>
  );

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: 'vertical',
        }}
        onFinish={onFinish}
        className="d-flex flex-column flex-md-row"
      >
        <div className="box-left"></div>
        <div className="box-right">
          {/* 原始密碼 */}
          <Form.Item
            label={originallypasswordLabel}
            name="passwd"
            rules={[
              {
                required: true,
                message: '請輸入原始密碼',
              },
            ]}
          >
            <Input placeholder="原始密碼" name="passwd" value={changepwd.passwd} onChange={handleChange} />
          </Form.Item>
          {/* 新密碼 */}
          <Form.Item
            label={newpasswordLabel}
            name="newpasswd"
            rules={[
              {
                required: true,
                message: '此欄位不能為空',
              },
            ]}
          >
            <Input placeholder="新密碼" name="newpasswd" value={changepwd.newpasswd} onChange={handleChange} />
          </Form.Item>
          {/* 再次輸入密碼 */}
          <Form.Item
            label={confirmpasswordLabel}
            name="renewpasswd"
            rules={[
              {
                required: true,
                message: '此欄位不能為空',
              },
            ]}
          >
            <Input placeholder="再次輸入新密碼" name="renewpasswd" value={changepwd.renewpasswd} onChange={handleChange} />
          </Form.Item>
          <Form.Item className="w-100 text-center mt-4">
            <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit" onClick={handleSubmit}>
              更改密碼
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default UserInfoChangePasswd;
