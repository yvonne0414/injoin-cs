import './index.scss';
import { Breadcrumb, Carousel, Rate } from 'antd';
import { InputNumber, Button } from 'antd';
import { Collapse } from 'antd';
import { Comment, List, Tooltip } from 'antd';

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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BE_IMAGE_URL } from '../../../utils/config';

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

const onChange = (value) => {
  // console.log('changed', value);
};

// const specification = {
//   origin: '美國',
//   capacity: 750,
//   brand: '金賓',
// };

// const text2 = [
//   `
//   美國 金賓波本威士忌 Jim beam bourbon whisky，完全倚重人工生產方式，限制量產的金賓波本威士忌，陳釀期長達四年，酒質順滑香醇無比，擁有與眾不同的特殊風味，是美國波本威士忌相當具有代表性的一支酒款，其特色為採用蛇麻草培養液進行發酵，原料中大麥比例較高，酒精濃度僅40%，微波本威士忌中口感叫清柔的一族。

//   在美國及全世界銷售第一的金賓波本威士忌，是純正的美國肯塔基純正波本威士忌，始於1795年，立足於美國原產地，獨步全球，金賓波本一直以來是自信與權威人士的首選。
// `,
// ];

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

const data = [
  {
    actions: [<Rate allowHalf disabled defaultValue={2.5} />],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: <p className="prd-detail-text">很快就收到商品了，品質很好，與照片相符，包裝也很完整。既親切又有效率的優質賣家，值得推薦。</p>,
    // datetime: (
    //   <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
    //     <span>{moment().subtract(1, 'days').fromNow()}</span>
    //   </Tooltip>
    // ),
  },
  {
    actions: [<Rate allowHalf disabled defaultValue={5} />],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: <p className="prd-detail-text">很快就收到商品了，品質很好，與照片相符，包裝也很完整。既親切又有效率的優質賣家，值得推薦。</p>,
    // datetime: (
    //   <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
    //     <span>{moment().subtract(2, 'days').fromNow()}</span>
    //   </Tooltip>
    // ),
  },
];

const settings = {
  className: 'slider variable-width',
  dots: false,
  infinite: true,
  centerMode: false,
  slidesToShow: 6,
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
  infinite: true,
  centerMode: false,
  slidesToShow: 6,
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
  const [detail, setDetail] = useState([]);
  const [imgList, setImgList] = useState([]);
  const { prdId } = useParams();
  let rate = 5;
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
      let response = await axios.get(`http://localhost:3001/api/prd/detail/${prdId}`);
      // console.log('(response.data.detailImgList', response.data);
      setDetail(response.data.detailData[0]);
      setImgList(response.data.detailImgList);
      rate = response.data.detailData[0].rate;
      // console.log('Detail', response.data.detailData);
    };
    getDetail();
  }, []);

  console.log('detail', detail);
  console.log('prdId', prdId);
  console.log('imgList', imgList);

  return (
    <>
      {/* session1---------------------------------------------------------------------- */}
      <div className="bg-box prd-detail-session1">
        <img src={prddetailImg5} alt="prd-detail-img-5" className="mx-auto h-100 prd-detail-img-5 pc-view" />
        <div className="container">
          {/* Breadcrumb----------------------------------- */}
          <div className="w-fit-content ms-auto">
            <Breadcrumb separator="" className="prd-detail-breadcrumb">
              <Breadcrumb.Item href="">商品</Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item href="">{detail.cateMName}</Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item href="">{detail.cateSName}</Breadcrumb.Item>
              <Breadcrumb.Separator />
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
                <Rate disabled defaultValue={rate} />
              </div>
              <div className="prd-detail-number-space">
                <div className="prd-detail-number mt-3">數量</div>
                <div className="prd-detail-input-number mt-3">
                  <InputNumber min={1} max={99} defaultValue={0} onChange={onChange} size="middle" bordered={false} />
                </div>
              </div>
              <div className="prd-detail-button-position mt-3">
                <div className="prd-detail-button-1">
                  <Button className="text-black">
                    加入購物車&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCartShopping} fixedWidth className="text-black" />
                  </Button>
                </div>
                <div className="prd-detail-button-2">
                  <Button className="text-black">
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
                  <br />
                  品牌：{detail.brand}
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
              <div className="prd-detail-box-1">
                <div>
                  <p className="prd-detail-box-text1 mt-3">
                    <span>{detail.rate}</span>
                  </p>
                </div>
                <div className="prd-detail-box-text2-bg">
                  <span></span>
                  <div className="prd-detail-box-text2">評價</div>
                </div>
              </div>
              <List
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <li className="comment-list-li">
                    <Comment actions={item.actions} author={item.author} avatar={item.avatar} content={item.content} datetime={item.datetime} />
                    <div className="d-flex comment-list-imgs">
                      <div className="flex-grow-1 mx-1 comment-list-img">
                        <img src={prddetailImg1} className="img-fluid object-cover" alt="" />
                      </div>
                      <div className="flex-grow-1 mx-1 comment-list-img">
                        <img src={prddetailImg1} className="img-fluid object-cover" alt="" />
                      </div>
                    </div>
                    <hr />
                  </li>
                )}
              />
            </div>
          </div>

          {/* the same kind product-------------------------------------*/}
          <div className="prd-detail-evaluation-bg mt-5">
            <div className="container mb-4">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>同系列商品</p>
              </div>
              <div className="px-md-3">
                <Slider className="prd-deatil-card" {...settings}>
                  {cardArr.map((v, i) => {
                    return <PrdCard key={v.id} data={v} />;
                  })}
                </Slider>
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
                {/* <Slider {...settings2}>
                  {barted.map((v, i) => {
                    console.log(v);
                    return <BartendingCard key={i.id} data={v} />;
                  })}
                </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductionDetail;
