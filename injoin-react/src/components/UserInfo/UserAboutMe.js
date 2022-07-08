import upperUsericon from '../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';
import { Form, Input, Button, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { userState } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { API_URL, BE_IMAGE_URL } from '../../utils/config';
import axios from 'axios';

const UserAboutMe = () => {
  // chennnn
  const usermember = useContext(userState);
  // console.log(usermember.member);

  let userId = usermember.member ? usermember.member.id : '';
  // console.log(userId);

  const [userAbout, setUserAbout] = useState({
    userId: usermember.member ? usermember.member.id : '',

    userName: usermember.member ? usermember.member.name : '',
    userAboutme: usermember.member ? usermember.member.about_user : '',
    userImg: usermember.member ? usermember.member.user_img : '',
  });

  // console.log('userAbout2', usermember);
  // console.log('userAbout',userAbout);

  useEffect(() => {
    window.scrollTo(0, 0);
    let getUser = async () => {
      let res = await axios.get(`${API_URL}/auth/about?userid=${usermember.member.id}`);
      // console.log('res.data[0].about_user',res.data[0].about_user);
      setUserAbout({
        userId: res.data[0].id,
        userName: res.data[0].name,
        userAboutme: res.data[0].about_user,
        userImg: res.data[0].user_img,
      });
    };
    getUser();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    let getUser = async () => {
      // console.log(usermember.member.id);
      let res = await axios.get(`${API_URL}/auth/about?userid=${usermember.member.id}`);
      // console.log(res.data[0]);
      setUserAbout({
        userId: res.data[0].id,
        userName: res.data[0].name,
        userAboutme: res.data[0].about_user,
        userImg: res.data[0].user_img,
      });
    };
    getUser();
  }, [usermember.member]);

  function handleChange(e) {
    setUserAbout({ ...userAbout, [e.target.name]: e.target.value });
  }

  console.log('userAbout', userAbout);
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

  console.log('userAbout', userAbout);

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
                usernickname: `${userAbout.userName}`,
                useraboutme: `${userAbout.userAboutme}`,
              }}
            >
              {/* 顯示暱稱 */}
              <Form.Item label={usernicknameLabel} name="usernickname">
                <Input disabled value={`${userAbout.userName}`} />
                <p className="d-none">{userAbout.userName}</p>
              </Form.Item>
              {/* 關於我 */}
              <Form.Item label={useraboutmeLabel} name="useraboutme">
                <TextArea name="userAboutme" value={`${userAbout.userAboutme ? userAbout.userAboutme : ''}`} placeholder="介紹介紹自己吧～" onChange={handleChange} />
                <p className="d-none">{userAbout.userAboutme}</p>
              </Form.Item>
              {/* 送出按鈕 */}
              <Form.Item className="w-100 text-center mt-4">
                <Button
                  className="btn btn-none injoin-btn-outline text-gold h-auto"
                  htmlType="submit"
                  onClick={async (e) => {
                    // console.log(userAbout);
                    e.preventDefault();
                    let res = await axios.post(`${API_URL}/auth/changeAbout?userId=${userAbout.userId}`, userAbout);
                    message.success('更改成功');
                    let response = await axios.get(`${API_URL}/auth/about?userid=${userAbout.userId}`);
                    // console.log(response.data[0].about_user);
                    setUserAbout({ ...userAbout, userAboutme: response.data[0].about_user });
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
