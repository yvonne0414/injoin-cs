// scss
import './index.scss';

//react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../utils/config';

//antd
import { Select } from 'antd';

// -----Variable width
import Slider from 'react-slick';

// component
import FePage1Header from '../../../components/FePage1Header';
import PrdCard from '../../../components/PrdCard';
import Step1 from '../../../components/FeCart/Step1';
import Step2 from '../../../components/FeCart/Step2';
import Step3 from '../../../components/FeCart/Step3';

//icon
import faveriteImg from '../../../assets/images/fe/faverite/faverite-product-img-1.png';
import { BsTrashFill } from 'react-icons/bs';

const UserCart = () => {
  let userId = 1;

  const page1HeaderInfo = {
    titleEn: 'Cart',
    titleCn: '購物車',
    menuList: [
      {
        href: '#cart-bolck1',
        name: '',
      },
      {
        href: '#cart-bolck2',
        name: '',
      },
    ],
    imgs: {
      m: 'cart-header.png',
      pc: 'cart-header.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '會員中心',
      },
      selected: 'userCart',
      selectOptions: [
        {
          name: '購物車',
          value: 'userCart',
        },
        {
          name: '',
          value: 'userCart2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  const { Option } = Select;

  const handleChange = (value) => {
    // console.log(value);
  };
  // slider 設定
  const settings = {
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

  // chennnn

  //購物車商品陣列

  const cartprdArr = [
    {
      id: 1,
      cartprdImg: 'faverite-product-img-1.png',
      cartprdNum: 'AB123',
      cartprdName: '金彬黑fdsf波本威士忌',
      cartprdPrice: 111,
      cartprdTotal: '680',
    },
    {
      id: 2,
      cartprdImg: 'faverite-product-img-1.png',
      cartprdNum: 'AB456',
      cartprdName: '金彬黑波本威士忌',
      cartprdPrice: 222,
      cartprdTotal: '680',
    },
    {
      id: 3,
      cartprdImg: 'faverite-product-img-1.png',
      cartprdNum: 'AB789',
      cartprdName: '金彬黑波本威士忌',
      cartprdPrice: 333,
      cartprdTotal: '680',
    },
    {
      id: 4,
      cartprdImg: 'faverite-product-img-1.png',
      cartprdNum: 'AB666',
      cartprdName: '金彬黑波本威士忌',
      cartprdPrice: 444,
      cartprdTotal: '680',
    },
    {
      id: 5,
      cartprdImg: 'faverite-product-img-1.png',
      cartprdNum: 'AB777',
      cartprdName: '金彬黑波本威士忌',
      cartprdPrice: 555,
      cartprdTotal: '680',
    },
  ];

  // console.log('cartprdArr',cartprdArr)
  // console.log('cartArr',cartArr)

  // console.log("ARF",cartArr);

  // cartprdCount: '1',
  const initState = (cartprdArr) => {
    return cartprdArr.map((v) => ({ ...v, cartprdCount: 1 }));
  };
  const [productsInOrder, setProductsInOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(100);
  // const cartArr = [];
  // const setCartArr = new Set([])
  // console.log(productsInOrder);
  const createCart = async () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    // console.log('cart', cart);
    let tempCartArray = [];
    // cart.length
    for (let idx = 0; idx < cart.length; idx++) {
      // console.log(idx);
      // console.log('carti', cart[i].prdid);
      let res = await axios.get(`${API_URL}/cart/getPrdDetail?prdId=${cart[idx].prdid}`);
      // console.log(`${API_URL}/cart/getPrdDetail?prdId=${cart[i].prdid}`);
      let newObj = {};
      newObj = { ...res.data[0], cartprdCount: cart[idx].count };
      // console.log('newObj', newObj);
      tempCartArray.push(newObj);
      // setCartArr.add(newObj)
    }
    // console.log(tempCartArray);
    setProductsInOrder(tempCartArray);
    // console.log('cartArr2', cartArr);
  };
  useEffect(() => {
    createCart();
  }, []);
  // chennnnn------
  // console.log('productsInOrder', productsInOrder);

  // 計算總數量
  const totalNumber = () => {
    let result = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].cartprdCount;
    }
    return result;
  };

  // totalNumber();
  // 計算總價格
  const totalPrice = () => {
    let result = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].cartprdCount * productsInOrder[i].cartprdPrice;
      // console.log(result);
    }
    return result;
  };

  const handleSubmit = () => {
    let arr = [
      {
        prdId: 1,
        price: 550,
        amount: 3,
        subTotal: 1650,
      },
      {
        prdId: 3,
        price: 140,
        amount: 5,
        subTotal: 700,
      },
    ];
    console.log('待處理', productsInOrder);
    let newArr = [];
    productsInOrder.forEach((v, i) => {
      let obj = {
        prdId: v.id,
        price: v.cartprdPrice,
        amount: v.cartprdCount,
        subTotal: Number(v.cartprdPrice) * Number(v.cartprdCount),
      };
      arr.push(obj);
      // console.log(obj);
    });
    // console.log('arr', arr);

    let ans = {
      userId: userId,
      coponId: 0,
      total: Number(totalPrice() - discount),
      logistics: 1,
      cartList: arr,
    };
    try {
      console.log('送出訂單', ans);
    } catch (e) {
      console.error(e);
    }
    // console.log(ans);
    // console.log('handleSubmit');
  };

  //相關商品陣列
  const cardArr = [
    {
      id: 1,
      name: '金黑波本fasdf威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 2,
      name: 'asdfa金黑波本威士忌',
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
      name: '金黑波本asdfa威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 6,
      name: '金黑波本asdfas威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 7,
      name: '金黑波asdf本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 8,
      name: 'asdfas金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
  ];

  const [stepNum, setStepNum] = useState(1);

  return (
    <>
      {/* header-section */}
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="cart-area">
        <div className="container">
          {/* status-section-1 */}
          <div className="cart-step-content d-flex flex-column flex-md-row">
            <div className={`col cart-step d-flex flex-column flex-md-row ${stepNum === 1 && 'active'}`}>
              <div className="step-left">01</div>
              <div className="step-right">
                確認訂單及付款方式 <br />
                Cart & Check out
              </div>
            </div>
            <div className={`col cart-step d-flex flex-column flex-md-row ${stepNum === 2 && 'active'}`}>
              <div className="step-left">02</div>
              <div className="step-right">
                填寫訂單資料 <br />
                Shipping & Billing info
              </div>
            </div>
            <div className={`col cart-step d-flex flex-column flex-md-row ${stepNum === 3 && 'active'}`}>
              <div className="step-left">03</div>
              <div className="step-right">
                購物完成! <br />
                Order Completend
              </div>
            </div>
          </div>

          {/* prd-section-2 */}
          {stepNum === 1 ? <Step1 stepNum={stepNum} setStepNum={setStepNum} /> : stepNum === 2 ? <Step2 stepNum={stepNum} setStepNum={setStepNum} /> : <Step3 />}
          {stepNum === 1 && (
            <>
              <Link to="/production" className="back-page btn btn-none mt-3">
                <div>
                  <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                    />
                  </svg>
                </div>
                <span className="ms-3 ff-cn-main">繼續選購</span>
              </Link>
              {/* the same kind  product-------------------------------------*/}
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
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default UserCart;
