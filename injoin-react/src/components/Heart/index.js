import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { API_URL } from '../../utils/config';

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

  // 設定userid
  let userid = 1;

  return (
    <>
      {fav ? (
        <FaHeart
          className="prd-card-icon-Heart"
          fill="#ac2c32"
          onClick={async () => {
            setFav(false);
            if (heartState === 1) {
              let response = await axios.get(`${API_URL}/userlike/del/${userid}/${data.id}`);
              window.alert(`刪除商品: userid${userid}, data.id${data.id}, ${response.data.message}`);
            }
            if (heartState === 2) {
              // console.log(`${API_URL}/userlike/bartd/${userid}/del?bartdid=${data.id}`);
              let response = await axios.get(`${API_URL}/userlike/bartd/${userid}/del?bartdid=${data.id}`);
              window.alert(`刪除調酒: userid${userid}, data.id${data.id}, ${response.data.message}`);
            }
          }}
        />
      ) : (
        <FaRegHeart
          className="prd-card-icon-Heart"
          onClick={async () => {
            setFav(true);
            if (heartState === 1) {
              let response = await axios.get(`${API_URL}/userlike/add/${userid}/${data.id}`);
              window.alert(`加入商品: userid${userid}, data.id${data.id}, ${response.data.message}`);
            }
            if (heartState === 2) {
              // console.log(`${API_URL}/userlike/bartd/${userid}/add?bartdid=${data.id}`);
              let response = await axios.get(`${API_URL}/userlike/bartd/${userid}/add?bartdid=${data.id}`);
              window.alert(`加入調酒: userid${userid}, data.id${data.id}, ${response.data.message}`);
            }
          }}
        />
      )}
    </>
  );
}

export default Heart;
