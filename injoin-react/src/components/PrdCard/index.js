import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';
import { BE_IMAGE_URL } from '../../utils/config';
import axios from 'axios';
import './_index.scss';
import { message } from 'antd';
import Chen from '../../views/frontEnd/Chen/Chen';
import Swal from 'sweetalert2'

function PrdCard(props) {
  const { data, isLike } = props;
  const [prded, setPrded] = useState([]);
  const [category, setCategory] = useState(1);

  //   寫法1
  // const data = {
  //   id: 1,
  //   main_img: 'AG22.jpeg',
  //   name: '金黑波本威士忌',
  //   price: 'NT.550 ',
  //   rating: 4.6,
  // };
  // console.log(data);
  const Production = () => {
    let getprded = async () => {
      let response = await axios.get('http://localhost:3001/api/prd/prdList', {
        params: {
          category: category,
        },
      });
      // console.log('res', response.data);
      setPrded(response.data.data);
      // setPagination(response.data.pagination);
      // console.log(response.data.pagination);
    };
  };
  // JSON.stringify(jsonData);
  // JSON.parse(getLocalData);
  let handleCart = () => {
    message.success(`將 ${data.name} 加到購物車`);
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

  return (
    <>
      <div className="col">
        <div className="prd-card">
          <Link to={`/production/${data.id}`}>
            <div className="prd-card-image">
              <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt="" />
            </div>
          </Link>
          <div className="prd-card-body card-body ">
            <div className="prd-card-title card-title">
              <Link to={`/production/${data.id}`}>{data.name}</Link>
            </div>
            <div className="prd-card-price">NT.{data.price}</div>
            <div className="prd-card-footer card-footer">
              <div className="prd-card-reveiw">
                <FaStar className="prd-card-icon-star" />
                {Number(data.rate).toFixed(1)}
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
}

export default PrdCard;
