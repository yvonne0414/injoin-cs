import React from 'react';
import { Link } from 'react-router-dom';

const UserCouponList = (props) => {
  const { data } = props;

  // const usercouponArr = {
  //   coupomNum: '1001',
  //   couponName: '註冊禮券折$100',
  //   couponStart: '2022/05/29',
  //   couponEnd: '2022/06/29',
  //   couponStatus: '未使用',
  //   couponBtn: '詳細內容',
  // };

  return (
    <>
      <div className="page-type1-list-content">
        <div className="list-content_coupon_num">{data.coupomNum}</div>
        <div className="list-content_coupon_name">{data.couponName}</div>
        <div className="list-content_coupon_start">{data.couponStart}</div>
        <div className="list-content_coupon_end">{data.couponEnd}</div>
        <div className="list-content_coupon_status">{data.couponStatus}</div>
        <div className="list-content_btn">
          <Link to="/account/coupon/1">詳細內容</Link>
        </div>
      </div>
    </>
  );
};

export default UserCouponList;
