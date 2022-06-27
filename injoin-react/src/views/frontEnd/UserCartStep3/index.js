// scss
import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
// -----Variable width
import Slider from 'react-slick';

// component
import FePage1Header from '../../../components/FePage1Header';
import PrdCard from '../../../components/PrdCard';

import faveriteImg from '../../../assets/images/fe/faverite/faverite-product-img-1.png';
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

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="cart-area">
        <div className="container">
          {/* status-section-1 */}
          <div className="cart-step-content mb-5 justify-content-center flex-nowrap">
            <div className="col cart-step d-flex flex-column flex-md-row">
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
            <div className="col cart-step d-flex flex-column flex-md-row">
              <div className="step-left">03</div>
              <div className="step-right">
                購物完成! <br />
                Oder Completend
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prd-section-2 */}
      <div className="container">
        <div className="position-relative">
          <div className="cart-add-info-bg-square"></div>
          <div className="shopping-cart-section ">
            <div className="cart-checkbox-area">
              <div className="cart-checkbox">
                <FaCheck style={{ width: 32, height: 32  }} />
              </div>
            </div>
            <div className="finish-checkbox">完成訂單</div>
            <div className="order-num-check">
              <span>您的訂單編號:123456789</span>
            </div>
            <div></div>
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
      </div>
    </>
  );
};
export default UserCartStep3;
