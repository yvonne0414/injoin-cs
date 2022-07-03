// scss
import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

// component
import FePage1Header from '../../../components/FePage1Header';

import { FaCheck } from 'react-icons/fa';

const UserCartStep3 = () => {
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
      selected: '購物車',
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
            <div className="col cart-step d-flex flex-column flex-md-row ">
              <div className="step-left">01</div>
              <div className="step-right">
                確認訂單及付款方式 <br />
                Cart & Check out
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row">
              <div className="step-left">02</div>
              <div className="step-right">
                填寫訂單資料 <br />
                Shipping & Billing info
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row cart-step3">
              <div className="step-left">03</div>
              <div className="step-right">
                購物完成! <br />
                Oder Completend
              </div>
            </div>
          </div>
          {/* prd-section-2 */}
          <div className="position-relative cart-bg">
            <div className="cart-add-info-bg-square"></div>
            <div className="shopping-cart-section ">
              <div className="cart-checkbox-area">
                <div className="cart-checkbox mb-3">
                  <FaCheck style={{ width: 32, height: 32 }} />
                </div>
                <div className="finish-checkbox mb-2">完成訂單</div>
                <div className="order-num-check">
                  <span>您的訂單編號:123456789xxx</span>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="me-3 me-md-5">
                  <button className="btn btn-none injoin-btn-outline text-gold p-2 ">查看訂單</button>
                </div>
                <div>
                  <button className="btn btn-none injoin-btn-outline text-gold p-2">繼續購物</button>
                </div>
              </div>
            </div>
          </div>
          <div className="check-box">
            <Checkbox onChange={onChange}>
              我同意接受服務條款和隱私權政策
            </Checkbox>
            ;
          </div>
          <div className="check-cart">※下單前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容</div>
        </div>
      </div>
    </>
  );
};
export default UserCartStep3;
