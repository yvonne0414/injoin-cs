import { useState } from 'react';
import UserAboutMe from './UserAboutMe';
import UserInfoChangePasswd from './UserInfoChangePasswd';
import UserProfile from './UserProfile';


const UserInfoForm = () => {
  const [userInfoTableMode, setUserInfoTableMode] = useState(2);
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
        {userInfoTableMode === 0 && <UserProfile />}
        {userInfoTableMode === 1 && <UserAboutMe />}
        {userInfoTableMode === 2 && <UserInfoChangePasswd />}
        
        
        
      </div>
    </>
  );
};

export default UserInfoForm;
