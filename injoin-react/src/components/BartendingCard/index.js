import { Link } from 'react-router-dom';
import '../BartendingCard/index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

import faveritePrdImg1 from '../../assets/images/fe/bartending/bartending_1.png';
import Heart from '../Heart';
import { BE_IMAGE_URL } from '../../utils/config';


function BartendingCard(props) {
  let { data, isbartdLike } = props;
  let isLike = isbartdLike || false;
  // console.log(data);
  data = data || {
    id: '1',
    name: '粉紅松鼠',
    material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    img: '',
  };
  // const data = {
  // id: '粉紅松鼠',
  // name: '',
  // material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  // img: '',
  // };
  return (
    <>
      <div className="col Bartending-card-col">
        <div className="Bartending-card card ">
          <div className="Bartending-card-image">
            <Link to="/">
              <img src={`${BE_IMAGE_URL}${data.img}`} alt="" />
            </Link>
            {/* <Link to="/">
              <img src={bartendingimg} alt="" />
            </Link>  */}
          </div>
          <div className="Bartending-card-body card-body ">
            <div className="Bartending-card-title card-title">
              <Link to={`/bartending/${data.id}`}>{data.name}</Link>
            </div>
            <div className="Bartending-card-subtitle card-footer">{data.material} </div>
          </div>
          <div className="heart-position">
            <Heart data={data} heartState={2} isLike={isLike}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default BartendingCard;
