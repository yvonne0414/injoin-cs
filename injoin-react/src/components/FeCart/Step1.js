import './_index.scss';
//react
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../utils/config';

//antd
import { message, Select } from 'antd';

import Step1Prd from './Step1Prd';

const Step1 = (props) => {
  const { Option } = Select;
  const { stepNum, setStepNum, setAns, userId } = props;
  const [allCoupon, setAllCoupon] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const optsRef = useRef([]);

  const initState = (cartprdArr) => {
    return cartprdArr.map((v) => ({ ...v, cartprdCount: 1 }));
  };
  const [productsInOrder, setProductsInOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
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
    let getUserCoupon = async () => {
      let res = await axios.get(`${API_URL}/cart/getUserCoupon`, { params: { userId } });
      // console.log('coupon', res.data);
      setAllCoupon(res.data);
      setCoupon(res.data);
    };
    getUserCoupon();
  }, []);

  useEffect(() => {
    setCoupon(
      allCoupon.filter((item, i) => {
        // console.log(`total`, totalPrice());
        // console.log(`coupon ${i}`, item.rule_min);
        return totalPrice() > item.rule_min;
      })
    );
  }, [allCoupon, productsInOrder]);
  // chennnnn------
  // console.log('productsInOrder', productsInOrder);
  const [couponId, setCouponId] = useState(0);

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
    console.log('result', result);
    // setTotal(result);
    return result;
  };
  let arr = [];

  const handleSubmit = () => {
    // let arr = [];
    // console.log('待處理', productsInOrder);
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
    if (arr.length == 0) {
      message.warning('歡迎選購商品');
      return;
    }

    setStepNum(stepNum + 1);
    // console.log('arr', arr);
    // console.log(couponId);
    let ans = {
      userId: userId,
      couponId: couponId,
      total: Number(totalPrice() - discount),
      logistics: 1,
      cartList: arr,
    };
    try {
      setAns(ans);
      // console.log('送出訂單', ans);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChange = (value) => {
    // console.log(value);
  };

  return (
    <div className="position-relative mt-4">
      <div className="cart-add-info-bg-square"></div>
      <div className="p-4">
        <div className="shopping-cart-area d-flex justify-content-between d-flex flex-column flex-md-row  p-md-5 gap-4">
          <div className="shopping-cart-prd-content">
            <div className="shopping-cart-bg p-4 pb-md-5">
              <div className="shopping-cart-info shopping-cart-width">
                <div className="shopping-cart-info-title">
                  <span>我的購物車</span>
                  <span>Your shopping bag</span>
                </div>

                {productsInOrder.length === 0 ? <div className="cart-step1-noprd-text">歡迎選購商品</div> : <></>}

                {/* 商品迴圈 */}

                {productsInOrder.map((item, i) => {
                  // console.log(productsInOrder);
                  return (
                    <Step1Prd
                      className="step1Prd"
                      key={item.id}
                      data={item}
                      setCount={(newCount) => {
                        // console.log(newCount);
                        const newObj = productsInOrder.map((v, i) => {
                          return { ...v };
                        });
                        // console.log('newObj[i].cartprdCount', newObj[i].cartprdCount);
                        newObj[i].cartprdCount = newCount < 1 ? 1 : newCount;

                        let newCart = newObj.map((v, i) => {
                          return { prdid: v.id, count: v.cartprdCount };
                        });

                        localStorage.setItem('cart', JSON.stringify(newCart));
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

                        let newCart = newProductsInOrder.map((v, i) => {
                          return { prdid: v.id, count: v.cartprdCount };
                        });
                        // console.log(newCart);

                        // 3. 設定回原本的狀態中
                        localStorage.setItem('cart', JSON.stringify(newCart));
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
                    <span>配送方式</span>
                    <span>Delivery Method</span>
                  </div>
                  {/* <div className="cart-prd-info-content mt-5">
                      <div className="delivery-section mb-3">
                        <label>配送區域</label>
                        <br />
                        <Select labelInValue defaultValue={{ value: 1, label: '台灣本島' }} style={{ width: 250, size: 25 }}>
                          <Option value="1">台灣本島</Option>
                          <Option value="2">偏遠地區及離島 </Option>
                        </Select>
                      </div>
                    </div> */}
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

                  <div className="delivery-section mb-5 ms-md-5">
                    {/* <div className="shopping-cart-info-subtitle">運送方式</div> */}
                    <Select labelInValue defaultValue={1} style={{ width: 250, size: 25 }} onChange={handleChange}>
                      <Option value={1}>郵局</Option>
                      <Option value={2}>宅配</Option>
                    </Select>
                  </div>
                  <div className="shopping-cart-summary-area">
                    <div className="shopping-cart-info-subtitle">訂單摘要</div>
                    <div className="shopping-cart-summary-content mt-3">
                      <div className="shopping-cart-summary-total px-3 px-md-4 mx-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="shopping-cart-summary-title">商品總計</div>
                          <div className="shopping-cart-summary-text">NT${totalPrice()}</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="shopping-cart-summary-title">使用優惠券</div>
                          <select
                            className="shopping-cart-summary-text"
                            name="couponSel"
                            onChange={(e) => {
                              let couponid = optsRef.current[e.target.value].getAttribute('data-couponId');
                              setCouponId(couponid);
                              setDiscount(Number(coupon[e.target.value].discount));
                            }}
                          >
                            <option value={0} data-couponId={-1}>
                              請選擇優惠卷
                            </option>
                            {coupon.map((v, i) => {
                              return (
                                <option ref={(el) => (optsRef.current[i] = el)} value={i} data-couponId={v.coupon_id} key={v.coupon_id}>
                                  {v.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="shopping-cart-summary-title">折扣金額</div>
                          <div className="shopping-cart-summary-text">-NT${discount}</div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center px-3 px-md-4 mx-auto">
                        <div className="shopping-cart-summary-title total">實付總金額</div>
                        <div className="shopping-cart-summary-text total">NT${totalPrice() - discount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative text-center p-3">
          <button
            className="btn btn-none injoin-btn-outline text-gold"
            htmlType="sumbit"
            // onClick={handleSubmit}
            onClick={() => {
              handleSubmit();
            }}
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  );
};
export default Step1;
