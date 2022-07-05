// scss
import './_index.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox } from 'antd';

import faveriteImg from '../../assets/images/fe/faverite/faverite-product-img-1.png';

const Step2 = (props) => {
  const { Option } = Select;
  const { stepNum, setStepNum,handleSubmit } = props;
  const onFinish = (values) => {
    console.log(values);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="position-relative  mt-4">
      <div className="cart-add-info-bg-square"></div>
      <div className="cart-prd-bg-area">
        <div className="cart-prd-content">
          <div className="cart-prd-info ">
            <div className="shopping-cart-info-title">
              <h4>
                訂單商品資訊
                <br />
                Order Information
              </h4>
            </div>
            <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between">
              <div className="img-content">
                <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
              </div>
              <div className="cart-detail-prd-content d-flex flex-column p-2">
                <div className="cart-prd-num">AA001234</div>
                <div className="cart-prd-name">AA001234</div>
                <div></div>
                <br />
                <div className="cart-prd-price">NT$680</div>
              </div>
              <div className="prd-number-content">
                <div className="prd-number">
                  <span>數量:</span>1
                </div>
              </div>
            </div>
            <div className="bottom-line"></div>
            <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between">
              <div className="img-content">
                <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
              </div>
              <div className="cart-detail-prd-content d-flex flex-column">
                <div className="cart-prd-num">AA001234</div>
                <div className="cart-prd-name">AA001234</div>
                <div></div>
                <br />
                <div className="cart-prd-price">NT$680</div>
              </div>
              <div className="prd-number-content">
                <div className="prd-number">
                  <span>數量:</span>1
                </div>
              </div>
            </div>
            <div className="bottom-line"></div>
            <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between">
              <div className="img-content">
                <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
              </div>
              <div className="cart-detail-prd-content d-flex flex-column">
                <div className="cart-prd-num">AA001234</div>
                <div className="cart-prd-name">AA001234</div>
                <div></div>
                <br />
                <div className="cart-prd-price">NT$680</div>
              </div>
              <div className="prd-number-content">
                <div className="prd-number">
                  <span>數量:</span>1
                </div>
              </div>
            </div>
            <div className="bottom-line"></div>
          </div>
        </div>
      </div>

      <div className="cart-user-bg-area">
        <div className="cart-user-content">
          <div className="shopping-cart-info-title">
            <h4>
              訂單人資訊
              <br />
              Orderer Information
            </h4>
          </div>
          <Form nameName="nest-messages" onFinish={onFinish}>
            <Form.Item
              name={['user', 'name']}
              label="姓名"
              rules={[
                {
                  required: true,
                  message: '請填寫收件人姓名',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'phone']}
              label="連絡電話"
              rules={[
                {
                  type: 'tel',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                  required: false,
                  message: '請填寫Email',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="地址">
              <Form.Item
                name={['address', 'province']}
                style={{
                  width: '30%',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Province is required',
                  },
                ]}
              >
                <Select placeholder="請選擇縣市">
                  <Option value="1">台北市</Option>
                  <Option value="4">桃園市</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={['address', 'street']}
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Street is required',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  placeholder="詳細收貨地址"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="備註">
              <Input.TextArea placeholder="請輸入不超過30個字" maxlength={30} />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="cart-pay-bg-area">
        <div className="cart-pay-content">
          <div className="shopping-cart-info-title">
            <h4>
              信用卡資訊
              <br />
              Credit Card Information
            </h4>
          </div>
          <Form name="nest-messages" onFinish={onFinish}>
            <Form.Item
              name={['credit-card', 'check-num']}
              label="卡號:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <div className="" style={{ width: '100%' }}></div>
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                  margin: '0.5rem',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                  margin: '0.5rem',
                }}
              />
            </Form.Item>
            <Form.Item
              name={['credit-card', 'check-date']}
              label="效期:"
              rules={[
                {
                  type: 'date',
                },
              ]}
            >
              <Input
                maxlength="2"
                style={{
                  width: '22%',
                  marginRight: '0.5rem',
                }}
              />
              /
              <Input
                maxlength="2"
                style={{
                  width: '22%',
                  marginLeft: '0.5rem',
                }}
              />
            </Form.Item>
            <Form.Item
              name={['信用卡', '安全碼']}
              label="安全碼:"
              rules={[
                {
                  required: true,
                  message: '必填',
                },
              ]}
            >
              <Input
                maxlength="3"
                style={{
                  width: '45%',
                }}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="check-box">
          <Checkbox onChange={onChange}>我同意接受服務條款和隱私權政策</Checkbox>;
        </div>
        <div className="check-p">※下單前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容</div>
      </div>

      <div className="position-relative text-center p-3">
        <button
          onClick={() => {
            setStepNum(stepNum - 1);
          }}
          className="btn btn-none injoin-btn-outline text-gold mx-3"
        >
          上一步
        </button>
        <button
          onClick={() => {
            handleSubmit()
            setStepNum(stepNum + 1);
          }}
          className="btn btn-none injoin-btn-outline text-gold"
        >
          完成
        </button>
      </div>
    </div>
  );
};
export default Step2;
