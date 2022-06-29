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
import { BsTrashFill } from 'react-icons/bs';

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

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="cart-area">
        <div className="container">
          {/* status-section-1 */}
          <div className="cart-step-content d-flex flex-column flex-md-row">
            <div className="col cart-step d-flex flex-column flex-md-row cart-step1">
              <div className="step-left">01</div>
              <div className="step-right">
                確認訂單及付款方式 <br />
                Cart & Check out
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row ">
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
                    <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
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
                    <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
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
                    <img src={faveriteImg} alt="faverite-product-img-1" className="faverite-product-img-1" />
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
