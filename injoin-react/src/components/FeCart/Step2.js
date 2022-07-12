// scss
import './_index.scss';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox, message } from 'antd';
import axios from 'axios';
import { API_URL, BE_IMAGE_URL } from '../../utils/config';

import { userState } from '../../App';

import faveriteImg from '../../assets/images/fe/faverite/faverite-product-img-1.png';

const Step2 = (props) => {
  const { Option } = Select;
  const { stepNum, setStepNum, cartlist, setAns, ans, userInfo, setOrderId } = props;
  const onFinish = (values) => {
    // console.log(values);
  };
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setIsChecked(e.target.checked);
  };
  // city
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // console.log(cartlist);
    let getCities = async () => {
      let response = await axios.get(API_URL + '/cityoptions');
      setCities(response.data);
    };
    getCities();
  }, []);

  // orderPrdData
  const [orderPrdData, setOrderPrdData] = useState([]);

  useEffect(() => {
    let getPrdData = async () => {
      let dataList = [];
      for (let i = 0; i < cartlist.length; i++) {
        let res = await axios.get(`${API_URL}/cart/getPrdDetail`, { params: { prdId: cartlist[i].prdId } });
        dataList.push({ ...res.data[0], amount: cartlist[i].amount });
      }
      setOrderPrdData(dataList);
    };
    getPrdData();
  }, []);

  const userstate = useContext(userState);
  // console.log(userstate.member);

  // 訂購人資訊
  const [form] = Form.useForm();
  const ordererValue = Form.useWatch('user', form);

  console.log('userInfo', userInfo);

  // 檢查有沒有打勾

  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (lastOrder) => {
    // console.log('送出訂單', ans);
    try {
      if (isChecked == false) {
        message.error('請詳閱同意接受服務條款和隱私權政策');
        return;
      }

      setStepNum(stepNum + 1);
      // alert('送出訂單');
      console.log('送出訂單', lastOrder);
      let res = await axios.post(`${API_URL}/cart`, lastOrder);
      // console.log(ans);
      message.success('完成訂單');
      setOrderId(res.data.orderId);
      localStorage.removeItem('cart');
    } catch (e) {
      console.error(e);
    }
    // console.log(ans);
    // console.log('handleSubmit');
  };

  return (
    <div className="position-relative  mt-4">
      <div className="cart-add-info-bg-square"></div>
      <div className="cart-prd-bg-area">
        <div className="cart-prd-content">
          <div className="cart-prd-info ">
            <div className="shopping-cart-info-title">
              <h4 className="shopping-cart-info-title">
                <span>訂單商品資訊</span>
                <span>Order Information</span>
              </h4>
            </div>
            {orderPrdData.map((prd) => {
              return (
                <div className="cart-prd-info-content d-flex mt-3 flex-nowrap justify-content-between" key={prd.id}>
                  <div className="img-content">
                    <img src={`${BE_IMAGE_URL}/production/${prd.cartprdImg}`} alt="faverite-product-img-1" className="faverite-product-img-1" />
                  </div>
                  <div className="cart-detail-prd-content d-flex flex-column p-2">
                    <div className="cart-prd-num">{prd.cartprdNum}</div>
                    <div className="cart-prd-name">{prd.cartprdName}</div>
                    <div></div>
                    <br />
                    <div className="cart-prd-price">NT${prd.cartprdPrice * prd.amount}</div>
                  </div>
                  <div className="prd-number-content">
                    <div className="prd-number">
                      <span>數量:</span>
                      {prd.amount}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="cart-user-bg-area">
        <div className="cart-user-content">
          <div className="shopping-cart-info-title">
            <h4 className="shopping-cart-info-title">
              <span>訂單人資訊</span>
              <span>Orderer Information</span>
            </h4>
          </div>
          <Form nameName="nest-messages" form={form}>
            <Form.Item
              name={['user', 'name']}
              label="姓名"
              rules={[
                {
                  required: true,
                  message: '請填寫收件人姓名',
                },
              ]}
            >
              <Input defaultValue={userInfo.name} />
            </Form.Item>
            <Form.Item
              name={['user', 'phone']}
              label="連絡電話"
              rules={[
                {
                  type: 'tel',
                },
              ]}
            >
              <Input defaultValue={userInfo.phone} />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                  required: false,
                  message: '請填寫Email',
                },
              ]}
            >
              <Input defaultValue={userInfo.email} />
            </Form.Item>

            <Form.Item label="地址">
              <Input.Group compact>
                <Form.Item
                  name={['user', 'city']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '請選擇縣市',
                    },
                  ]}
                >
                  <Select
                    style={{
                      width: '22%',
                    }}
                    placeholder="請選擇縣市"
                    defaultValue={userInfo.address_country}
                  >
                    {cities.map((city) => {
                      return (
                        <Option value={city.code} key={city.code}>
                          {city.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item name={['user', 'street']} noStyle>
                  <Input
                    style={{
                      width: '78%',
                    }}
                    placeholder="詳細地址"
                    defaultValue={userInfo.address_detail}
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="備註">
              <Input.TextArea placeholder="請輸入不超過30個字" maxlength={30} />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="cart-pay-bg-area">
        <div className="cart-pay-content">
          <div className="shopping-cart-info-title">
            <h4 className="shopping-cart-info-title">
              <span>信用卡資訊</span>
              <span>Credit Card Information</span>
            </h4>
          </div>
          <Form name="nest-messages" onFinish={onFinish}>
            <Form.Item
              name={['creditCard', 'holder']}
              label="持卡人:"
              rules={[
                {
                  required: true,
                  message: '必填',
                },
              ]}
            >
              <Input
                style={{
                  width: '55%',
                }}
              />
            </Form.Item>
            <Form.Item
              name={['creditCard', 'checkNum']}
              label="卡號:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <div className="" style={{ width: '100%' }}></div>
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                  margin: '0.5rem',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                }}
              />
              <Input
                maxlength="4"
                style={{
                  width: '22%',
                  margin: '0.5rem',
                }}
              />
            </Form.Item>
            <Form.Item
              name={['creditCard', 'checkDate']}
              label="效期:"
              rules={[
                {
                  type: 'date',
                },
              ]}
            >
              <Input
                maxlength="2"
                style={{
                  width: '22%',
                  marginRight: '0.5rem',
                }}
              />
              /
              <Input
                maxlength="2"
                style={{
                  width: '22%',
                  marginLeft: '0.5rem',
                }}
              />
            </Form.Item>
            <Form.Item
              name={['creditCard', 'CSC']}
              label="安全碼:"
              rules={[
                {
                  required: true,
                  message: '必填',
                },
              ]}
            >
              <Input
                maxlength="3"
                style={{
                  width: '45%',
                }}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="check-box d-flex flex-column flex-md-row justify-content-between">
          <Checkbox onChange={onChange}>我同意接受服務條款和隱私權政策</Checkbox>
          <div className="check-p text-end">※下單前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容</div>
        </div>
      </div>

      <div className="position-relative text-center p-3">
        <button
          onClick={() => {
            setStepNum(stepNum - 1);
          }}
          className="btn btn-none injoin-btn-outline text-gold mx-3"
        >
          上一步
        </button>
        <button
          onClick={async () => {
            // console.log('ordererValue', ordererValue);
            // console.log('detail', {
            //   ...ans,
            //   orderer_name: ordererValue.name ? ordererValue.name : userInfo.name,
            //   address_country: ordererValue.city ? ordererValue.city : userInfo.address_country,
            //   address_detail: ordererValue.street ? ordererValue.street : userInfo.address_detail,
            //   orderer_phone: ordererValue.phone ? ordererValue.phone : userInfo.phone,
            //   orderer_email: ordererValue.email ? ordererValue.email : userInfo.email,
            // });

            let lastOrder = {
              ...ans,
              orderer_name: ordererValue.name ? ordererValue.name : userInfo.name,
              address_country: ordererValue.city ? ordererValue.city : userInfo.address_country,
              address_detail: ordererValue.street ? ordererValue.street : userInfo.address_detail,
              orderer_phone: ordererValue.phone ? ordererValue.phone : userInfo.phone,
              orderer_email: ordererValue.email ? ordererValue.email : userInfo.email,
            };
            await setAns(lastOrder);
            // console.log('訂單', ans);
            handleSubmit(lastOrder);
            return;
          }}
          className="btn btn-none injoin-btn-outline text-gold"
        >
          確認付款
        </button>
      </div>
    </div>
  );
};
export default Step2;
