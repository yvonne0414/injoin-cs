import './index.scss';
import { useState } from 'react';
import BartendingCard from '../../../components/BartendingCard/index';
import FePage2Header from '../../../components/FePage2Header';
import FePagination from '../../../components/FePagination1';
const Bartending = () => {
  const page2HeaderInfo = {
    isProduct: true,
    sectionBg: 'Bartending_background.png',
    subTitle: {
      isShow: false,
      subName: 'Flagship product',
      subContent: '38.0%  750ml',
    },
    majorTitle: {
      contents: ['Have you hugged a', 'bartender today'],
      href: '',
    },

    navs: [
      {
        name: 'Vodks',
        href: '',
      },
      {
        name: 'Rum',
        href: '',
      },
      {
        name: 'Gin',
        href: '',
      },
      {
        name: 'Mixed',
        href: '',
      },
    ],
  };
  //篩選
  const majorSel = ['類型', '杯型'];
  const subSel = [
    ['Cocltail ', 'Highball', 'Sour', 'Collins'],
    ['Mojito Glass', 'Cocktail Glass', ' Cocktail Glass', 'Cocktail Glass'],
  ];

  //第一種寫法(-1)
  // const [majorSelIndex, setmajorSelIndex] = useState(-1);
  // const [subSelIndex, setsubSelIndex] = useState(-1);

  const [majorSelIndex, setmajorSelIndex] = useState('');
  const [subSelIndex, setsubSelIndex] = useState('');

  //form 搜尋欄
  const [bartendingSearch, setBartendingSearch] = useState('');

  //bartendingCard
  const { isProduct, sectionBg, subTitle, majorTitle, BartendingImg, navs } = page2HeaderInfo;
  const bartendcard = [
    {
      id: 1,
      img: 'bartending_1.png',
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 2,
      img: 'bartending_1.png',
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 3,
      img: 'bartending_1.png',
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 4,
      img: 'bartending_1.png',
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
  ];
  return (
    <>
      <FePage2Header isProduct={isProduct} sectionBg={sectionBg} subTitle={subTitle} majorTitle={majorTitle} BartendingImg={BartendingImg} navs={navs} />
      <div className="Bartending-content">
        <div className="container">
          <div className="Bartending-content-top">
            <div className="Bartending-total m-view">
              <span>Rum</span>
              <span>/</span>
              <span>共16種酒譜</span>
            </div>
            {/* 類別篩選 */}
            <div className="Bartending-sel-all">
              <div className="Bartending-sel">
                {/* 大類別 */}
                <select
                  value={majorSelIndex}
                  onChange={(e) => {
                    setmajorSelIndex(e.target.value);
                    setsubSelIndex('');
                  }}
                  className="Bartending-sel-1"
                >
                  <option value="" className="Bartending-sel-option">
                    請選擇類別
                  </option>
                  {majorSel.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    );
                  })}
                </select>
                {/* 小類別 */}
                <select
                  value={subSelIndex}
                  onChange={(e) => {
                    setsubSelIndex(e.target.value);
                  }}
                  className="ms-2 Bartending-sel-2"
                >
                  <option value="" className="Bartending-sel-option">
                    請選擇
                  </option>
                  {majorSelIndex !== '' &&
                    majorSel.indexOf(majorSelIndex) > -1 &&
                    subSel[majorSel.indexOf(majorSelIndex)] &&
                    subSel[majorSel.indexOf(majorSelIndex)].map((v, i) => {
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
            </div>
            {/* 搜尋欄 */}
            <form className="Bartending-search-form d-flex">
              <input type="text" placeholder="Search" value={bartendingSearch} className="Bartending-search-label form-control form-control-sm me-1" />
              <button className="btn Bartending-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          {/* card */}
          <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-2">
            {bartendcard.map((v, i) => {
              return <BartendingCard key={i.id} data={v} />;
            })}
          </div>
          <FePagination className="pc-view" />
        </div>
      </div>
    </>
  );
};
export default Bartending;
