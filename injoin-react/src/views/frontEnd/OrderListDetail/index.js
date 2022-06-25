// scss
import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

//antd
import { Divider, Popover, Steps, Collapse } from 'antd';
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

  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      {/* -----------header------------ */}
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      {/* -----------status------------ */}
      <div class="container">
        <div className="step-status mb-5">
          <Steps current={2} progressDot>
            <Step title="訂單成立" />
            <Step title="待出貨" />
            <Step title="配送中" />
            <Step title="訂單完成" />
          </Steps>
        </div>
      </div>

      {/* --------- section Collapse ---------- */}

      <div class="container">
        <div className="position-relative">
          <div className="order-detail-info-wraper "></div>
          <div className="p-3 ">
            <h3 className="ff-cn-main">訂單明細 &nbsp;&nbsp;&nbsp;{detailone.orderdetailData}</h3>
            <div class="detailcollapse">
              <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="訂單資訊" key="1">
                  訂單編號: &nbsp;{detailone.orderdetailNum}
                  <br />
                  收件人: &nbsp;{detailone.orderdetailUser}
                  <br />
                  連絡電話: &nbsp;{detailone.orderdetailTel}
                  <br />
                  配送狀態: &nbsp;<span> {detailone.orderdetailStatus}</span>
                  <br />
                </Panel>

                <Panel header="配送方式" key="2">
                  配送方式: &nbsp;{detailtwo.deliverymethod}
                  <br />
                  配送日期: &nbsp;{detailtwo.shippingdate}
                  <br />
                  完成日期: &nbsp;{detailtwo.deliverycomplet}
                </Panel>

                <Panel header="付款方式" key="3">
                  付款方式: &nbsp; {detailthree.paymethod}
                  <br />
                  付款狀態: &nbsp; {detailthree.paystatus}
                  <br />
                  總金額: &nbsp; {detailthree.paytotal}
                  <br />
                  備註: &nbsp; {detailthree.remark}
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>

        {/* -----------section 2------------ */}
        <div class="container">
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
              {orderdetailprdArr.map((v, i) => {
                return <OrderDetail key={v.prdId} data={v} />;
              })}

              <div className="summary-section">
                <div className="summary-title d-flex">
                  商品小計
                  <br />
                  使用優惠券
                  <br />
                  訂單金額
                  <br />
                  付款方式
                </div>
                
                <div className="summary-item d-flex ms-5">
                  NT$2040
                  <br />
                  -NT$200
                  <br />
                  NT$1840
                  <br />
                  信用卡
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------return orderList-------- */}
        <div class="container">
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
