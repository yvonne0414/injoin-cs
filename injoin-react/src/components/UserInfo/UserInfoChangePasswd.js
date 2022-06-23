import { Modal, Upload, Button, Form, Cascader, Input, Space, DatePicker, Select, InputNumber } from 'antd';
const UserInfoChangePasswd = () => {


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
        className='d-flex flex-column flex-md-row'
      >
        <div className="box-left"></div>
        <div className="box-right">
        {/* 原始密碼 */}
        <Form.Item
          label={originallypasswordLabel}
          name="userinfoChange"
          rules={[
            {
              required: true,
              message: '請輸入原始密碼',
            },
          ]}
        >
          <Input placeholder="原始密碼" />
        </Form.Item>
        {/* 新密碼 */}
        <Form.Item
          label={newpasswordLabel}
          name="userinfoChange"
          rules={[
            {
              required: true,
              message: '此欄位不能為空',
            },
          ]}
        >
          <Input placeholder="新密碼" />
        </Form.Item>
        {/* 再次輸入密碼 */}
        <Form.Item
          label={confirmpasswordLabel}
          name="userinfoChange"
          rules={[
            {
              required: true,
              message: '此欄位不能為空',
            },
          ]}
        >
          <Input placeholder="再次輸入新密碼" />
        </Form.Item>
        <Form.Item className="w-100 text-center mt-4">
          <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit">
            更改密碼
          </Button>
        </Form.Item></div>
      </Form>
    </>
  );
};

export default UserInfoChangePasswd;
