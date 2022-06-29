import './index.scss';
import { useState, useEffect } from 'react';
import BartendingCard from '../../../components/BartendingCard/index';
import FePage2Header from '../../../components/FePage2Header';
import FePagination from '../../../components/FePagination1';
import axios from 'axios';
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
  const { isProduct, sectionBg, subTitle, majorTitle, BartendingImg, navs } = page2HeaderInfo;

  //篩選
  //大類別
  const [majorSelIndex, setmajorSelIndex] = useState([]);
  //小類別
  const [subSelIndex, setsubSelIndex] = useState([]);

  //第一種寫法(-1)
  // const [majorSelIndex, setmajorSelIndex] = useState(-1);
  // const [subSelIndex, setsubSelIndex] = useState(-1);
  //第二種寫法('')
  // const [majorSelIndex, setmajorSelIndex] = useState('');
  // const [subSelIndex, setsubSelIndex] = useState('');

  //篩選 假資料
  // const majorSel = ['類型', '杯型'];
  const subSel = [
    ['Cocltail ', 'Highball', 'Sour', 'Collins'],
    ['Mojito Glass', 'Champagne Saucer', ' Cocktail Glass', 'Cocktail Glass'],
  ];
  let majorSel = [];
  let subSel1 = [];
  // console.log('maj', majorSelIndex);
  console.log('subSel1', subSelIndex);
  majorSelIndex.map((v, i) => {
    if (v.level === 1) {
      // console.log('aa', v);
      majorSel.push(v.name);
    }
  });
  // subSelIndex.map((v, i) => {
  //   if (v.level === 2) {
  //     subSel.push(v.name);
  //   }
  // });
  // console.log('majorSel', majorSel);

  //form 搜尋欄

  // bartendindcard 假資料
  // const bartendcard = [
  //   {
  //     id: 1,
  //     img: 'bartending_1.png',
  //     name: '粉紅松鼠',
  //     material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  //   },
  //   {
  //     id: 2,
  //     img: 'bartending_1.png',
  //     name: '粉紅松鼠',
  //     material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  //   },
  //   {
  //     id: 3,
  //     img: 'bartending_1.png',
  //     name: '粉紅松鼠',
  //     material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  //   },
  //   {
  //     id: 4,
  //     img: 'bartending_1.png',
  //     name: '粉紅松鼠',
  //     material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
  //   },
  // ];
  const [barted, setBarted] = useState([]);

  useEffect(() => {
    //bartendingCard
    let getbarted = async () => {
      let response = await axios.get('http://localhost:3001/api/bar');
      // console.log('res', response.data);
      setBarted(response.data);
    };
    getbarted();
    //篩選大類別
    let getmajorSelIndex = async () => {
      let response = await axios.get('http://localhost:3001/api/bar/typem');
      // console.log('res', response.data);
      setmajorSelIndex(response.data);
    };
    getmajorSelIndex();
    //篩選小類別
    let getsubSelIndex = async () => {
      let response = await axios.get('http://localhost:3001/api/bar/typem');
      // console.log('res', response.data);
      setsubSelIndex(response.data);
    };
    getsubSelIndex();
  }, []);

  // console.log('sp', barted);
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
              <input type="text" placeholder="Search" className="Bartending-search-label form-control form-control-sm me-1" />
              <button className="btn Bartending-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          {/* card */}
          <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-2">
            {barted.map((v, i) => {
              console.log(v);
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
