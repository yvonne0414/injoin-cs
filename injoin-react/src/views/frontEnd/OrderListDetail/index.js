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
import FePagination from '../../../components/FePagination1';

import faveritePrdImg1 from '../../../assets/images/fe/faverite/faverite-product-img-1.png';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
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
      <div class="container">
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
            </Panel>
            <Panel header="配送方式" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="付款方式" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};
export default OrderListDetail;
