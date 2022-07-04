// scss
import './index.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox } from 'antd';
import 'antd/dist/antd.css';

// -----Variable width
import Slider from 'react-slick';

// component
import FePage1Header from '../../../components/FePage1Header';

import faveriteImg from '../../../assets/images/fe/faverite/faverite-product-img-1.png';

const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '請輸入${label}!',
  types: {
    number: '${label} is not a valid number!',
  },
};
/* eslint-enable no-template-curly-in-string */

const { Option } = Select;

const UserCartStep2 = () => {
  const page1HeaderInfo = {
    titleEn: 'Cart',
    titleCn: '購物車',
    menuList: [
      {
        href: '#cart-bolck1',
        name: '',
      },
      {
        href: '#cart-bolck2',
        name: '',
      },
    ],
    imgs: {
      m: 'cart-header.png',
      pc: 'cart-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/',
        name: '會員中心',
      },
      selected: 'userCart',
      selectOptions: [
        {
          name: '購物車',
          value: 'userCart',
        },
        {
          name: '',
          value: 'userCart2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  const onFinish = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="cart-area">
        <div className="container">
          {/* status-section-1 */}
          <div className="cart-step-content d-flex flex-column flex-md-row">
            <div className="col cart-step d-flex flex-column flex-md-row">
              <div className="step-left">01</div>
              <div className="step-right">
                確認訂單及付款方式 <br />
                Cart & Check out
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row cart-step2">
              <div className="step-left">02</div>
              <div className="step-right">
                填寫訂單資料 <br />
                Shipping & Billing info
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row">
              <div className="step-left">03</div>
              <div className="step-right">
                購物完成! <br />
                Oder Completend
              </div>
            </div>
          </div>

          {/* prd-section-2 */}
          <div className="position-relative">
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
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                  <Form.Item
                    name={['user', 'name']}
                    label="姓名"
                    rules={[
                      {
                        required: true,
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
                <Form {...layout} name="nest-messages" onFinish={onFinish}>
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
              <button className="btn btn-none injoin-btn-outline text-gold">完成，下一步</button>
            </div>
          </div>
          <Link to="/cart" className="back-page btn btn-none mt-3">
            <div>
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
            </div>
            <span className="ms-3 ff-cn-main">返回上一頁</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default UserCartStep2;
