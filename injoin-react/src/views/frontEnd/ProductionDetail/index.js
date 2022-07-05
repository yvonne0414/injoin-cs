import './index.scss';
import { Breadcrumb, Carousel, Rate } from 'antd';
import { InputNumber, Button } from 'antd';
import { Collapse } from 'antd';
import { Comment, List, Tooltip } from 'antd';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

// -----Prdcar
import PrdCard from '../../../components/PrdCard';

// -----Variable width
import React, { Component } from 'react';
import Slider from 'react-slick';

// bartendingcar
import BartendingCard from '../../../components/BartendingCard';

import prddetailImg1 from '../../../assets/images/fe/productionDetail/prd-detail-img-1.png';
// import prddetailImg2 from '../../../assets/images/fe/productionDetail/prd-detail-img-2.png';
// import prddetailImg3 from '../../../assets/images/fe/productionDetail/prd-detail-img-3.png';
// import prddetailImg4 from '../../../assets/images/fe/productionDetail/prd-detail-img-4.png';
import prddetailImg5 from '../../../assets/images/fe/productionDetail/prd-detail-img-5.png';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { useParams, Link } from 'react-router-dom';
import { API_URL, BE_IMAGE_URL } from '../../../utils/config';
import EmptyImage from '../../../components/EmptyImage';

const { Panel } = Collapse;

const contentStyle = {
  height: '300px',
  color: '#000',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#fff',
  // background: 'transparent',
  overflow: 'hidden',
};

const illustrate = {
  payment: {
    title: '付款方式',
    content: [
      '信用卡線上刷卡，12家銀行(中國信託、國泰世華、花旗、玉山、台新、台北富邦、遠東、永豐、聯邦、新光、星展、第一銀行)提供信用卡3期零利率。',
      '信用卡線上刷卡，14家銀行享紅利折抵(限一次付清)。',
      'INJOIN門市取貨付款 (僅限現金或信用卡)。',
      '優惠券折抵。 本網站接受一般本國銀行或外國銀行於本國設立分行發行之 VISA、Master、JCB、American Express、中國銀聯卡Union Pay等5家國際發卡組織之信用卡，其餘由外國銀行發行之信用卡恕不適用。 ',
    ],
  },
  shopinng: {
    title: '物流方式',
    content: [
      '郵寄 (掛號包裹或快捷)。',
      '超商(全家)取貨 (該訂單商品組合需符合門市材積限制，請參考備註*超商門市材積限制係指：商品外包裝材積以1材為限(長+寬+高小於90公分)、單邊長度不得超過45公分。)',
      'INJOIN門市取貨 。',
    ],
  },
  notice: {
    title: '注意事項',
    content: [
      'INJOIN網路商店售出之商品，無法在全台屈臣氏實體門市提供退款、退貨或換貨等服務。',
      'INJOIN網路商店之價格及優惠活動僅適用於網路商店；屈臣氏實體門市之價格及優惠活動，請以實體門市公告為主。',
      '退換貨商品必須為全新狀態且完整包裝。',
      '每項商品每人限購至多6件；商(贈)品數量有限，商(贈)品售(送)完為止。',
      ' 商品圖檔顏色因電腦螢幕設定差異會略有不同，以實際商品顏色為準。',
      ' 商品內容物以實際出貨為主，若值新舊包裝更替期間，將隨機出貨，敬請見諒。',
    ],
  },
};

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

