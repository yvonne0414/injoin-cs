import React, { useState } from 'react';
import ChenAbout from './ChenAbout';
import ChenLogin from './ChenLogin';
import ChenRegister from './ChenRegister';

import axios from 'axios';
import { API_URL } from '../../../utils/config';

const ChenTest = () => {
  let [state, setState] = useState(1);
  let arr = [1, 2, 3];



  async function handleLogout(e) {
    e.preventDefault();
    try {
      // 方法1: 當你的表單沒有圖片的時候，可以直接傳輸 json 到後端去
      // axios.post(URL, data, config)
      await axios.get(`${API_URL}/auth/logout`, {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      });
      console.log('登出成功');
    } catch (e) {
      console.error('登出失敗');
    }
  }


  return (
    <>
      <h1>1註冊 2登入 3 登入狀態</h1>
      <div className="d-flex">
        {arr.map((v, i) => {
          return (
            <div
              className="px-5"
              onClick={() => {
                setState(v);
              }}
              key={i}
            >
              {v}
            </div>
          );
        })}
      </div>
      <button onClick={handleLogout}> 登出</button>
      {state === 1 && <ChenRegister />}

      {state === 2 && <ChenLogin />}

      {state === 3 && <ChenAbout />}
    </>
  );
};

export default ChenTest;
