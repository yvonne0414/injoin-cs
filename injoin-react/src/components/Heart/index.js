import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { API_URL } from '../../utils/config';

function Heart({ isLike, data }) {
  isLike = isLike || false;
  data = data || {};
  const [fav, setFav] = useState(false);
  // console.log(data);
  useEffect(() => {
    setFav(isLike);
  }, []);
  // 設定userid
  let userid = 1

  return (
    <>
      {fav ? (
        <FaHeart
          className="prd-card-icon-Heart"
          fill="#ac2c32"
          onClick={async () => {
            setFav(false);
            let response = await axios.get(`${API_URL}/userlike/del/${userid}/${data.id}`);
            // console.log(response.data);
            window.alert(`userid${userid}, data.id${data.id}, ${response.data.message}`)
          }}
        />
      ) : (
        <FaRegHeart
          className="prd-card-icon-Heart"
          onClick={async () => {
            setFav(true);
            let response = await axios.get(`${API_URL}/userlike/add/${userid}/${data.id}`);
            // console.log(response.data);
            window.alert(`userid${userid}, data.id${data.id}, ${response.data.message}`)
          }}
        />
      )}
    </>
  );
}

export default Heart;
