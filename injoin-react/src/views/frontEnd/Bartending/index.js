import './index.scss';
import { useState, useEffect } from 'react';
import BartendingCard from '../../../components/BartendingCard/index';
import FePage2Header from '../../../components/FePage2Header';
import FePagination from '../../../components/FePagination1';
import axios from 'axios';
import { TbChevronDownLeft } from 'react-icons/tb';
import { IoMdHeartEmpty } from 'react-icons/io';
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

  //篩選 ([])
  //const sampleObj = JSON.parse(sampleJson);
  //const [majorSelIndex, setmajorSelIndex] = useState([]);
  //const [subSelIndex, setsubSelIndex] = useState([]);

  //第一種寫法(-1)
  //大類別
  const [majorSelIndex, setmajorSelIndex] = useState(-1);
  //小類別
  const [subSelIndex, setsubSelIndex] = useState(-1);

  const [majorSel, setMajorSel] = useState([]);
  const [subSel, setSubSel] = useState([]);
  //第二種寫法('')
  // const [majorSelIndex, setmajorSelIndex] = useState('');
  // const [subSelIndex, setsubSelIndex] = useState('');

  //篩選 假資料
  //const majorSel = ['類型', '2'];
  // const subSel = [
  //   ['1', '2', '3'],
  //   ['a', 'b', 'c'],
  //   ['1', '2', '3'],
  //   ['1', '2', '3'],
  // ];

  //form 搜尋欄
  const [searchWord, setSearchWord] = useState('');
  console.log('a', searchWord);
  const search = (searchvalue) => {
    setSearchWord(searchvalue);
    const filterWord = barted.filter((item) => {
      return item.name.includes(searchWord);
    });
    console.log('d', filterWord);
  };

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
  const [bartdType, setBartdType] = useState([]);

  useEffect(() => {
    //bartendingCard
    let getbarted = async () => {
      let response = await axios.get('http://localhost:3001/api/bar');
      setBarted(response.data);
      // console.log('e', response.data);
    };
    getbarted();
    //篩選
    //大類別
    let getMajorSel = async () => {
      let response = await axios.get('http://localhost:3001/api/bar/type');
      setMajorSel(response.data.data.majorSel);
    };
    getMajorSel();
    //小類別
    let getSubSel = async () => {
      let response = await axios.get('http://localhost:3001/api/bar/type');
      setSubSel(response.data.data.subSel);
    };
    getSubSel();
    //bartd type
    // let getBartdType = async () => {
    //   let response = await axios.get('http://localhost:3001/api/bar/bartdtype');
    //   setBartdType(response.data);
    // console.log('B', response.data.typem);
    // console.log('c', response.data.types);
    // };
    // getBartdType();
  }, []);
  //老師
  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/bar/type').then((response) => {
  //     console.log(response);
  //     setMajorSel(response.data.data.maSel);
  //     setSubSel(response.data.data.suSel);
  //   });
  // }, []);
  console.log(barted);
  

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
              <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)} className="Bartending-search-label form-control form-control-sm me-1" />
              <button onClick={search} className="btn Bartending-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          {/* card */}
          <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-2">
            {barted.map((v, i) => {
              // console.log(v);
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
