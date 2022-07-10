import { FaEye } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import logo from '../../assets/images/shared/injoinlogo.png';
import './_index.scss';

import { API_URL, BE_IMAGE_URL } from '../../utils/config';
import BePagination from '../../components/BePagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const OrderList = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  const [logisticsState, setLogisticsState] = useState(1);
  useEffect(() => {
    let getPrdList = async () => {
      let res = await axios.get(`${API_URL}/order/be/list`, { params: { page, logisticsState } });
      setData(res.data.data);
      setPagination(res.data.pagination);
    };
    getPrdList();
  }, [page, logisticsState]);

  // 將訂單變為已完成
  async function toArrive(orderId) {
    let res = await axios.post(`${API_URL}/order/be/toFinish`, { orderId });
    if (res.data.code === 0) {
      message.success(`${orderId} 已送達`);
    } else {
      message.warning(`${orderId} 未送達`);
    }
  }

  return (
    <div className="container">
      <h4 className="page-type1-area-title">訂單列表</h4>
      <div className="d-flex justify-content-end">
        <div
          className={`logisticsState-btn ${logisticsState === 1 && 'active'}`}
          onClick={() => {
            setLogisticsState(1);
          }}
        >
          待出貨
        </div>
        <div
          className={`logisticsState-btn ${logisticsState === 2 && 'active'}`}
          onClick={() => {
            setLogisticsState(2);
          }}
        >
          已出貨
        </div>
        <div
          className={`logisticsState-btn ${logisticsState === 3 && 'active'}`}
          onClick={() => {
            setLogisticsState(3);
          }}
        >
          已送達
        </div>
        <div
          className={`logisticsState-btn ${logisticsState === 4 && 'active'}`}
          onClick={() => {
            setLogisticsState(4);
          }}
        >
          已取消
        </div>
      </div>

      <div className="be-orderlist-area mt-3">
        <div className="pc-view prdlist-title">
          <div>序號</div>
          <div>訂單編號</div>
          <div>訂購人</div>
          <div>金額</div>
          <div>狀態</div>
          <div>訂單時間</div>
          <div></div>
        </div>
        {data.map((order, i) => {
          return (
            <div className="prdlist-content" key={order.id}>
              <div>{i + (Number(page) - 1) * 8 + 1}</div>
              <div>{order.id} </div>
              <div>{order.orderer_name ? order.orderer_name : order.userName}</div>
              <div>NT$ {order.total}</div>
              <div>{order.logisticsStateName}</div>
              <div>{order.order_time}</div>
              <div>
                <div>
                  <FaEye />
                </div>
                <div>
                  <button
                    className={`btn-none fun-btn`}
                    onClick={() => {
                      toArrive(order.id);
                    }}
                  >
                    送達訂單
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <BePagination pagination={pagination} current={page} setCurrent={setPage} />
      </div>
    </div>
  );
};
export default OrderList;
