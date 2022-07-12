// 圖片upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button, Form, Input, DatePicker, Select, InputNumber, message } from 'antd';
import { useState, useContext } from 'react';
import moment from 'moment';
import { userState } from '../../App';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useEffect } from 'react';

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

const UserInfoProfile = ({ cities }) => {
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
    // console.log('Received values of form: ', values);
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

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

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
  // chennnn
  const usermember = useContext(userState);
  // console.log(usermember.member.address_detail);

  const [userAddress, setUserAddress] = useState({
    userCountry: 1,
    userAddressDetail: usermember.member.address_detail,
    userPhone: usermember.member.phone,
    userphoto: '',
  });

  let handleOnChange = (e) => {
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleChange = ({ fileList: newFileList }, e) => {
    setFileList(newFileList);
    // console.log(newFileList[0]['originFileObj']);
    setUserAddress({ ...userAddress, userphoto: newFileList[0]['originFileObj'] });
  };

  const user = usermember.member;
  let memberGender = '1';
  if (user.gender === 'F') {
    memberGender = '2';
  } else {
    memberGender = '1';
  }

  useEffect(() => {
    setFileList([
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: `http://localhost:3001/images${user.user_img}`,
      },
    ]);
  }, [user]);

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          fullname: user.name,
          usergender: memberGender,
          useremail: user.email,
          userphone: user.phone,
          userbirthday: moment(user.birth_day, dateFormat),
        }}
        // onFinish={onFinish}
      >
        <div className="UserInfoProfile">
          {/* 照片 */}
          <div className="user-info-img">
            <Form.Item name="userinfoImg" getValueFromEvent={normFile} rules={[{ required: true, message: '請上傳使用者照片' }]}>
              <Upload customRequest={dummyRequest} listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>

            <Modal className="userinfoShowImg" visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
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
            {/* 暱稱
            <Form.Item label={usernicknameLabel} name="usernickname">
              <Input placeholder="請輸入暱稱" />
            </Form.Item> */}
            {/* 電子信箱 */}
            <Form.Item label={useremailLabel} name="useremail">
              <Input disabled type="email" />
            </Form.Item>
            {/* 性別 */}
            <Form.Item label={usergenderLabel} name="usergender">
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
              <DatePicker disabled />
            </Form.Item>
            {/* 手機號碼 */}
            <Form.Item label={userphoneLabel} name="userphone">
              <Input name="userPhone" value={userAddress?.userPhone} onChange={handleOnChange} />
            </Form.Item>
            {/* 地址 */}
            <Form.Item label={useraddressLabel} className="w-100" name="useraddress">
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
                  <Select
                    defaultValue={user.address_country}
                    placeholder="請選擇縣市"
                    onChange={(e) => {
                      // console.log(e);
                      setUserAddress({ ...userAddress, userCountry: e });
                    }}
                  >
                    {cities.map((city) => {
                      // console.log(city);
                      return (
                        <Option key={city.code} value={city.code}>
                          {city.name}
                        </Option>
                      );
                    })}
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
                  {/* chennn */}
                  <Input
                    defaultValue={user.address_detail}
                    style={{
                      width: '70%',
                    }}
                    placeholder="地址"
                    name="userAddressDetail"
                    value={userAddress.userAddressDetail}
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item className="w-100 text-center mt-4">
              <Button
                className="btn btn-none injoin-btn-outline text-gold h-auto"
                onClick={async () => {
                  // console.log(user);
                  // console.log(userAddress);
                  // console.log(userAddress.userAddressDetail);
                  // console.log();
                  if (userAddress.userPhone == '' || userAddress.userAddressDetail == '' || userAddress.userCountry == '') {
                    alert('填寫完整');
                    return;
                  }

                  let formData = new FormData();
                  formData.append('userAddressDetail', userAddress.userAddressDetail);
                  formData.append('userCountry', userAddress.userCountry);
                  formData.append('userPhone', userAddress.userPhone);
                  formData.append('userphoto', userAddress.userphoto);
                  let response = await axios.post(`${API_URL}/auth/changeaddress?userId=${user.id}`, formData);
                  message.success('更改成功');
                }}
              >
                更新資料
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
};

export default UserInfoProfile;
