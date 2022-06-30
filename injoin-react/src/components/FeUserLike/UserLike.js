import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';
import "./index.scss"

const LikePrdCard = (props) => {
  const { data } = props;
  // console.log(data);
  const isLike = true
 
  const usercoupon = {
    likeImg: 'faverite-product-img-1.png',
    likePrdName: '金黑波本威士忌',
    likePrdPrice: 'NT.550',
    likePrdStar: '4.6',
  };
  return (
    <>
      <div className="col">
        <div className="prd-card">
          <div className="prd-card-image">
            <Link to="/">
              {/* <img src={require(`../../assets/images/fe/faverite/${data.likeImg}`)} alt="" /> */}
              <img src={faveritePrdImg1} alt="" />
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
                4.6
              </div>
              <div className="prd-card-icon">
                <Heart isLike={isLike} data={data}/>
                <FaCartPlus className="prd-card-icon-cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikePrdCard;
