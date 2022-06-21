// scss
import './index.scss';

import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Popover, Steps } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

// component
import FePage1Header from '../../../components/FePage1Header';
// import FePagination from '../../../components/FePagination1';

import orderDetailImg1 from '../../../assets/images/fe/orderDetail/order-detail-img-1.png';

const { Panel } = Collapse;
// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const OrderListDetail = () => {
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const { Step } = Steps;
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'Detail',
    titleCn: '訂單明細',
    menuList: [
      {
        href: '#order-detail-bolck1',
        name: 'test',
      },
      {
        href: '#order-detail-bolck2',
        name: 'test2',
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
          <Steps current={2} progressDot={customDot}>
            <Step title="Waiting" description="訂單成立" />
            <Step title="In Progress" description="待出貨" />
            <Step title="In Progress" description="配送中" />
            <Step title="Finished " description="訂單完成" />
          </Steps>
        </div>
      </div>

      {/* -----------section 1------------ */}
      <div class="order-detail-info-wraper">
        <div class="container">
          <div className="position-relative">
            <div className="order-detail-info-wraper"></div>
            <div className="p-3 p-md-5">
              <h3 className="ff-cn-main">訂單明細 &nbsp;&nbsp;&nbsp;2022/05/22</h3>
              <div class="detailcollapse">
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                  <Panel header="訂單資訊" key="1">
                    訂單編號: &nbsp;513947
                    <br />
                    收件人: &nbsp;王小明
                    <br />
                    連絡電話: &nbsp;0900000123
                    <br />
                    配送狀態: &nbsp;<span> 訂單完成</span>
                    <br />
                    總金額: &nbsp;<span> NT$1840</span>
                  </Panel>
                  <Panel header="配送方式" key="2">
                    配送方式: &nbsp;宅配
                    <br />
                    配送日期: &nbsp;2022/05/25
                    <br />
                    完成日期: &nbsp;2022/05/28
                  </Panel>
                  <Panel header="付款方式" key="3">
                    付款方式: &nbsp; 信用卡付款
                    <br />
                    付款狀態: &nbsp; 已付款
                    <br />
                    總金額: &nbsp; 已付款
                    <br />
                    備註: &nbsp; 請小心包裝
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>

        {/* -----------section 2------------ */}
        <div class="container">
          <div className="position-relative">
            <div className="order-detail-info-wraper"></div>
            <div className="p-3 p-md-5">
              <div className="page-type1-list-wraper">
                <div className="page-type1-listdetail-title pc-view row">
                  <div class="col">商品編號</div>
                  <div class="col">商品圖片</div>
                  <div class="col">商品名稱</div>
                  <div class="col">商品單價</div>
                  <div class="col">數量</div>
                  <div class="col">小計</div>
                </div>
                <hr />
              </div>
              <div>
                <div className="page-type1-list-section mb-2">
                  <div className="listdetail-card-bg ">
                    <div className="listdetail-card-context">
                      <div className="list-content_orderdetail_num">AB123</div>
                      <div className="list-content_orderdetail_img pc-view">
                        <img src={orderDetailImg1} alt="order-detail-img-1" className="img-fluid object-cover" />
                      </div>
                      <div className="list-content_orderdetail_name">金賓黑波本威士忌</div>
                      <div className="list-content_orderdetail_price pc-view">NT$680</div>
                      <div className="list-content_orderdetail_number">X1</div>
                      <div className="list-content_orderdetail_total ">NT$680</div>
                    </div>
                    <div className="list-content_orderdetail_img m-view">
                      <img src={orderDetailImg1} alt="order-detail-img-1" className="img-fluid object-cover" />
                    </div>
                  </div>
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
