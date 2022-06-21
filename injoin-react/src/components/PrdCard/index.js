import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';

const PrdCard = () => {
  const pcard = {
    name: '金黑波本威士忌',
    price: 'NT.550 ',
    review: ' 4.6',
  };

  return (
    <>
      <div className="col">
        <div className="prd-card">
          <div className="prd-card-image">
            <Link to="/">
              <img src={faveritePrdImg1} alt="" />
            </Link>
          </div>
          <div className="prd-card-body card-body ">
            <div className="prd-card-title card-title">
              <Link to="/">{pcard.name}</Link>
            </div>
            <div className="prd-card-price">{pcard.price}</div>
            <div className="prd-card-footer card-footer">
              <div className="prd-card-reveiw">
                <FaStar className="prd-card-icon-star" />
                {pcard.review}
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
};

export default PrdCard;
