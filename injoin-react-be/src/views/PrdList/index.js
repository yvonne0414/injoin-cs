import { FaEye } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import logo from '../../assets/images/shared/injoinlogo.png';
import './index.scss';

import BePagination from '../../components/BePagination';
import { useState } from 'react';

const PrdList = () => {
  const prdlist = {
    pagination: {
      totalPage: 5,
      currentPage: 1,
      total: 20,
    },
    data: [
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
      {
        prdnum: 'abc123',
        name: '好累呦ＱＱ',
        prdImg: 'injoinlogo.png',
        price: 1234,
        status: 1,
        statusName: '上架中',
      },
    ],
  };
  const [current, setCurrent] = useState(prdlist.pagination.currentPage);

  return (
    <div className="container">
      <h4 className="page-type1-area-title">商品列表</h4>
      <div className="d-flex justify-content-end">
        <button className="btn injoin-btn-outline">新增商品</button>
      </div>

      <div className="be-prdlist-area mt-3">
        <div className="pc-view prdlist-title">
          <div>商品編號</div>
          <div>商品圖片</div>
          <div>商品名稱</div>
          <div>商品價格</div>
          <div>商品狀態</div>
          <div></div>
        </div>
        {prdlist.data.map((prd) => {
          return (
            <div className="prdlist-content" key={prd.prdnum}>
              <div>{prd.prdnum}</div>
              <div>
                <div className="prd-img">
                  <img src={require(`../../assets/images/shared/${prd.prdImg}`)} alt="" className="img-fluid object-cover" />
                </div>
              </div>
              <div>{prd.name}</div>
              <div>NT. {prd.price}</div>
              <div>{prd.statusName}</div>
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
        <BePagination pagination={prdlist.pagination} current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
};
export default PrdList;
