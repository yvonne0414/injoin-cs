import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';

function PrdCard() {
  return (
    <>
      <div className="col">
        <div className="prd-card card ">
          <div className="prd-card-image">
            <Link to="/">
              <img src={faveritePrdImg1} alt="" />
            </Link>
          </div>
          <div className="prd-card-body card-body ">
            <div className="prd-card-title card-title">
              <Link to="/">金黑波本威士忌</Link>
            </div>
            <div className="prd-card-price">NT.550</div>
            <div className="prd-card-footer card-footer">
              <div className="prd-card-reveiw">
                <FaStar className="prd-card-icon-star" />
                4.6
              </div>
              <div className="prd-card-icon">
                <Heart />
                <FaCartPlus className="prd-card-icon-cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrdCard;
