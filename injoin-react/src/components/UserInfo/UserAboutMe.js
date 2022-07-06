import upperUsericon from '../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { userState } from '../../App';
import { useContext, useState } from 'react';
import { API_URL, BE_IMAGE_URL } from '../../utils/config';
import axios from 'axios';

const UserAboutMe = () => {
  // chennnn
  const usermember = useContext(userState);
  // console.log(usermember.member);

  const [userAbout, setUserAbout] = useState({
    userId: usermember.member ? usermember.member.id : '',

    userName: usermember.member ? usermember.member.name : '',
    userAboutme: usermember.member ? usermember.member.about_user : '',
    userImg: usermember.member ? usermember.member.user_img : '',
  });
  // console.log('userAbout',userAbout);

  function handleChange(e) {
    setUserAbout({ ...userAbout, [e.target.name]: e.target.value });
  }
  // console.log(usermember);
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
  // console.log(BE_IMAGE_URL);

  return (
    <>
      {usermember.islogin ? (
        <div className="userInfo-userCard">
          <div className="upper-half">
            <div className="upper-background">
              <img src={upperBackground} alt="" />
            </div>
            <div className="upper-usericon">
              <img src={`${BE_IMAGE_URL}${userAbout.userImg}`} alt="" />
            </div>
          </div>
          <div className="lower-half">
            <Form
              initialValues={{
                usernickname: userAbout.userName,
                useraboutme: userAbout.userAboutme,
              }}
            >
              {/* 顯示暱稱 */}
              <Form.Item label={usernicknameLabel} name="usernickname">
                <Input disabled value={userAbout.userName} />
              </Form.Item>
              {/* 關於我 */}
              <Form.Item label={useraboutmeLabel} name="useraboutme">
                <TextArea name="userAboutme" value={userAbout.userAboutme} onChange={handleChange} />
              </Form.Item>
              {/* 送出按鈕 */}
              <Form.Item className="w-100 text-center mt-4">
                <Button
                  className="btn btn-none injoin-btn-outline text-gold h-auto"
                  htmlType="submit"
                  onClick={async (e) => {
                    e.preventDefault();
                    let res = await axios.post(`${API_URL}/auth/changeAbout?userId=${userAbout.userId}`,userAbout)
                  }}
                >
                  更改資料
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UserAboutMe;
