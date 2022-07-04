import './_index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';

import { Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const CouponAdd = () => {
  // 種類
  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    const getCate = async () => {
      let res = await axios.get(`${API_URL}/coupon/cate`);
      setCateList(res.data.data);
      // console.log(res.data.data);
    };
    getCate();
  }, []);

  // 會員
  const [vipList, setVipList] = useState([]);
  useEffect(() => {
    const getVip = async () => {
      let res = await axios.get(`${API_URL}/viplevel`);
      setVipList(res.data.data);
    };
    getVip();
  }, []);

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  const onFinish = async (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['timeRange'];
    const values = {
      cate: fieldsValue.cate,
      name: fieldsValue.name,
      discount: fieldsValue.discount,
      ruleMin: fieldsValue.ruleMin,
      ruleMax: fieldsValue.ruleMax,
      vipLevel: fieldsValue.vipLevel,
      startTime: rangeValue[0].format('YYYY-MM-DD'),
      endTime: rangeValue[1].format('YYYY-MM-DD'),
    };
    console.log('Received values of form: ', values);
    let res = await axios.post(`${API_URL}/coupon/`, values);
    console.log(res);
  };

  return (
    <>
      <h2 className="mb-5">新增優惠券</h2>
      <div className="add-coupon">
        <Form onFinish={onFinish}>
          <div className="d-flex flex-wrap">
            <div className="form-item">
              <Form.Item name="name" label="優惠券名稱">
                <Input />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="cate" label="類型">
                <Select>
                  {cateList.map((item) => {
                    return (
                      <Option key={item.id} values={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="discount" label="折扣">
                <InputNumber />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="vipLevel" label="會員門檻">
                <Select>
                  {vipList.map((item) => {
                    return (
                      <Option key={item.id} values={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="ruleMin" label="使用門檻">
                <InputNumber />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item name="ruleMax" label="最高折扣">
                <InputNumber />
              </Form.Item>
            </div>

            <div className="form-item">
              <Form.Item name="timeRange" label="優惠時間">
                <RangePicker disabledDate={disabledDate} />
              </Form.Item>
            </div>
          </div>
          <div className="mx-auto text-center mt-4">
            <Form.Item>
              <Button htmlType="submit">送出</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};
export default CouponAdd;