const settings2 = {
  className: 'slider variable-width',
  dots: false,
  infinite: false,
  centerMode: false,
  slidesToShow: 5,
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

const ProductionDetail = () => {
  const [cateL, setCateL] = useState(1);
  const [detail, setDetail] = useState([]);
  const [imgList, setImgList] = useState([]);
  const { prdId } = useParams();
  const [num, setNum] = useState(1);

  let rate = 5;
  // getuserid
  let userid = 1 || 0;
  // console.log(userid);

  const handleAddCart = () => {
    // console.log('prdId', prdId);
    // console.log('userid', userid);
    // console.log('num', num);

    let obj = {};
    obj = { prdid: Number(prdId), count: num };
    // console.log('obj', obj);
    // ==============判斷有沒有車
    // 因為沒有車會錯誤所以要先判斷===========
    if (localStorage.getItem('cart') == null) {
      let arr = [];
      localStorage.setItem('cart', JSON.stringify(arr));
    }
    let oldCart = JSON.parse(localStorage.getItem('cart'));
    console.log('oldCart', oldCart);
    if (oldCart.length === 0) {
      var newArr = [...oldCart, obj];
    } else {
      for (let i = 0; i < oldCart.length; i++) {
        console.log('oldCart[i].prdid', Number(oldCart[i].prdid));
        console.log('obj.prdid', Number(obj.prdid));

        if (Number(oldCart[i].prdid) == Number(obj.prdid)) {
          oldCart[i].count = Number(num);
          newArr = [...oldCart];
          // console.log('newArr',newArr);
          localStorage.setItem('cart', JSON.stringify(newArr));
          alert(`已將 數量:${num}, 的 ${Number(prdId)} 加入購物車`);
          return;
        } else {
          var newArr = [...oldCart, obj];
        }
      }
    }
    // console.log('newArr',newArr);
    localStorage.setItem('cart', JSON.stringify(newArr));
    alert(`已將 數量:${num}, 的 ${Number(prdId)} 加入購物車`);
    // console.log('handleAddCart');
  };
  const handleAddHeart = () => {
    // console.log('prdId' ,prdId);
    // console.log('userid',userid);
    axios.get(`${API_URL}/userlike/add/${userid}/${prdId}`);
    // console.log('handleAddHeart');
    alert(`使用者${userid} 已將 商品${prdId} 加最愛`);
  };
  const handleOnChenage = (e) => {
    setNum(e);
  };

  const onChange = (e) => {
    // console.log('changed', e);
  };
  let [cateM, setCateM] = useState(0);
  useEffect(() => {
    // bartedcard
    // let getApple = async () => {
    //   let response = await axios.get('http://localhost:3001/api/bar');
    //   // console.log('res', response.data);
    //   setBarted(response.data);
    // };
    // getApple();

    // prddetail

    let getDetail = async () => {
      let response = await axios.get(`${API_URL}/prd/detail/${prdId}`);
      // console.log('(response.data.detailImgList', response.data);
      setDetail(response.data.detailData[0]);
      setImgList(response.data.detailImgList);
      rate = response.data.detailData[0].rate;
      setCateM(response.data.detailData[0].cate_m);
      setCateL(response.data.cateL);
      // console.log('Detail', response.data.detailData);
    };
    getDetail();
  }, []);

  // console.log('detail', detail);
  // console.log('prdId', prdId);
  // console.log('imgList', imgList);

  // 取得商品評價
  let [ratedList, setRatedList] = useState([]);
  let getPrdRate = async () => {
    let res = await axios.get(`${API_URL}/reputation/${prdId}`);
    // console.log(res.data.data);
    let rateData = res.data.data;
    let toList = [];
    for (let i = 0; i < rateData.length; i++) {
      toList.push({
        actions: [
          <>
            <Rate allowHalf disabled defaultValue={rateData[i].rating} />
            <div className="d-flex comment-list-imgs justify-content-start">
              {rateData[i].reviewImgList.map((img) => {
                return (
                  <div className="mx-1 comment-list-img">
                    <img src={`${BE_IMAGE_URL}${img}`} className="img-fluid" alt="" />
                  </div>
                );
              })}
            </div>
          </>,
        ],
        author: rateData[i].name,
        avatar: `${BE_IMAGE_URL}${rateData[i].user_img}`,
        content: <p className="prd-detail-text">{rateData[i].content}</p>,
        imgList: rateData[i].reviewImgList,
      });
    }
    setRatedList(toList);
  };
  useEffect(() => {
    getPrdRate();
  }, []);

  // 取得相關商品
  let [relatedList, setRelatedList] = useState([]);

  useEffect(() => {
    let getRelated = async () => {
      let res = await axios.get(`${API_URL}/prd/related/${prdId}`, { params: { cateM: [cateM] } });
      setRelatedList(res.data.data);
    };
    getRelated();
  }, [cateM]);

  // 取得相關酒譜
  let [relatedBarList, setRelatedBarList] = useState([]);

  useEffect(() => {
    let getRelatedBar = async () => {
      let res = await axios.get(`${API_URL}/bar/related`, { params: { cateM: cateM } });
      setRelatedBarList(res.data.data);
      console.log(res.data.data);
    };
    getRelatedBar();
  }, [cateM]);

  return (
    <>
      {/* session1---------------------------------------------------------------------- */}
      <div className="bg-box prd-detail-session1">
        <img src={prddetailImg5} alt="prd-detail-img-5" className="mx-auto h-100 prd-detail-img-5 pc-view" />
        <div className="container">
          {/* Breadcrumb----------------------------------- */}
          <div className="w-fit-content ms-auto">
            <Breadcrumb separator="" className="prd-detail-breadcrumb">
              <Breadcrumb.Item>
                <Link to={'/production'}>商品</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>{detail.cateMName}</Breadcrumb.Item>
              <Breadcrumb.Separator />
              {cateL === 1 && (
                <>
                  <Breadcrumb.Item>{detail.cateSName}</Breadcrumb.Item>
                  <Breadcrumb.Separator />
                </>
              )}

              <Breadcrumb.Item>{detail.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* Carousel------------------------------------- */}
        <div className="prd-detail-session1-content-wraper">
          {/* // cn = mt-3 prd-detail-session1-content-block1 */}
          <Carousel autoplay className=" mt-3 prd-detail-session1-content-block1">
            {/* <div>
              <div style={contentStyle}>
                <img src={`${IMAGE_URL}${imgList}`} alt="prd-detail-img-1" className="mx-auto h-100" />
              </div>
            </div> */}
            <div>
              <div style={contentStyle}>
                <img src={`${BE_IMAGE_URL}/production/${imgList[0]}`} alt="prd-detail-img-2" className="mx-auto h-100" />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <img src={`${BE_IMAGE_URL}/production/${imgList[1]}`} alt="prd-detail-img-3" className="mx-auto h-100" />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <img src={`${BE_IMAGE_URL}/production/${imgList[2]}`} alt="prd-detail-img-4" className="mx-auto h-100" />
              </div>
            </div>
          </Carousel>
          {/* instructions-------------------------------- */}
          <div className="prd-detail-session1-content-block2">
            <div className="container">
              <div className="prd-detail-title mt-4">
                {/* TODO:取得商品名子 */}
                <span>{detail.name}</span>
              </div>
              <div className="prd-detail-price mt-3">
                {/* TODO:取得商品價格 */}
                <span>NT.{detail.price}</span>
              </div>
              <div className="star-defaultValue mt-3">
                <Rate value={rate} disabled />
              </div>
              <div className="prd-detail-number-space">
                <div className="prd-detail-number mt-3">數量</div>
                <div className="prd-detail-input-number mt-3">
                  <InputNumber defaultValue={0} onChange={handleOnChenage} size="middle" bordered={false} value={num} />
                </div>
              </div>
              <div className="prd-detail-button-position mt-3">
                <div className="prd-detail-button-1">
                  <Button className="text-black" onClick={handleAddCart}>
                    加入購物車&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCartShopping} fixedWidth className="text-black" />
                  </Button>
                </div>
                <div className="prd-detail-button-2">
                  <Button className="text-black" onClick={handleAddHeart}>
                    收藏商品 &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faHeart} fixedWidth />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* session2--------------------------------------------------------------------------------- */}
      <div className="prd-detail-session2 mt-5">
        <div className="container">
          {/* collapse------------------------------------------------------------ */}
          <div className="prd-detail-collapse">
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
              <Panel className="prd-detail-title-type1" header="產地規格" key="1">
                <p className="prd-detail-text">
                  產地：{detail.originName}
                  <br />
                  容量：{detail.capacity}ml
                  {(cateL === 1 || cateL === 2) && (
                    <>
                      <br />
                      品牌：{detail.brand}
                    </>
                  )}
                  {cateL === 1 && (
                    <>
                      <br />
                      酒精濃度：{detail.abv} %
                    </>
                  )}
                  {(cateL === 3 || cateL === 4) && (
                    <>
                      <br />
                      材質：{detail.materName}
                    </>
                  )}
                </p>
              </Panel>
              <Panel className="prd-detail-title-type1" header="產品介紹" key="2">
                <p className="prd-detail-text">{detail.disc}</p>
              </Panel>
              <Panel className="prd-detail-title-type1" header="付款與配送說明" key="3">
                <>
                  <div className="prd-detail-text">{illustrate.payment.title}</div>
                  <ol className="prd-detail-text">
                    {illustrate.payment.content.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ol>
                  <div className="prd-detail-text">{illustrate.shopinng.title}</div>
                  <ol className="prd-detail-text">
                    {illustrate.shopinng.content.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ol>
                  <div className="prd-detail-text">{illustrate.notice.title}</div>
                  <ol className="prd-detail-text">
                    {illustrate.notice.content.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ol>
                </>
              </Panel>
            </Collapse>
          </div>

          {/* evaluation----------------------------------- */}
          <div className="prd-detail-evaluation-bg mt-5">
            <div className="container">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>購買評價</p>
              </div>
              <div className="prd-detail-rate-box-1">
                <div>
                  <p className="prd-detail-rate-box-text1 mt-3">
                    <span>{detail.rate}</span>
                  </p>
                </div>
                <div className="prd-detail-rate-box-text2-bg">
                  <span></span>
                  <div className="prd-detail-rate-box-text2">評價</div>
                </div>
              </div>
              <div className="prd-commit-area">
                <List
                  header={`${ratedList.length} 則回覆`}
                  itemLayout="horizontal"
                  dataSource={ratedList}
                  renderItem={(item) => (
                    <li className="comment-list-li">
                      <Comment actions={item.actions} author={item.author} avatar={item.avatar} content={item.content} />
                      <hr />
                    </li>
                  )}
                />
              </div>
            </div>
          </div>

          {/* the same kind product-------------------------------------*/}
          <div className="prd-detail-evaluation-bg mt-5">
            <div className="container mb-4">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>同系列商品</p>
              </div>
              <div className="px-md-3">
                {relatedList.length > 0 ? (
                  <Slider className="prd-deatil-card" {...settings}>
                    {relatedList.map((v, i) => {
                      return <PrdCard key={v.id} data={v} />;
                    })}
                  </Slider>
                ) : (
                  <EmptyImage discText="無相關商品" />
                )}
              </div>
            </div>
          </div>
          {/* the same kind bartending--------------------------------------------- */}
          <div className="prd-detail-evaluation-bg-sp mt-5">
            <div className="container mb-4">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>相關酒譜</p>
              </div>
              <div className="bartending-card px-md-3">
                <Slider {...settings2}>
                  {relatedBarList.map((v, i) => {
                    // console.log(v);
                    return <BartendingCard key={i.id} data={v} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductionDetail;
