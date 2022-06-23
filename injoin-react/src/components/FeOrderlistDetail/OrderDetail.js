import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetail = (props) => {
  const { data } = props;

  // const orderlistDetail = [
  //   {
  //     detailprdNum: 'AB123',
  //     detailprdImg: 'order-detail-img-1.png',
  //     detailprdName: '金彬黑波本威士忌',
  //     detailprdPrice: 'NT$680',
  //     detailprdNumber: '1',
  //     detailprdTotal: 'NT$680',
  //   },
  // ];

  return (
    <>
      <div className="listdetail-card-bg mb-2">
        <div className="listdetail-card-context ">
          <div className="list-content_orderdetail_num">{data.detailprdNum}</div>

          <div className="list-content_orderdetail_img pc-view">
            <img src={require(`../../assets/images/fe/orderDetail/${data.detailprdImg}`)} alt="" className="img-fluid object-cover" />
          </div>

          <div className="list-content_orderdetail_name">{data.detailprdName}</div>
          <div className="list-content_orderdetail_price pc-view">{data.detailprdPrice}</div>
          <div className="list-content_orderdetail_number text-md-center">{data.detailprdNumber}</div>
          <div className="list-content_orderdetail_total text-md-center">{data.detailprdTotal}</div>
        </div>
        <div className="list-content_orderdetail_sm_img m-view">
          <img src={require(`../../assets/images/fe/orderDetail/${data.detailprdImg}`)} alt="order-detail-img-1.png" className="img-fluid object-cover" />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
