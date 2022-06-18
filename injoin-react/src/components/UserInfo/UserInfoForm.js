import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import iconURL from '../../assets/images/fe/membercenter/usericon.png';
import UserProfile from './UserProfile';
const UserInfoForm = () => {
  const [userInfoTableMode, setUserInfoTableMode] = useState(0);
  const ularray = ['個人檔案', '關於我', '更改密碼'];

  return (
    <>
      <div className="page-type1-area-title">會員資料</div>
      <div className="member-box">
        <nav className="memberbox-nav">
          <ul className="memberbox-ul list-unstyled d-flex row">
            {ularray.map((value, index) => {
              return (
                <li
                  key={index}
                  className="col-4 col-md-3"
                  onClick={() => {
                    setUserInfoTableMode(index);
                  }}
                >
                  {value}
                </li>
              );
            })}
          </ul>
        </nav>
        {}
        <UserProfile />
        {/* <div className="member-card">
          <div className="member-user">
            <div className="user-img">
              <img src={iconURL} alt="" />
            </div>
            <Button className="user-button" variant="light">
              編輯照片
            </Button>
          </div>
          <div className="member-input row my-5">
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="fullname" className="w-25 text-end">
                真實姓名：
              </label>
              <input type="text" name="fullname" className="w-50 user-input" />
            </div>
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="username" className="w-25 text-end">
                線上暱稱：
              </label>
              <input type="text" name="username" className="w-50 user-input" />
            </div>
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="useremail" className="w-25 text-end">
                電子郵件：
              </label>
              <input type="text" name="useremail" className="w-50 user-input" />
            </div>
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="userbirth" className="w-25 text-end">
                出生日期：
              </label>
              <input type="date" name="userbirth" className="w-50 user-input" />
            </div>
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="userphone" className="w-25 text-end">
                手機號碼：
              </label>
              <input type="text" name="userphone" className="w-50 user-input" />
            </div>
            <div className="input-item col-12 my-2 my-md-4">
              <label htmlFor="userhome" className="w-25 text-end">
                居家住址：
              </label>
              <textarea type="text" name="userhome" className="w-50 user-input" />
            </div>
            <button className="member-submit">更新</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default UserInfoForm;
