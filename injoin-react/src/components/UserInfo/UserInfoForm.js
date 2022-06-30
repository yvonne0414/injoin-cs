import { useState, useContext } from 'react';
import { userState } from '../../App';
import UserAboutMe from './UserAboutMe';
import UserInfoChangePasswd from './UserInfoChangePasswd';
import UserInfoProfile from './UserInfoProfile';
import UserProfile from './UserProfile';

const UserInfoForm = () => {
  const userstate = useContext(userState);
  // console.log('userinfoFrom', userstate);

  const [userInfoTableMode, setUserInfoTableMode] = useState(1);
  const ularray = ['個人檔案', '關於我', '更改密碼'];

  return (
    <>
      <div className="member-box p-2 p-md-4">
        <div className="page-type1-area-title">會員資料</div>
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
        <div className="changeCard">
          {userInfoTableMode === 0 && <UserInfoProfile />}
          {userInfoTableMode === 1 && <UserAboutMe />}
          {userInfoTableMode === 2 && <UserInfoChangePasswd />}
        </div>
      </div>
    </>
  );
};

export default UserInfoForm;
