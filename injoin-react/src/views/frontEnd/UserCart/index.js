// scss
import './index.scss';

//react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../utils/config';

//antd
import { Select } from 'antd';
import 'antd/dist/antd.css';

// -----Variable width
import Slider from 'react-slick';

// component
import FePage1Header from '../../../components/FePage1Header';
import PrdCard from '../../../components/PrdCard';
import CartStep1 from '../../../components/FeUserCart/CartStep1';

//icon
import faveriteImg from '../../../assets/images/fe/faverite/faverite-product-img-1.png';
import { BsTrashFill } from 'react-icons/bs';

const UserCart = () => {
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
      isShow: true,
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
  var cartArr = [];
  const createCart = async () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    // console.log('cart', cart);
    for (let i = 0; i < cart.length; i++) {
      // console.log('carti', cart[i].prdid);
      let res = await axios.get(`${API_URL}/cart/getPrdDetail?prdId=${cart[i].prdid}`);
      // console.log(`${API_URL}/cart/getPrdDetail?prdId=${cart[i].prdid}`);
      // console.log(res.data);
      let newObj = {};

      newObj = { ...res.data[0], cartprdCount: cart[i].count };
      // console.log('newObj', newObj);
      cartArr.push(newObj);
      

      
    }
    console.log('cartArr2',cartArr)

  };
  createCart();
  console.log('cartprdArr',cartprdArr)
  console.log('cartArr',cartArr)

  // console.log("ARF",cartArr);

  // cartprdCount: '1',
  const initState = (cartprdArr) => {
    return cartprdArr.map((v) => ({ ...v, cartprdCount: 1 }));
  };
  const [productsInOrder, setProductsInOrder] = useState(initState(cartprdArr));
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(100);

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
  return (
    <>
      {/* header-section */}
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="cart-area">
        <div className="container">
          {/* status-section-1 */}
          <div className="cart-step-content d-flex flex-column flex-md-row">
            <div className="col cart-step d-flex flex-column flex-md-row cart-step1">
              <div className="step-left">01</div>
              <div className="step-right">
                確認訂單及付款方式 <br />
                Cart & Check out
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row ">
              <div className="step-left">02</div>
              <div className="step-right">
                填寫訂單資料 <br />
                Shipping & Billing info
              </div>
            </div>
            <div className="col cart-step d-flex flex-column flex-md-row cart-step3">
              <div className="step-left">03</div>
              <div className="step-right">
                購物完成! <br />
                Oder Completend
              </div>
            </div>
          </div>

          {/* prd-section-2 */}
          <div className="position-relative">
            <div className="cart-add-info-bg-square"></div>
            <div className="p-3 p-md-5">
              <div className="shopping-cart-area d-flex justify-content-between d-flex flex-column flex-md-row">
                <div className="shopping-cart-prd-content">
                  <div className="shopping-cart-bg  mb-3">
                    <div className="shopping-cart-info">
                      <div className="shopping-cart-info-title">
                        <span>
                          我的購物車
                          <br />
                          Your shopping bag
                        </span>
                      </div>
                      {/* 商品迴圈 */}
                      {productsInOrder.map((item, i) => {
                        return (
                          <CartStep1
                            key={item.id}
                            data={item}
                            setCount={(newCount) => {
                              // console.log(newCount);
                              const newObj = productsInOrder.map((v, i) => {
                                return { ...v };
                              });
                              // console.log('newObj[i].cartprdCount', newObj[i].cartprdCount);
                              newObj[i].cartprdCount = newCount < 1 ? 1 : newCount;

                              setProductsInOrder(newObj);
                              // console.log(productsInOrder);
                            }}
                            removeItem={() => {
                              // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
                              // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
                              // console.log(item.id);
                              const newProductsInOrder = productsInOrder.filter((value, index) => {
                                return value.id !== item.id;
                              });
                              // 3. 設定回原本的狀態中
                              setProductsInOrder(newProductsInOrder);
                            }}
                          />
                        );
                      })}

                      {/* <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between">
                        <img src={faveriteImg} alt="faverite-product-img-1" className="w-25 h-25 faverite-product-img-1 " />
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
                      <div className="border-bottom m-3"></div> */}
                    </div>
                  </div>
                </div>
                {/* check-section-3 */}
                <div className="shopping-cart-check-content">
                  <div className="position-relative ">
                    <div className="shopping-cart-check-bg">
                      <div className="shopping-cart-info">
                        <div className="shopping-cart-info-title">
                          <span>
                            付款方式
                            <br />
                            Payment Method
                          </span>
                        </div>
                        <div className="cart-prd-info-content mt-5">
                          <div className="delivery-section mb-3">
                            <label>配送區域</label>
                            <br />
                            <Select labelInValue defaultValue={{ value: 1, label: '台灣本島' }} style={{ width: 250, size: 25 }} onChange={handleChange}>
                              <Option value="1">台灣本島</Option>
                              <Option value="2">偏遠地區及離島 </Option>
                            </Select>
                          </div>
                        </div>
                        {/* <div className="check-info-area mb-3">
                          <label>付款方式</label>
                          <div className="check-content border border-white mt-2 p-3">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label>信用卡線上付款</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                              <label>貨到付款</label>
                            </div>
                          </div>
                        </div> */}

                        <div className="delivery-section mb-5">
                          <label>運送方式</label>
                          <br />
                          <Select labelInValue defaultValue={{ value: 1, label: '宅配' }} style={{ width: 250, size: 25 }} onChange={handleChange}>
                            <Option value="1">宅配</Option>
                            <Option value="2">郵局</Option>
                          </Select>
                        </div>
                        <div className="shopping-cart-summary-area border-top border-white">
                          <span>訂單摘要</span>
                          <div className="shopping-cart-summary-content mt-3">
                            <div className="shopping-cart-summary-total d-flex justify-content-start">
                              <div className="m-3">
                                商品總計
                                <br />
                                使用優惠券
                                <br />
                                折扣金額
                              </div>
                              <div className="m-3 ms-5">
                                NT${totalPrice()}
                                <br />
                                優惠券
                                <br />
                                -NT${discount}
                              </div>
                            </div>
                            <hr />
                            <div className="shopping-cart-summary-total d-flex justify-content-start mb-5">
                              <div className="me-4">實付總金額</div>
                              <div className="ms-5">NT${total - discount}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative text-center p-3">
              <button className="btn btn-none injoin-btn-outline text-gold" htmlType="sumbit">
                完成，下一步
              </button>
            </div>
          </div>
          <Link to="/cart" className="back-page btn btn-none mt-3">
            <div>
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
            </div>
            <span className="ms-3 ff-cn-main">返回上一頁</span>
          </Link>
          {/* the same kind  product-------------------------------------*/}
          <div className="prd-detail-evaluation-bg mt-5">
            <div className="container mb-4">
              <div className="prd-detail-title-type1 mt-3 ">
                <p>同系列商品</p>
              </div>
              <div className="px-md-3">
                <Slider className="prd-deatil-card" {...settings}>
                  {[cardArr].map((v, i) => {
                    return <PrdCard key={v.id} data={v} />;
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
export default UserCart;
