import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import faveritePrdImg1 from '../../assets/images/fe/faverite/faverite-product-img-1.png';
import Heart from '../Heart';
import { BE_IMAGE_URL } from '../../utils/config';
import axios from 'axios';
import './_index.scss';

function PrdCard(props) {
  const { data } = props;
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

  let handleCart = () => {
    console.log('click', data.id);
    // TODO: getItem

    localStorage.getItem('cart', JSON.stringify({ Production: [`${data.id}, count:1`] }));
    // localStorage.setItem('cart', JSON.stringify([`${data.id}`]));
    JSON.parse(localStorage.getItem('cart'));
  };

  return (
    <>
      <div className="col">
        <div className="prd-card">
          <div className="prd-card-image">
            <Link to={`/production/${data.id}`}>
              <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt="" />
            </Link>
          </div>
          <div className="prd-card-body card-body ">
            <div className="prd-card-title card-title">
              <Link to={`/production/${data.id}`}>{data.name}</Link>
            </div>
            <div className="prd-card-price">NT.{data.price}</div>
            <div className="prd-card-footer card-footer">
              <div className="prd-card-reveiw">
                <FaStar className="prd-card-icon-star" />
                {data.rate}
              </div>
              <div className="prd-card-icon">
                <Heart data={data} />
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
