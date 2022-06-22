import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import DetailOne from './DetailOne';

const OrderDetailsList = (props) => {
  const { data } = props;

  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  };
  // const userdetailuserdata={
  //   orderdetailNum:'513947',
  //   orderdetailUser:'王小明',
  //   orderdetailTel:'0900000123',
  //   orderdetailStatus:'訂單完成',
  //   orderdetailTotal:'NT$1840'
  // }

  return (
    <>
      <div className="p-3 p-md-5">
        <h3 className="ff-cn-main">訂單明細 &nbsp;&nbsp;&nbsp;2022/05/22</h3>
        <div class="detailcollapse">
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="訂單資訊" key="1">
              <DetailOne />
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
    </>
  );
};

export default OrderDetailsList;
