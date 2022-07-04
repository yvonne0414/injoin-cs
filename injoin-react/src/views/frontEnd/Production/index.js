import './index.scss';
import { useState, useEffect } from 'react';

import FePage2Header from '../../../components/FePage2Header';

import FePagination from '../../../components/FePagination';
import PrdCard from '../../../components/PrdCard';

import axios from 'axios';

const Production = () => {
  const page2HeaderInfo = {
    isProduct: true,
    sectionBg: 'prolist_background.png',
    subTitle: {
      isShow: true,
      subName: 'Flagship product',
      subContent: '38.0%  750ml',
    },
    majorTitle: {
      contents: ['About Don Julio', 'Blanco Tequila'],
      href: '',
    },
    prdImg: 'Flagship_product.png',
    navs: [
      {
        name: '基酒',
        href: '',
      },
      {
        name: '副材料',
        href: '',
      },
      {
        name: '工具',
        href: '',
      },
      {
        name: '酒杯',
        href: '',
      },
    ],
  };

  // const majorPrdSel = ['伏特加', '蘭姆酒', '白蘭地'];
  // const subPrdSel = [
  //   ['基礎伏特加', '頂級伏特加', '特殊伏特加'],
  //   ['白蘭姆酒', '牙買加蘭姆酒', '高濃度蘭姆酒'],
  //   ['干邑白蘭地', '其他水果白蘭地', '皮斯可'],
  // ];
  const prdSeq = ['價格低到高', '評價高到低', '評價低到高'];

  // const [majorPrdSelI, setMajorPrdSelI] = useState('');
  // const [subPrdSelI, setSubPrdSelI] = useState('');
  const [prdSeqI, setPrdSeqI] = useState('');

  //大類別
  const [majorPrdSelIndex, setmajorPrdSelIndex] = useState(-1);
  //小類別
  const [subPrdSelIndex, setsubPrdSelIndex] = useState(-1);

  const [majorPrdSel, setmajorPrdSel] = useState([]);
  const [subPrdSel, setsubPrdSel] = useState([]);

  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = page2HeaderInfo;

  // const cardArr = [
  //   {
  //     id: 1,
  //     name: '金黑波本威士忌',
  //     price: 'NT.550 ',
  //     rating: ' 4.6',
  //   },
  //   {
  //     id: 2,
  //     name: '金黑波本威士忌',
  //     price: 'NT.550 ',
  //     rating: ' 4.6',
  //   },
  //   {
  //     id: 3,
  //     name: '金黑波本威士忌',
  //     price: 'NT.550 ',
  //     rating: ' 4.6',
  //   },
  //   {
  //     id: 4,
  //     name: '金黑波本威士忌',
  //     price: 'NT.550 ',
  //     rating: ' 4.6',
  //   },
  // ];

  const [prded, setPrded] = useState([]);
  const [category, setCategory] = useState(1);
  // 換頁
  let [page, setPage] = useState(1);
  let [pagination, setPagination] = useState({
    total: 1,
    page: 1,
    lastPage: 1,
  });

  // prdList
  let getprded = async () => {
    let response = await axios.get('http://localhost:3001/api/prd/prdList', {
      params: {
        category: category,
        page: page,
      },
    });
    // console.log('res', response.data);
    setPrded(response.data.data);
    setPagination(response.data.pagination);
    // console.log(response.data.pagination);
  };

  useEffect(() => {
    // 大類別
    let getmajorPrdSel = async () => {
      let response = await axios.get('http://localhost:3001/api/prd/prdCate');
      setmajorPrdSel(response.data.majorPrdSel);
      // console.log(response.data.majorPrdSel);
    };
    getmajorPrdSel();
    // 小類別
    let getsubPrdSel = async () => {
      let response = await axios.get('http://localhost:3001/api/prd/prdCate');
      setsubPrdSel(response.data.subPrdSel);
    };
    getsubPrdSel();
    getprded();
  }, []);

  return (
    <>
      <FePage2Header isProduct={isProduct} sectionBg={sectionBg} subTitle={subTitle} majorTitle={majorTitle} prdImg={prdImg} navs={navs} />
      <div className="prd-content">
        <div className="container">
          <div className="prd-content-top">
            <div className="prd-total m-view">
              <span>副材料</span>
              <span>/</span>
              <span>共16件商品</span>
            </div>
            {/* 類別篩選 */}
            <div className="prd-sel-all">
              <div className="prd-sel-1">
                {/* 大類別 */}
                <select
                  value={majorPrdSelIndex}
                  onChange={(e) => {
                    setmajorPrdSelIndex(e.target.value);
                    setsubPrdSelIndex('');
                  }}
                  className="mx-2 px-1 prd-sel-1-major"
                >
                  <option value="" className="prd-sel-option">
                    請選擇類別
                  </option>
                  {majorPrdSel.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    );
                  })}
                </select>
                {/* 中類別 */}
                <select
                  value={subPrdSelIndex}
                  onChange={(e) => {
                    setsubPrdSelIndex(e.target.value);
                  }}
                  className="px-2 prd-sel-1-minor"
                >
                  <option value="" className="prd-sel-option">
                    請選擇
                  </option>
                  {majorPrdSelIndex !== '' &&
                    majorPrdSel.indexOf(majorPrdSelIndex) > -1 &&
                    subPrdSel[majorPrdSel.indexOf(majorPrdSelIndex)] &&
                    subPrdSel[majorPrdSel.indexOf(majorPrdSelIndex)].map((v, i) => {
                      return (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      );
                    })}
                  {/* 第一種寫法(-1) */}
                  {/* {majorSelIndex !== '' &&
                    majorSel.index(majorSelIndex) > -1 &&
                    subSel[majorSel.index(majorSelIndex)] &&
                    subSel[majorSel.index(majorSelIndex)].map((v, i) => {
                      return (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      );
                    })} */}
                </select>
              </div>
              <div className="prd-sel-2 d-flex align-items-end  mt-1">
                <span>依</span>
                <select
                  value={prdSeqI}
                  onChange={(e) => {
                    setPrdSeqI(e.target.value);
                  }}
                  className="mx-2 px-2 prd-sel-seq"
                >
                  <option value="" className="prd-sel-option">
                    價格高到低
                  </option>
                  {prdSeq.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    );
                  })}
                </select>
                <span>排序</span>
              </div>
            </div>
            <form className="prd-search-form d-flex">
              <input className="prd-search-label form-control form-control-sm me-1" type="search" placeholder="Search" />
              <button className="btn prd-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          <div className=" prd-card-all row row-cols-2 row-cols-md-4">
            {prded.map((v, i) => {
              return <PrdCard key={v.id} data={v} />;
            })}
          </div>
          <FePagination pagination={pagination} setPage={setPage} />
        </div>
      </div>
    </>
  );
};
export default Production;
