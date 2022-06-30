import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { BE_IMAGE_URL } from '../../utils/config';
import faveriteImg from '../../../src/assets/images/fe/faverite/faverite-product-img-1.png';
import { BsTrashFill } from 'react-icons/bs';


function CartStep1(props) {
  const {data} = props;
  console.log(data);
  // const cartstep1arr = [
  //   {
  //     id:1,
  //     cartprdImg: 'faverite-product-img-1.png',
  //     cartprdNum: 'AB123',
  //     cartprdName: '金彬黑波本威士忌',
  //     cartprdPrice: 'NT$680',
  //     cartprdNumber: '2',
  //     cartprdTotal: 'NT$680',
  //   },
  // ]

  return (
    <>
      <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between">
        <img src={faveriteImg} alt="faverite-product-img-1" className="w-25 h-25 faverite-product-img-1" />
        <div className="cart-prd-content d-flex flex-column ms-2">
          <div className="cart-prd-num">AA001234</div>
          <div className="cart-prd-name">AA001234</div>
          <div className="cart-prd-price">NT$680</div>
        </div>
        <div className="cart-prd-number-content d-flex flex-column flex-md-row justify-content-between">
          <div className="cart-prd-icon text-center">
            <BsTrashFill />
          </div>
          <div
            className="cart-prd-number d-flex ms-2 border border-white justify-content-between
        "
          >
            <button className="prd-plus btn-none">+</button>
            <div className=" border-end border-start prd-number text-center">1</div>
            <button className="prd-minus btn-none">-</button>
          </div>
        </div>
      </div>
    <div className="border-bottom m-3"></div>
    </>
  );
}

export default CartStep1;
