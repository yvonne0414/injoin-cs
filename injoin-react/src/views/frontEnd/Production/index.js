import './index.scss';
import { userState } from '../../../App';

import { useEffect, useState, useContext } from 'react';

import FePage2Header from '../../../components/FePage2Header';

import FePagination from '../../../components/FePagination';
import PrdCard from '../../../components/PrdCard';

import { Select, Input } from 'antd';
import axios from 'axios';
import EmptyImage from '../../../components/EmptyImage';
import { API_URL } from '../../../utils/config';

import { FaWineBottle } from 'react-icons/fa';
import { TbLemon } from 'react-icons/tb';
import { IoIosWine } from 'react-icons/io';
import { GiSpoon } from 'react-icons/gi';

const Production = () => {
  const { Option } = Select;
  const { Search } = Input;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

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
        icon: <FaWineBottle className=" prd-nav-icon" />,
        name: '基酒',
        href: '',
        cateL: 1,
      },
      {
        icon: <TbLemon className=" prd-nav-icon" />,
        name: '副材料',
        href: '',
        cateL: 2,
      },
      {
        icon: <GiSpoon className=" prd-nav-icon" />,
        name: '工具',
        href: '',
        cateL: 3,
      },
      {
        icon: <IoIosWine className=" prd-nav-icon" />,
        name: '酒杯',
        href: '',
        cateL: 4,
      },
    ],
  };

  const prdSeq = [
    { value: 1, name: '價格低到高' },
    { value: 2, name: '價格高到低' },
    { value: 3, name: '評價低到高' },
    { value: 4, name: '評價高到低' },
  ];

  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = page2HeaderInfo;

  const [prded, setPrded] = useState([]);
  const [category, setCategory] = useState(1);
  // 換頁
  let [page, setPage] = useState(1);
  let [orderById, setOrderById] = useState(1);
  let [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });

  // prdList
  let getprded = async () => {
    let response = await axios.get(`${API_URL}/prd/prdList`, {
      params: {
        category: category,
        page: page,
        orderById: orderById,
        cateM: cateM,
        cateS: cateS,
        keyword: searchWord,
        userId: memberInfo.userId,
      },
    });
    // console.log('res', response.data);
    setPrded(response.data.data);
    setPagination(response.data.pagination);
    // console.log(response.data.pagination);
  };
  // 中分類
  const [cateMList, setCateMList] = useState([]);
  const [cateM, setCateM] = useState(0);
  const [cateSList, setCateSList] = useState([]);
  const [cateS, setCateS] = useState(0);

  let getCateMList = async () => {
    let response = await axios.get(`${API_URL}/prd/cateM`, { params: { cateL: category } });
    setCateMList(response.data.data);
  };
  const handleCateMChange = async (value) => {
    console.log(value);
    setCateM(value);
    setCateS(0);
    let response = await axios.get(`${API_URL}/prd/cateS`, { params: { cateM: value } });
    setCateSList(response.data.data);
  };

  //form 搜尋欄
  const [searchWord, setSearchWord] = useState('');
  // console.log('a', searchWord);
  const search = (searchvalue) => {
    setSearchWord(searchvalue);
  };

  useEffect(() => {
    // 中類別
    getprded();
    getCateMList();
  }, [category, orderById, cateM, cateS, searchWord, page]);

  return (
    <>
      <FePage2Header
        isProduct={isProduct}
        sectionBg={sectionBg}
        subTitle={subTitle}
        majorTitle={majorTitle}
        prdImg={prdImg}
        navs={navs}
        setCateL={setCategory}
        category={category}
        setCateM={setCateM}
        setCateS={setCateS}
        setPage={setPage}
      />
      <div className="prd-content mb-5">
        <div className="container">
          <div className="prd-content-top">
            <div className="prd-total m-view">
              <span>{category === 1 ? '基酒' : category === 2 ? '副材料' : category === 3 ? '工具' : '酒杯'}</span>
              <span>/</span>
              <span>共{pagination.total}件商品</span>
            </div>
            {/* 類別篩選 */}
            <div className="prd-sel-all">
              <div className="prd-sel-1">
                {/* 中類別 */}
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  className="mx-2 px-1 prd-sel-1-major text-start"
                  filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                  onChange={handleCateMChange}
                  value={cateM}
                >
                  <Option value={0}>請選擇</Option>
                  {cateMList.map((v, i) => {
                    return (
                      <Option key={v.id} value={v.id}>
                        {v.name}
                      </Option>
                    );
                  })}
                </Select>
                {/* 小類別 */}
                {category === 1 && (
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    className="mx-2 px-1 prd-sel-1-major  text-start"
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    value={cateS}
                    onChange={(value) => {
                      setCateS(value);
                    }}
                  >
                    <Option value={0}>請選擇</Option>
                    {cateSList.map((v, i) => {
                      return (
                        <Option key={v.id} value={v.id}>
                          {v.name}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </div>
              <div className="prd-sel-2 d-flex align-items-end  mt-1">
                <span>依</span>
                <Select
                  // value={prdSeqI}
                  onChange={(value) => {
                    setOrderById(value);
                  }}
                  className="mx-2 px-2 prd-sel-seq"
                  defaultValue={1}
                >
                  {prdSeq.map((item) => {
                    return (
                      <Option key={item.value} value={item.value}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
                <span>排序</span>
              </div>
            </div>
            <form className="prd-search-form d-flex">
              {/* <input className="prd-search-label form-control form-control-sm me-1" type="search" placeholder="Search"  onChange={(e) => search(e.target.value)} />
              <button className="btn prd-search-btn" type="submit" onClick={search}>
                搜尋
              </button> */}
              <Search placeholder="請輸入關鍵字" size="large" allowClear enterButton="搜尋" onSearch={search} />
            </form>
          </div>
          {pagination.total === 0 ? (
            <EmptyImage discText="無相關商品" />
          ) : (
            <>
              <div className=" prd-card-all row row-cols-2 row-cols-md-4">
                {prded.map((v, i) => {
                  return (
                    <div key={v.id} data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000" className="px-1 px-md-2">
                      <PrdCard data={v} isLike={v.isPrdLike} />
                    </div>
                  );
                })}
              </div>
              <FePagination pagination={pagination} setPage={setPage} toTop={true} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Production;
