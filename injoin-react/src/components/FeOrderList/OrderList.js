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
        <div className="list-content_order_num">{data.id}</div>
        <div className="list-content_order_time">{data.order_time}</div>
        <div className="list-content_order_status">{data.logiStaCateName}</div>
        <div className="list-content_order_pay">{data.logiCateName}</div>
        <div className="list-content_order_total">{data.user_id}</div>
        <div className="list-content_btn">
          <Link to={`/account/order/${data.id}`}>詳細內容</Link>
        </div>
      </div>
    </>
  );
};

export default OrderListForm;
