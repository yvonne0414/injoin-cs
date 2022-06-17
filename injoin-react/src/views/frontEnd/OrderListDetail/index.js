// scss
import './index.scss';

import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Popover, Steps } from 'antd';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';

import faveritePrdImg1 from '../../../assets/images/fe/faverite/faverite-product-img-1.png';

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

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="step-status">
        <Steps current={1} progressDot={customDot}>
          <Step title="Waiting" description="訂單成立" />
          <Step title="In Progress" description="待出貨" />
          <Step title="In Progress" description="配送中" />
          <Step title="Finished " description="訂單完成" />
        </Steps>
      </div>
      <div className="w-100 overflow-hidden mb-5 square-area">
        <div className="bg-square"></div>
      </div>
    </>
  );
};
export default OrderListDetail;
