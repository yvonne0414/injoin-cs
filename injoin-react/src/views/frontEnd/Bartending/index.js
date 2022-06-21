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
  const majorType = ['類型', '杯型'];
  const subType = [
    ['Cocktail', 'Highball', 'Sour', 'Collins'],
    ['Mojito Glass', 'Cocktail Glass', ' Cocktail Glass', 'Cocktail Glass'],
  ];
  const [majorTypeIndex, setmajorTypeIndex] = useState('');
  const [subTypeIndex, setsubTypeIndex] = useState('');

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
            <div className="Bartending-sel-all">
              <div className="Bartending-sel-1">
                <select
                  value={majorTypeIndex}
                  onChange={(e) => {
                    setmajorTypeIndex(Number(e.target.value));
                    setsubTypeIndex('');
                  }}
                  className=" mx-2 Bartending-sel"
                >
                  <option value="" className="Bartending-sel-option">
                    請選擇類別
                  </option>
                  {majorType.map((v, i) => {
                    return (
                      <option key={i} value={i}>
                        {v}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={subTypeIndex}
                  onChange={(e) => {
                    setsubTypeIndex(e.target.value);
                  }}
                  className="mx-3 Bartending-sel"
                >
                  <option value="" className="Bartending-sel-option">
                    請選擇
                  </option>
                  {majorTypeIndex !== '' &&
                    majorType.index(majorTypeIndex) > -1 &&
                    subType[majorType.index(majorTypeIndex)] &&
                    subType[majorType.index(majorTypeIndex)].map((v, i) => {
                      return (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <form className="Bartending-search-form d-flex">
              <input className="Bartending-search-label form-control form-control-sm me-1" type="search" placeholder="Search" />
              <button className="btn Bartending-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

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
