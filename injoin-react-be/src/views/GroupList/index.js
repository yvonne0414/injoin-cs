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

const GroupList = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    let getPrdList = async () => {
      let res = await axios.get(`${API_URL}/group/be/list`, { params: { page } });
      setData(res.data.data);
      setPagination(res.data.pagination);
    };
    getPrdList();
  }, [page]);

  return (
    <div className="container">
      <h4 className="page-type1-area-title">揪團列表</h4>
      <div className="d-flex justify-content-end">
        <Link to="/group" className="btn injoin-btn-outline">
          新增官方揪團
        </Link>
      </div>

      <div className="be-prdlist-area mt-3">
        <div className="pc-view prdlist-title">
          <div>序號</div>
          <div>揪團圖片</div>
          <div>揪團名稱</div>
          <div>分類</div>
          <div>揪團狀態</div>
          <div></div>
        </div>
        {data.map((group, i) => {
          return (
            <div className="prdlist-content" key={group.id}>
              <div>{i + (Number(page) - 1) * 8 + 1}</div>
              <div>
                <div className="prd-img">
                  <img src={`${BE_IMAGE_URL}${group.img}`} alt="" className="img-fluid object-cover" />
                </div>
              </div>
              <div>{group.name}</div>
              <div>{group.is_official === 1 ? '官方' : '私人'}</div>
              <div>{group.status_name}</div>
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
export default GroupList;
