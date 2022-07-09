import './index.scss';
import { useState, useEffect, useContext } from 'react';
import { userState } from '../../../App';
import BartendingCard from '../../../components/BartendingCard/index';
import FePage2Header from '../../../components/FePage2Header';
import FePagination from '../../../components/FePagination';
import EmptyImage from '../../../components/EmptyImage';
import axios from 'axios';

import { FaGlassMartiniAlt, FaGlassWhiskey } from 'react-icons/fa';
import { Select, Input } from 'antd';

import { API_URL } from '../../../utils/config';

const Bartending = () => {
  const { Option } = Select;
  const { Search } = Input;
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
        icon: <FaGlassMartiniAlt className=" prd-nav-icon" />,
        name: '伏特加',
        href: '',
        cateL: 5,
      },
      {
        icon: <FaGlassWhiskey className=" prd-nav-icon" />,
        name: '蘭姆酒',
        href: '',
        cateL: 6,
      },
      {
        icon: <FaGlassMartiniAlt className=" prd-nav-icon" />,
        name: '白蘭地',
        href: '',
        cateL: 7,
      },
      {
        icon: <FaGlassWhiskey className=" prd-nav-icon" />,
        name: '香甜酒',
        href: '',
        cateL: 8,
      },
      {
        icon: <FaGlassMartiniAlt className=" prd-nav-icon" />,
        name: '琴酒',
        href: '',
        cateL: 9,
      },
      {
        icon: <FaGlassWhiskey className=" prd-nav-icon" />,
        name: '龍舌蘭',
        href: '',
        cateL: 10,
      },
      {
        icon: <FaGlassMartiniAlt className=" prd-nav-icon" />,
        name: '威士忌',
        href: '',
        cateL: 11,
      },
      {
        icon: <FaGlassWhiskey className=" prd-nav-icon" />,
        name: '其他',
        href: '',
        cateL: 12,
      },
    ],
  };
  const { isProduct, sectionBg, subTitle, majorTitle, BartendingImg, navs } = page2HeaderInfo;

  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

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
  // console.log('a', searchWord);
  // const search = (searchvalue) => {
  //   setSearchWord(searchvalue);
  //   const filterWord = barted.filter((item) => {
  //     return item.name.includes(searchWord);
  //   });
  //   console.log('d', filterWord);
  // };

  const search = (searchvalue) => {
    setSearchWord(searchvalue);
  };

  const [barCateLList, setBrCateLList] = useState([]);
  const [barCateL, setBarCateL] = useState(0);
  const [barCateSList, setBarCateSList] = useState([]);
  const [barCateS, setBarCateS] = useState(0);

  let getCateMList = async () => {
    let response = await axios.get(`${API_URL}/bar/cateL`);
    setBrCateLList(response.data.data);
  };
  const handleCateSChange = async (value) => {
    console.log(value);
    setBarCateL(value);
    setBarCateS(0);
    let response = await axios.get(`${API_URL}/bar/cateM`, { params: { cateL: value } });
    setBarCateSList(response.data.data);
  };

  const [barted, setBarted] = useState([]);
  const [bartdType, setBartdType] = useState([]);

  const [category, setCategory] = useState(5);
  // 換頁
  let [page, setPage] = useState(1);
  let [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });

  useEffect(() => {
    //bartendingCard
    let getbarted = async () => {
      let response = await axios.get('http://localhost:3001/api/bar', { params: { category, page, cateS: barCateS, keyword: searchWord, userId: memberInfo.userId } });
      setBarted(response.data.data);
      setPagination(response.data.pagination);
      // console.log('e', response.data);
    };
    getbarted();
    //篩選
    // //大類別
    // let getMajorSel = async () => {
    //   let response = await axios.get('http://localhost:3001/api/bar/type');
    //   setMajorSel(response.data.data.majorSel);
    // };
    // getMajorSel();
    // //小類別
    // let getSubSel = async () => {
    //   let response = await axios.get('http://localhost:3001/api/bar/type');
    //   setSubSel(response.data.data.subSel);
    // };
    // getSubSel();
    //bartd type
    // let getBartdType = async () => {
    //   let response = await axios.get('http://localhost:3001/api/bar/bartdtype');
    //   setBartdType(response.data);
    // console.log('B', response.data.typem);
    // console.log('c', response.data.types);
    // };
    // getBartdType();

    getCateMList();
  }, [category, page, barCateS, searchWord]);
  //老師
  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/bar/type').then((response) => {
  //     console.log(response);
  //     setMajorSel(response.data.data.maSel);
  //     setSubSel(response.data.data.suSel);
  //   });
  // }, []);
  // const [baartdL, setBatedL] = useState(0);
  // console.log(barted);
  let [nowCate, setNowCate] = useState('伏特加');
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (category) {
      case 5:
        setNowCate('伏特加');
        break;
      case 6:
        setNowCate('蘭姆酒');
        break;
      case 7:
        setNowCate('白蘭地');
        break;
      case 8:
        setNowCate('香甜酒');
        break;
      case 9:
        setNowCate('琴酒');
        break;
      case 10:
        setNowCate('龍舌蘭');
        break;
      case 11:
        setNowCate('威士忌');
        break;
      case 12:
        setNowCate('其他');
        break;
    }
  }, [category]);

  //console.log('a', barted);
  return (
    <>
      <FePage2Header
        isProduct={isProduct}
        sectionBg={sectionBg}
        subTitle={subTitle}
        majorTitle={majorTitle}
        BartendingImg={BartendingImg}
        navs={navs}
        setCateL={setCategory}
        category={category}
        setCateM={setBarCateL}
        setCateS={setBarCateS}
      />
      <div className="Bartending-content pb-5 mb-5">
        <div className="container">
          <div className="Bartending-content-top">
            <div className="Bartending-total m-view">
              <span>{nowCate}</span>
              <span>/</span>
              <span>共{pagination.total}種酒譜</span>
            </div>
            {/* 類別篩選 */}
            <div className="Bartending-sel-all">
              <div className="Bartending-sel">
                {/* 大類別 */}
                <Select value={barCateL} onChange={handleCateSChange} className="Bartending-sel-1 me-3">
                  <Option value={0} className="Bartending-sel-option">
                    請選擇
                  </Option>
                  {barCateLList.map((item, i) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
                {/* 小類別 */}
                <Select
                  value={barCateS}
                  className="Bartending-sel-1"
                  onChange={(value) => {
                    setBarCateS(value);
                  }}
                >
                  <Option value={0} className="Bartending-sel-option">
                    請選擇
                  </Option>
                  {barCateSList.map((item, i) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>
            {/* 搜尋欄 */}
            <form className="Bartending-search-form d-flex mx-0">
              <Search placeholder="請輸入關鍵字" size="large" allowClear enterButton="搜尋" onSearch={search} />
            </form>
          </div>
          {pagination.total === 0 ? (
            <div className="mt-5 pt-5 ">
              <EmptyImage discText="無相關酒譜" />
            </div>
          ) : (
            <>
              <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-2">
                {barted.map((v, i) => {
                  // console.log(v);
                  return <BartendingCard key={v.id} data={v} isbartdLike={v.isLike} />;
                })}
              </div>
              <FePagination pagination={pagination} setPage={setPage} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Bartending;
