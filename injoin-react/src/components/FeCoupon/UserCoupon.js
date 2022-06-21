import React from 'react';
import { Link } from 'react-router-dom';

const UserCouponList = (props) => {
  const { data } = props;
  // const [userOrderList, setUserOrderList] = useState(0);
  // const orderlist = {
  //   orderNum: '51345',
  //   orderTime: '2022/01/02',
  //   orderStatus: '已完成',
  //   orderPay: '已付款',
  //   orderTotal: 'NT$5022',
  //   orderBtn: '詳細內容',
  // };

  return (
    <>
      <div className="page-type1-list-content">
        <div className="list-content_coupon_num">1001</div>
        <div className="list-content_coupon_name">註冊禮券折$100</div>
        <div className="list-content_coupon_start">2022/05/29</div>
        <div className="list-content_coupon_end">2022/06/29</div>
        <div className="list-content_coupon_status">未使用</div>
        <div className="list-content_btn">
          <Link to="/group/1">詳細內容</Link>
        </div>
      </div>
    </>
  );
};

export default UserCouponList;
