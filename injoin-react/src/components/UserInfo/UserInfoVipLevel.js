import { API_URL, FE_IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { userState } from '../../App';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserInfoVipLevel = () => {
  const userstate = useContext(userState);
  // console.log("suerVIp:" , userstate)
  // let vip_level = 1 && userstate.member.vip_level;
  const [UserInfoVipLevel, setUserInfoVipLevel] = useState({
    vipLevel: 1,
    vipMessage: '根據今年度的累積達到此等級，繼續累積即可升級為鉑金會員',
  });
  // console.log('userstate',userstate);
  useEffect(() => {
    let getUser = async () => {
      // console.log(userstate.member.id);
      let res = await axios.get(`${API_URL}/auth/about?userid=${userstate.member.id}`);
      // console.log(res.data[0].vip_level);
      setUserInfoVipLevel({ ...UserInfoVipLevel, vipLevel: res.data[0].vip_level });
    };
    getUser();
  }, [userstate.member]);

  return (
    <>
      <div className="members2-icon">
        {UserInfoVipLevel.vipLevel === 1 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel.png`} alt="" />}
        {UserInfoVipLevel.vipLevel === 2 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel2.png`} alt="" />}
        {UserInfoVipLevel.vipLevel === 3 && <img src={`${FE_IMAGE_URL}/membercenter/memberlevel3.png`} alt="" />}
      </div>
      <div className="members2-content">
        <div className="page-type1-area-title" id="grouplist-bolck2">
          會員等級
        </div>
        {UserInfoVipLevel.vipLevel === 1 && <div className="members2-userlevel">黃金會員</div>}
        {UserInfoVipLevel.vipLevel === 2 && <div className="members2-userlevel">鉑金會員</div>}
        {UserInfoVipLevel.vipLevel === 3 && <div className="members2-userlevel">鑽石會員</div>}

        <div className="members2-usersth">{UserInfoVipLevel.vipMessage}，年度結算日為 1/1，會員期限至 2024/1/1</div>
        <div className="members2-levelrules">
          了解詳細
          <Link to="#">
            <span>會員等級說明</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserInfoVipLevel;
