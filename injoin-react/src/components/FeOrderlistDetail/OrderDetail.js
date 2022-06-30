import React from 'react';
import { Link } from 'react-router-dom';
import { BE_IMAGE_URL } from '../../utils/config';

const OrderDetail = (props) => {
  const { data } = props;
  // console.log('props', props);
  // console.log('props.data', data);

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
          <div className="list-content_orderdetail_num">{data.prd_num}</div>

          <div className="list-content_orderdetail_img pc-view">
            <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt="" className="img-fluid object-cover" />
          </div>

          <div className="list-content_orderdetail_name">
            {data.name}
          </div>
          <div className="list-content_orderdetail_price pc-view">NT${data.price}</div>
          <div className="list-content_orderdetail_number text-md-center"><span className="m-view">數量</span>{data.amount}</div>
          <div className="list-content_orderdetail_total text-md-center">NT${data.price * data.amount}</div>
        </div>
        <div className="list-content_orderdetail_sm_img m-view">
          <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt="order-detail-img-1.png" className="img-fluid object-cover" />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
