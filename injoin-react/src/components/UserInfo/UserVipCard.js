import { useState } from 'react';
import vips4img from '../../assets/images/fe/uservip/gold.png';

const UserVipCard = () => {
  const [UserVipCardState, setUserVipCardState] = useState(0);

  return (
    <>
      <div className="uservips4-nav">
        <ul>
          <li>
            <div
              className={`${UserVipCardState === 0 && 'active'}`}
              onClick={() => {
                setUserVipCardState(0);
              }}
            >
              黃金
            </div>
          </li>
          <li>
            <div
              className={`${UserVipCardState === 1 && 'active'}`}
              onClick={() => {
                setUserVipCardState(1);
              }}
            >
              柏金
            </div>
          </li>
          <li>
            <div
              className={`${UserVipCardState === 2 && 'active'}`}
              onClick={() => {
                setUserVipCardState(2);
              }}
            >
              鑽石
            </div>
          </li>
        </ul>
      </div>
      <div className="uservips4-main">
        <div className="s4maincontent">
          <div className="uservips4-title">黃金會員</div>
          <div className="uservips4-text">註冊會員即享有黃金會員之等級福利</div>
          <div className="uservips4-card">
            <div className="card-title">黃金會員專屬折扣</div>
            <table className="card-table">
              <tbody>
                <tr>
                  <th>升級條件 : </th>
                  <td>首次註冊</td>
                </tr>
                <tr>
                  <th>新會員禮 :</th>
                  <td>購物金 $100</td>
                </tr>
                <tr>
                  <th>當月壽星禮: </th>
                  <td>贈購物金$50</td>
                </tr>
                <tr>
                  <th>全館優惠 :</th>
                  <td>
                    單筆消費滿$5000
                    <br />
                    打95折
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="card-button">前往註冊/登入</button>
          </div>
        </div>
        <div className="s4mainimg">
          <img src={vips4img} alt="" />
        </div>
      </div>
    </>
  );
};

export default UserVipCard;
