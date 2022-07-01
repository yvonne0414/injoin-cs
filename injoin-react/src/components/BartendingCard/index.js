import { Link } from 'react-router-dom';
import '../BartendingCard/index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function BartendingCard(props) {
  const { data } = props;

  // const bartendcard = {
  //   name: '粉紅松鼠',
  //   material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  // };
  return (
    <>
      <div className="col Bartending-card-col">
        <div className="Bartending-card card ">
          <div className="Bartending-card-image">
            <Link to={`/bartending/${data.id}`}>
              <img src={`http://localhost:3001/images${data.img}`} alt="" />
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
        </div>
      </div>
    </>
  );
}
export default BartendingCard;
