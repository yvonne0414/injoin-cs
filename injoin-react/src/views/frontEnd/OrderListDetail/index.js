// scss
import './index.scss';

//react
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../utils/config';

//antd
import { Steps, Collapse } from 'antd';
import 'antd/dist/antd.css';

//component
import FePage1Header from '../../../components/FePage1Header';
import OrderDetail from '../../../components/FeOrderlistDetail/OrderDetail';

const OrderListDetail = () => {
  const { Step } = Steps;

  // header 資料
  const page1HeaderInfo = {
    titleEn: 'Detail',
    titleCn: '訂單明細',
    menuList: [
      {
        href: '#order-detail-bolck1',
        name: '',
      },
      {
        href: '#order-detail-bolck2',
        name: '',
      },
    ],
    imgs: {
      m: 'order-detail-header.png',
      pc: 'order-detail-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/',
        name: '會員中心',
      },
      selected: 'orderDetail',
      selectOptions: [
        {
          name: '訂單明細',
          value: 'orderDetail',
        },
        {
          name: 'test',
          value: 'orderDetail2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  //假資料
  const detailone = {
    orderdetailNum: '513947',
    orderdetailData: '2022/05/22',
    orderdetailUser: '王小明',
    orderdetailTel: '0900000123',
    orderdetailStatus: '訂單完成',
  };
  const detailtwo = {
    deliverymethod: '宅配',
    shippingdate: '2022/05/25',
    deliverycomplet: '2022/05/28',
  };
  const detailthree = {
    paymethod: '信用卡付款',
    paystatus: '已付款',
    paytotal: 'NT$1840',
    remark: '請小心包裝',
  };

  const orderdetailprdArr = [
    {
      prdId: 1,
      detailprdNum: 'AB123',
      detailprdImg: 'order-detail-img-1.png',
      detailprdName: '金彬黑波本威士忌',
      detailprdPrice: 'NT$680',
      detailprdNumber: '1',
      detailprdTotal: 'NT$680',
    },
    {
      prdId: 2,
      detailprdNum: 'AB456',
      detailprdImg: 'order-detail-img-1.png',
      detailprdName: '金彬黑波本威士忌',
      detailprdPrice: 'NT$680',
      detailprdNumber: '1',
      detailprdTotal: 'NT$680',
    },
    {
      prdId: 3,
      detailprdNum: 'AB789',
      detailprdImg: 'order-detail-img-1.png',
      detailprdName: '金彬黑波本威士忌',
      detailprdPrice: 'NT$680',
      detailprdNumber: '1',
      detailprdTotal: 'NT$680',
    },
  ];

  //Collapse 收合套件
  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  };

  //連接後端資料

  //取得詳細資料
  //假裝設定user.id=3
  const [memberInfo, setMemberInfo] = useState({
    userId: 3,
  });

  const { orderId } = useParams();
  //商品訂單狀態設定
  const [ordersDetailData, setOrdersDetailData] = useState([]);
  const [ordersDetailStatus, setOrdersDetailStatus] = useState([]);
  //訂購人訂單狀態設定
  const [ordersUserInfo, setOrdersUserInfo] = useState([]);
  //訂購人訂單商品設定
  const [ordersPrd, setOrdersPrd] = useState([]);

  //商品陣列
  // console.log('prdarr', ordersPrd);

  useEffect(() => {
    //取得訂購人訂單詳細資料
    let getOrdersDetailData = async () => {
      //axios.get(URL, config)
      // console.log('a',orderId);

      let response = await axios.get(API_URL + `/order/detail/${orderId}`, {
        params: {
          //TODO:待接sesssion

          orderId: orderId,
        },
      });
      //設定狀態函式呼叫(回傳資料)
      setOrdersDetailData(response.data.data[0]);
      setOrdersUserInfo(response.data.orderuser[0]);
      setOrdersPrd(response.data.orderprd);
      setOrdersDetailStatus(Number(response.data.data[0].logistics_state));
      // console.log('..', response.data);
      // console.log('ordersUserInfo', response.data.orderuser);
      // console.log('ordersDetailData', response.data.data);
      console.log('OrdersPrd', response.data);
      // console.log('ordersDetailStatus', response.data.data[0]);
    };
    // console.log(ordersDetailStatus);
    getOrdersDetailData();
  }, [orderId]);

  // console.log('ordersUserInfo', ordersUserInfo);
  // console.log('ordersDetailData', ordersDetailData);
  // console.log('ordersPrd', ordersPrd);
  // console.log('test', ordersPrd);
  // console.log('orderdetailprdArr', orderdetailprdArr);

  //商品總價函式跑for迴圈
  function prdTotal() {
    let sum = 0;
    for (let i = 0; i < ordersPrd.length; i++) {
      sum += ordersPrd[i].price * ordersPrd[i].amount;
    }
    return sum;
  }

  return (
    <>
      {/* -----------header------------ */}
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      {/* -----------status------------ */}
      <div className="container">
        <div className="step-status mb-5">
          <Steps current={ordersDetailStatus} progressDot>
            <Step title="訂單成立" />
            <Step title="待出貨" />
            <Step title="已出貨" />
            <Step title="訂單完成" />
          </Steps>
        </div>
      </div>

      {/* ---------訂購資料 section Collapse ---------- */}

      <div className="container">
        <div className="position-relative">
          <div className="order-detail-info-wraper "></div>
          <div className="p-3 ">
            <h3 className="ff-cn-main">
              <span className="me-2">訂單明細</span> {ordersDetailData.order_time}
            </h3>
            <div className="detailcollapse">
              <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="訂單資訊" key="1">
                  <span className="me-2">訂單編號:</span>
                  {orderId}
                  <br />
                  <span className="me-2">收件人:</span> {ordersUserInfo.name}
                  <br />
                  <span className="me-2">連絡電話:</span>
                  {ordersUserInfo.phone}
                  <br />
                  <span className="me-2">地址: </span>
                  {ordersUserInfo.countyName}
                  {ordersUserInfo.address_detail}
                  <br />
                </Panel>

                <Panel header="配送方式" key="2">
                  <apan>配送方式: </apan>
                  {ordersDetailData.logisticsCateName}
                  <br />
                  完成日期: &nbsp;{ordersDetailData.order_time}
                  <br />
                  訂單狀態: &nbsp;<span> {ordersDetailData.logisticsStatename}</span>
                </Panel>

                <Panel header="付款方式" key="3">
                  付款方式: {detailthree.paymethod}
                  <br />
                  付款狀態:{detailthree.paystatus}
                  <br />
                  訂單總金額: NT${prdTotal()}
                  <br />
                  備註: {detailthree.remark}
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>

        {/* -----------商品區 section 2------------ */}
        <div className="container">
          {/* <div className="position-relative"> */}
          <div className="order-detail-info-bg-square p-3 p-md-5">
            <div className="page-type1-list-wraper">
              <div className="page-type1-listdetail-title pc-view">
                <div>商品編號</div>
                <div>商品圖片</div>
                <div>商品名稱</div>
                <div>商品單價</div>
                <div>數量</div>
                <div>小計</div>
              </div>
              <hr />
            </div>
            <div className="page-type1-list-section">
              
              {/* 商品迴圈 */}
              {ordersPrd.map((v, i) => {
                return <OrderDetail key={v.prdId} data={v} />;
              })}
              {/* ---------金額計算-------- */}
              <div className="summary-section">
                <div className="summary-title d-flex">
                  商品小計
                  <br />
                  使用優惠券
                  <br />
                  訂單總金額
                </div>

                <div className="summary-item d-flex ms-5">
                  NT${prdTotal()}
                  <br />
                  -NT$200
                  <br />
                  NT${prdTotal() - 200}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------return orderList-------- */}
        <div className="container">
          <Link to="/account/order" className="back-page btn btn-none mt-3">
            <div>
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
            </div>
            <span className="ms-3 ff-cn-main">返回訂單列表</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default OrderListDetail;
