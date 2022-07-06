import { FaEye } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import logo from '../../assets/images/shared/injoinlogo.png';
import './index.scss';

import { API_URL, BE_IMAGE_URL } from '../../utils/config';
import BePagination from '../../components/BePagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CouponList = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    let getPrdList = async () => {
      let res = await axios.get(`${API_URL}/coupon/be/list`, { params: { page } });
      setData(res.data.data);
      setPagination(res.data.pagination);
    };
    getPrdList();
  }, [page]);

  return (
    <div className="container">
      <h4 className="page-type1-area-title">優惠券列表</h4>
      <div className="d-flex justify-content-end">
        <Link to="/coupon" className="btn injoin-btn-outline">
          新增優惠券
        </Link>
      </div>

      <div className="be-prdlist-area mt-3">
        <div className="pc-view prdlist-title">
          <div>序號</div>
          <div>折扣</div>
          <div>優惠券名稱</div>
          <div>開始時間</div>
          <div>結束時間</div>
          <div></div>
        </div>
        {data.map((coupon, i) => {
          return (
            <div className="prdlist-content" key={coupon.id}>
              <div>{i + (Number(page) - 1) * 8 + 1}</div>
              <div>{coupon.coupon_cate === 1 ? `${coupon.discount} 元` : `${coupon.discount} 折`} </div>
              <div>{coupon.name}</div>
              <div>{coupon.start_time}</div>
              <div>{coupon.end_time}</div>
              <div>
                <div>
                  <FaEye />
                </div>
                <div>
                  <AiFillEdit />
                </div>
                <div>
                  <HiOutlineTrash />
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
export default CouponList;
