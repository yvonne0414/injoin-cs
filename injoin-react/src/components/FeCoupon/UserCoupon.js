import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserCouponList = (props) => {
  const { data, index, pagination } = props;

  // const usercouponArr = {
  //   coupomNum: '1001',
  //   couponName: '註冊禮券折$100',
  //   couponStart: '2022/05/29',
  //   couponEnd: '2022/06/29',
  //   couponStatus: '未使用',
  //   couponBtn: '詳細內容',
  // };
  let order = (Number(pagination.page) - 1) * 5 + Number(index) + 1;
  console.log('index', index);
  console.log('page', pagination.page);

  // console.log(data);

  return (
    <>
      <div className="page-type1-list-content">
        <div className="list-content_coupon_num">{order}</div>
        <div className="list-content_coupon_name">{data.name}</div>
        <div className="list-content_coupon_start">{data.start_time}</div>
        <div className="list-content_coupon_end">{data.end_time}</div>
        {/* <div className="list-content_coupon_status">{data.couponStatus}</div> */}
        <div className="list-content_btn">
          <Link to={`/account/coupon/${data.id}`}>詳細內容</Link>
        </div>
      </div>
    </>
  );
};

export default UserCouponList;
