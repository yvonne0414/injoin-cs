import React from 'react';
import { Link } from 'react-router-dom';

const OrderListForm = (props) => {
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
        <div className="list-content_order_num">{data.orderNum}</div>
        <div className="list-content_order_time">{data.orderTime}</div>
        <div className="list-content_order_status">{data.orderStatus}</div>
        <div className="list-content_order_pay">{data.orderPay}</div>
        <div className="list-content_order_total">{data.orderTotal}</div>
        <div className="list-content_btn">
          <Link to="/account/order/1">{data.orderBtn}</Link>
        </div>
      </div>
    </>
  );
};

export default OrderListForm;
