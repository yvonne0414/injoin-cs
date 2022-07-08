import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';
import './index.scss';
import { BE_IMAGE_URL } from '../../utils/config';
import { message } from 'antd';

const LikePrdCard = (props) => {
  const { data, isprdLike } = props;
  // console.log(data);
  const isLike = isprdLike || false;

  const usercoupon = {
    likeImg: 'AB11.jpeg',
    likePrdName: '金黑波本威士忌',
    likePrdPrice: 'NT.550',
    likePrdStar: '4.6',
  };

  let handleCart = () => {
    message.success(`將 ${data.likePrdName} 加到購物車`);
    // console.log(data.id);
    // ==========首先把要用的資料處理好
    let obj = {};
    obj = { prdid: data.id, count: 1 };
    // console.log("new", obj);
    // ==============判斷有沒有車
    // 因為沒有車會錯誤所以要先判斷===========
    if (localStorage.getItem('cart') == null) {
      let arr = [];
      localStorage.setItem('cart', JSON.stringify(arr));
    }
    let oldCart = JSON.parse(localStorage.getItem('cart'));
    // console.log("old",oldCart);

    if (oldCart.length === 0) {
      var newArr = [...oldCart, obj];
    } else {
      for (let i = 0; i < oldCart.length; i++) {
        // console.log('oldCart[i].prdid', oldCart[i].prdid);
        // console.log('obj.prdid', obj.prdid);
        if (oldCart[i].prdid == obj.prdid) {
          return;
        } else {
          var newArr = [...oldCart, obj];
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(newArr));

    // console.log();
  };

  // console.log("1",`${BE_IMAGE_URL}/production/AB11.jpeg`);
  return (
    <>
      <div className="col">
        <div className="prd-card">
          <div className="prd-card-image">
            <Link to="/">
              {/* <img src={`${BE_IMAGE_URL}/production/AB11.jpeg`} alt="" /> */}
              <img src={`${BE_IMAGE_URL}/production/${data.likeImg}`} alt="" />
            </Link>
          </div>
          <div className="prd-card-body card-body ">
            <div className="prd-card-title card-title">
              <Link to="/">{data.likePrdName}</Link>
            </div>
            <div className="prd-card-price">{data.likePrdPrice}</div>
            <div className="prd-card-footer card-footer">
              <div className="prd-card-reveiw">
                <FaStar className="prd-card-icon-star" />
                {data.rate}
              </div>
              <div className="prd-card-icon">
                <Heart isLike={isLike} data={data} />
                <FaCartPlus onClick={handleCart} className="prd-card-icon-cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikePrdCard;
