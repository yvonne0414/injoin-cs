import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { API_URL, BE_IMAGE_URL } from '../../utils/config';
import faveriteImg from '../../../src/assets/images/fe/faverite/faverite-product-img-1.png';
import { BiTrash } from 'react-icons/bi';

function Step1Prd(props) {
  const { data, setCount, removeItem } = props;
  // console.log('data',data);

  const plusOne = (id) => {
    // console.log(id);
    // console.log(data.cartprdCount);
    setCount(data.cartprdCount + 1);
  };

  const minusOne = (id) => {
    if (data.cartprdCount === 1) {
      return;
    }
    setCount(data.cartprdCount - 1);
  };

  //假資料
  // const cartstep1arr = [
  //   {
  //     id:1,
  //     cartprdImg: 'faverite-product-img-1.png',
  //     cartprdNum: 'AB123',
  //     cartprdName: '金彬黑波本威士忌',
  //     cartprdPrice: '680',
  //     cartprdCount: '2',
  //     cartprdTotal: '680',
  //   },
  // ]
  return (
    <>
      <div className="cart-prd-info-content d-flex mt-3 flex-column flex-md-row flex-nowrap justify-content-between">
        <div className="cart-prd-img mx-auto text-center mx-md-3">
          <img src={`${BE_IMAGE_URL}/production/${data.cartprdImg}`} alt="product-img-1" className="img-fluid object-cover" />
        </div>

        <div className="cart-prd-content d-flex flex-column ms-2 mt-3 mt-md-0">
          <div className="cart-prd-num">{data.cartprdNum}</div>
          <div className="cart-prd-name">{data.cartprdName}</div>
          <div className="cart-prd-price">NT${data.cartprdPrice}</div>
        </div>
        <div className="cart-prd-number-content d-flex justify-content-between mt-3 mt-md-0">
          <div
            className="cart-prd-number d-flex ms-2 border border-white justify-content-between
        "
          >
            <button
              className="prd-minus btn-none"
              onClick={() => {
                minusOne();
              }}
            >
              -
            </button>
            <div className=" border-end border-start prd-number text-center">{data.cartprdCount}</div>
            <button
              className="prd-plus btn-none"
              onClick={() => {
                plusOne();
              }}
            >
              +
            </button>
          </div>
          <div className="cart-prd-icon text-center">
            <BiTrash onClick={removeItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1Prd;
