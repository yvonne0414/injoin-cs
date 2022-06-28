import { FE_IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { userState } from '../../App';
import { useContext } from 'react';



const UserInfoVipLevel = () => {
  const apple = useContext(userState)
  console.log(apple)
  const UserInfoVipLevel = {
    vipLevel: 0,
    vipMessage: '根據今年度的累積達到此等級，繼續累積即可升級為鉑金會員',
  };

  return (
    <>
      <div className="members2-icon">
        {UserInfoVipLevel.vipLevel === 0 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel.png`} alt="" />}
        {UserInfoVipLevel.vipLevel === 1 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel2.png`} alt="" />}
        {UserInfoVipLevel.vipLevel === 2 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel3.png`} alt="" />}
      </div>
      <div className="members2-content">
        <div className="page-type1-area-title" id="grouplist-bolck2">
          會員等級
        </div>
        {UserInfoVipLevel.vipLevel === 0 && <div className="members2-userlevel">黃金會員</div>}
        {UserInfoVipLevel.vipLevel === 1 && <div className="members2-userlevel">柏金會員</div>}
        {UserInfoVipLevel.vipLevel === 2 && <div className="members2-userlevel">鑽石會員</div>}

        <div className="members2-usersth">{UserInfoVipLevel.vipMessage}，年度結算日為 1/1，會員期限至 2024/1/1</div>
        <div className="members2-levelrules">
          了解詳細
          <Link to="/">
            <span>會員等級說明</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserInfoVipLevel;
