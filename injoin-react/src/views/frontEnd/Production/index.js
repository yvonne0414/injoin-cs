import React, { useState } from 'react';
import './index.scss';

import FePage2Header from '../../../components/FePage2Header';

import FePagination from '../../../components/FePagination1';
import PrdCard from '../../../components/PrdCard';

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

  const majorPrdSel = ['伏特加', '蘭姆酒', '白蘭地'];
  const subPrdSel = [
    ['基礎伏特加', '頂級伏特加', '特殊伏特加'],
    ['白蘭姆酒', '牙買加蘭姆酒', '高濃度蘭姆酒'],
    ['干邑白蘭地', '其他水果白蘭地', '皮斯可'],
  ];

  const [majorPrdSelI, setMajorPrdSelI] = useState('');
  const [subPrdSelI, setSubPrdSelI] = useState('');

  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = page2HeaderInfo;
  const cardArr = [
    {
      id: 1,
      name: '金黑波本威士忌',
      price: 'NT.550 ',
      rating: ' 4.6',
    },
    {
      id: 2,
      name: '金黑波本威士忌',
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
  ];
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
            <div className="prd-sel-all">
              <div className="prd-sel-1">
                <select
                  value={majorPrdSelI}
                  onChange={(e) => {
                    setMajorPrdSelI(e.target.value);
                    setSubPrdSelI('');
                  }}
                  className="mx-2 px-2 prd-sel"
                >
                  {/* <optgroup labal="基酒種類"></optgroup> */}
                  <option value="" className="prd-sel-option">
                    請選擇
                  </option>
                  {majorPrdSel.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={subPrdSelI}
                  onChange={(e) => {
                    setSubPrdSelI(e.target.value);
                  }}
                  className=" px-2 prd-sel"
                >
                  <option value="" className="prd-sel-option">
                    請選擇
                  </option>
                  {majorPrdSelI !== '' &&
                    majorPrdSel.indexOf(majorPrdSelI) > -1 &&
                    subPrdSel[majorPrdSel.indexOf(majorPrdSelI)] &&
                    subPrdSel[majorPrdSel.indexOf(majorPrdSelI)].map((v, i) => {
                      return (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="prd-sel-2 d-flex align-items-end  mt-1">
                <span>依</span>
                <select value="" className="mx-1 px-2 prd-sel">
                  <option value="" className="prd-sel-option">
                    價格高到低
                  </option>
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

          <div class=" prd-card-all row row-cols-2 row-cols-md-4">
            {cardArr.map((v, i) => {
              return <PrdCard key={v.id} data={v} />;
            })}
          </div>
          <FePagination className="pc-view" />
        </div>
      </div>
    </>
  );
};
export default Production;
