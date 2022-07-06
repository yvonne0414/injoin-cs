import './index.scss';
import { Breadcrumb, Carousel, Rate } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { userState } from '../../../App';
import { InputNumber, Button } from 'antd';
import { Collapse } from 'antd';
import EmptyImage from '../../../components/EmptyImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

// -----Prdcar
import PrdCard from '../../../components/PrdCard';

// -----Variable width
import React, { Component } from 'react';
import Slider from 'react-slick';

import bardetailImg1 from '../../../assets/images/fe/bartendingdetail/bartending-detail-img-1.png';
import bardetailImg2 from '../../../assets/images/fe/bartendingdetail/bartending-detail-img-2.png';
import bardetailImg3 from '../../../assets/images/fe/bartendingdetail/bartending-detail-img-3.png';
import bardetailImg4 from '../../../assets/images/fe/bartendingdetail/bartending-detail-img-4.png';

// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
const BartendingDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 檢查登入
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

  const contentStyle = {
    height: '300px',
    color: '#000',
    lineHeight: '300px',
    textAlign: 'center',
    // background: '#fff',
    // background: 'transparent',
    overflow: 'hidden',
  };

  // const illustrate = {
  //   practice: {
  //     content: ['將所有材料倒入雪克杯，加入冰塊搖盪均勻', '雙重過濾，濾掉冰塊將酒液倒入淺碟香檳杯', '灑上適量豆蔻粉作為裝飾'],
  //   },
  // };

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const cardArr = [
    {
      id: 1,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 2,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 3,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 4,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 5,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 6,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 7,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 8,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
  ];
  const { barId } = useParams();
  const [barPrdDetail, setBarPrdDetail] = useState([]);
  const [material, setMaterial] = useState([]);
  const [recipe, setRecipe] = useState([]);

  // 相關商品
  let [relatedList, setRelatedList] = useState([]);
  useEffect(() => {
    //bartendingCard
    let getbarPrdDetail = async () => {
      let response = await axios.get(`${API_URL}/bar/detail/${barId}`, {
        params: {
          barId: barId,
          userId: memberInfo.userId,
        },
      });
      console.log(response.data);
      setBarPrdDetail(response.data[0]);
      // console.log('a', response.data);
      // console.log('g', response.data[0]);
      // console.log('d', response.data[0].name);
      setMaterial(response.data.material);
      let cateMList = response.data.cateMList;
      setRecipe(response.data[0].recipe.split('\n'));
      // console.log('ii', response.data[0].recipe.split('\n'));
      // setMaterial(response.data[0].material);
      // console.log('cateMList:', cateMList);
      let res = await axios.get(`${API_URL}/prd/related/0`, { params: { cateM: cateMList, userId: memberInfo.userId } });
      // console.log('related', res.data.data);
      setRelatedList(res.data.data);
    };

    getbarPrdDetail();
  }, []);
  console.log('v', barPrdDetail);
  // console.log('u', barPrdDetail[0]);
  // console.log('o', barPrdDetail.name);
  // console.log('dd', [material]);
  return (
    <>
      {/* session1---------------------------------------------------------------------- */}
      <div className="bg-box bar-detail-session1">
        <img src={bardetailImg2} alt="bartending-detail-img-2" className="mx-auto h-100 bartending-detail-img-2" />
        {/* Breadcrumb----------------------------------- */}
        <div className="container">
          <div className="w-fit-content ms-auto">
            <Breadcrumb separator="" className="bar-detail-breadcrumb">
              {/* <Breadcrumb.Item href="">商品</Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item href="">威士忌</Breadcrumb.Item>
              <Breadcrumb.Separator /> */}
              <Breadcrumb.Item href="/bartending">調酒酒譜</Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>{barPrdDetail.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* Carousel------------------------------------- */}
        <div className="bar-detail-session1-content-wraper">
          {/* bardetailImg1---------------------------------------- */}
          <div className=" mt-3 bar-detail-session1-content-block1">
            <div>
              <div style={contentStyle}>
                <img src={`http://localhost:3001/images${barPrdDetail.img}`} alt="bartending-detail-img-1" className="bartending-detail-img-1 mx-auto h-100" />
              </div>
            </div>
          </div>
          {/* instructions-------------------------------- */}
          <div className="bar-detail-session1-content-block2">
            <div className="container">
              <div className="bar-detail-title mt-4">{barPrdDetail.name}</div>
              <div className="bar-detail-tag mt-3">
                <span>Vodka</span>
                <span>Liqueur</span>
                <span>Shake</span>
                <span>Straight</span>
              </div>
              <div className="bar-detail-evaluation-bg mt-5">
                <div className="container">
                  <div className="bar-detail-title-type1 mt-3 ">
                    <p>調酒介紹</p>
                  </div>
                  <div>
                    <p className="bar-detail-text mt-3">{barPrdDetail.disc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* session2--------------------------------------------------------------------------------- */}
      <div className="bar-detail-session2 mt-5">
        <div className="container">
          {/* evaluation----------------------------------- */}
          <div className="bar-detail-evaluation-bg-sp mt-5">
            <img src={bardetailImg3} alt="bartending-detail-img-3" className="mx-auto  bartending-detail-img-3" />
            <img src={bardetailImg4} alt="bartending-detail-img-4" className="mx-auto  bartending-detail-img-4" />
            <div className="bar-detail-space mx-auto">
              <div className="bar-detail-text-type1">
                <p>材料比例</p>
              </div>
              {material.map((item) => {
                return (
                  <div className="bar-detail-text-type1">
                    <span>{item.name}</span>
                    <span>{item.mater_amount}</span>
                  </div>
                );
              })}
              <ul className="bar-detail-text list-unstyled mt-5">
                {recipe.map((item) => {
                  return <li>{item}</li>;
                })}
                {/* {barPrdDetail.recipe.map((v, i) => {
                  console.log('dd', barPrdDetail.recipe);
                  return <li key={i.id}>{v}</li>;
                })} */}
              </ul>
              {/* <span className="bar-detail-text-sp">裝飾物：豆蔻粉</span> */}
            </div>
          </div>

          {/* the same kind  product-------------------------------------*/}
          <div className="bar-detail-evaluation-bg-3 mt-5">
            <div className="container mb-4">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>相關商品</p>
              </div>
              <div className="prd-deatil-card px-md-3">
                {relatedList.length > 0 ? (
                  <Slider className="prd-deatil-card" {...settings}>
                    {relatedList.map((v, i) => {
                      return <PrdCard key={v.id} data={v} isLike={v.isPrdLike} />;
                    })}
                  </Slider>
                ) : (
                  <EmptyImage discText="無相關商品" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BartendingDetail;
