import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { message } from 'antd';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { ImHeart, ImHeartBroken } from 'react-icons/im';
import { API_URL } from '../../utils/config';

import { userState } from '../../App';

function Heart({ isLike, data, heartState }) {
  // data{
  //   id:1
  // }

  //1是加到商品 2 是加到酒譜
  heartState = heartState || 1;

  isLike = isLike || false;
  data = data || {};
  const [fav, setFav] = useState(false);
  // console.log(data);
  useEffect(() => {
    setFav(isLike);
  }, []);

  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

  // 設定userid
  let userid = memberInfo.userId;

  return (
    <>
      {fav ? (
        <FaHeart
          className="prd-card-icon-Heart"
          fill="#ac2c32"
          onClick={async () => {
            if (loginInfo.islogin) {
              setFav(false);
              if (heartState === 1) {
                let response = await axios.get(`${API_URL}/userlike/del/${userid}/${data.id}`);
                // window.alert(`刪除商品: userid${userid}, data.id${data.id}, ${response.data.message}`);
                message.success({
                  content: `刪除商品: userid${userid}, data.id${data.id}, ${response.data.message}`,
                  icon: <ImHeartBroken fill="#ac2c32" />,
                });
              }
              if (heartState === 2) {
                // console.log(`${API_URL}/userlike/bartd/${userid}/del?bartdid=${data.id}`);
                let response = await axios.get(`${API_URL}/userlike/bartd/${userid}/del?bartdid=${data.id}`);
                // window.alert(`刪除調酒: userid${userid}, data.id${data.id}, ${response.data.message}`);
                message.success({
                  content: `刪除調酒: userid${userid}, data.id${data.id}, ${response.data.message}`,
                  icon: <ImHeartBroken fill="#ac2c32" />,
                });
              }
            } else {
              message.warning('請先登入');
            }
          }}
        />
      ) : (
        <FaRegHeart
          className="prd-card-icon-Heart"
          onClick={async () => {
            if (loginInfo.islogin) {
              setFav(true);
              if (heartState === 1) {
                let response = await axios.get(`${API_URL}/userlike/add/${userid}/${data.id}`);
                // window.alert(`加入商品: userid${userid}, data.id${data.id}, ${response.data.message}`);
                message.success({
                  content: `加入商品: userid${userid}, data.id${data.id}, ${response.data.message}`,
                  icon: <ImHeart fill="#ac2c32" />,
                });
              }
              if (heartState === 2) {
                // console.log(`${API_URL}/userlike/bartd/${userid}/add?bartdid=${data.id}`);
                let response = await axios.get(`${API_URL}/userlike/bartd/${userid}/add?bartdid=${data.id}`);
                // window.alert(`加入調酒: userid${userid}, data.id${data.id}, ${response.data.message}`);
                message.success({
                  content: `加入調酒: userid${userid}, data.id${data.id}, ${response.data.message}`,
                  icon: <ImHeart fill="#ac2c32" />,
                });
              }
            } else {
              message.warning('請先登入');
            }
          }}
        />
      )}
    </>
  );
}

export default Heart;
