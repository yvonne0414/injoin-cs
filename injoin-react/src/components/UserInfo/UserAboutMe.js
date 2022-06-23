import upperUsericon from '../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const UserAboutMe = () => {
  const usernicknameLabel = (
    <div className="userinfo-about-title">
      <span>顯示暱稱</span>
    </div>
  );
  const useraboutmeLabel = (
    <div className="userinfo-about-title">
      <span>關於我</span>
    </div>
  );

  return (
    <>
      <div className="userInfo-userCard">
        <div className="upper-half">
          <div className="upper-background">
            <img src={upperBackground} alt="" />
          </div>
          <div className="upper-usericon">
            <img src={upperUsericon} alt="" />
          </div>
        </div>
        <div className="lower-half">
          <Form
            initialValues={{
              usernickname: 'Chen',
              useraboutme: 'some message',
            }}
          >
            {/* 顯示暱稱 */}
            <Form.Item label={usernicknameLabel} name="usernickname">
              <Input disabled />
            </Form.Item>
            {/* 關於我 */}
            <Form.Item label={useraboutmeLabel} name="useraboutme">
              <TextArea />
            </Form.Item>
            {/* 送出按鈕 */}
            <Form.Item className="w-100 text-center mt-4">
              <Button className="btn btn-none injoin-btn-outline text-gold h-auto" htmlType="submit">
                更改資料
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserAboutMe;
