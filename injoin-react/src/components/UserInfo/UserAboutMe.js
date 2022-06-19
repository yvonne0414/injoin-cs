import upperUsericon from '../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';

const UserAboutMe = () => {
  const userAbout = {
    userId: 'chen',
    userEmail: 'chen@test.com',
    userPhone: '0900111222',
  };
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
          <div className="lower-box">
            <div className="lower-title">暱稱：</div>
            <div className="lower-content">{userAbout.userId}</div>
          </div>
          <div className="lower-box">
            <div className="lower-title">電子信箱：</div>
            <div className="lower-content">{userAbout.userEmail}</div>
          </div>
          <div className="lower-box">
            <div className="lower-title">手機號碼：</div>
            <div className="lower-content">{userAbout.userPhone}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAboutMe;
