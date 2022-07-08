// scss
import './index.scss';
import React, { useEffect, useState, useContext } from 'react';
import { userState } from '../../../App';
import { Link } from 'react-router-dom';
// import faveritePrdImg1 from '../../../../src/assets/images/fe/faverite/';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';
import LikePrdCard from '../../../components/FeUserLike/UserLike';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { Pagination } from 'antd';
import EmptyImage from '../../../components/EmptyImage';
import BartendingCard from '../../../components/BartendingCard';

const UserLike = () => {
  // userid
  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

  // 設定userid
  let userid = memberInfo.userId;

  // 我的最愛商品
  const [arr, setArr] = useState([]);
  const [prdpagination, setPrdpagination] = useState([]);
  const [prdLikePage, setPrdLikePage] = useState(1);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/userlike/${userid}`, {
        params: {
          page: prdLikePage,
        },
      });
      setArr(response.data.data);
      setPrdpagination(response.data.pagination);
    };
    getUserLike();
  }, [prdLikePage]);

  // 我的最愛調酒
  const [bartdarr, setbartdArr] = useState([]);
  const [bartdpagination, setBartdpagination] = useState([]);
  const [bartdLikePage, setBartdLikePage] = useState(1);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/userlike/bartd/${userid}`, {
        params: {
          page: bartdLikePage,
        },
      });
      setbartdArr(response.data.data);
      setBartdpagination(response.data.pagination);
    };
    getUserLike();
  }, [bartdLikePage]);

  // console.log('arr:', bartdarr);

  const page1HeaderInfo = {
    titleEn: 'Faverite',
    titleCn: '我的收藏',
    menuList: [
      {
        href: '#faverite-bolck1',
        name: '商品收藏',
      },
      {
        href: '#faverite-bolck2',
        name: '酒譜收藏',
      },
    ],
    imgs: {
      m: 'faverite-header.png',
      pc: 'faverite-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/account/user',
        name: '會員中心',
      },
      selected: '我的收藏',
      selectOptions: [
        {
          name: '會員資訊',
          value: '/account/user',
        },
        {
          name: '我的收藏',
          value: '/account/like',
        },
        {
          name: '會員等級',
          value: '/account/vip',
        },
        {
          name: '優惠券',
          value: '/account/coupon',
        },
        {
          name: '我的評價',
          value: '/account/reputation',
        },
        {
          name: '我的訂單',
          value: '/account/order',
        },
        {
          name: '揪團管理',
          value: '/account/group',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  // console.log(arr);
  const apparr = [];
  arr.forEach((e) => {
    // console.log(e);
    let obj = {
      id: e.id,
      likeImg: e.main_img,
      likePrdName: e.name,
      likePrdPrice: `NT ${e.price}`,
      likePrdStar: '4.6',
    };
    apparr.push(obj);
  });
  // console.log("apparr", apparr);

  const likecardArr = [
    {
      id: 1,
      likeImg: 'faverite-product-img-1.png',
      likePrdName: '金黑波本威士忌',
      likePrdPrice: 'NT.550',
      likePrdStar: '4.6',
    },
    {
      id: 2,
      likeImg: 'faverite-product-img-1.png',
      likePrdName: '金黑波本威士忌',
      likePrdPrice: 'NT.550',
      likePrdStar: '4.6',
    },
    {
      id: 3,
      likeImg: 'faverite-product-img-1.png',
      likePrdName: '金黑波本威士忌',
      likePrdPrice: 'NT.550',
      likePrdStar: '4.6',
    },
    {
      id: 4,
      likeImg: 'faverite-product-img-1.png',
      likePrdName: '金黑波本威士忌',
      likePrdPrice: 'NT.550',
      likePrdStar: '4.6',
    },
  ];
  // console.log("likecardArr", likecardArr);

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="page-type1-list-area faverite-list mode-official">
        <div className="container">
          <div className="page-type1-area-title" id="faveRite-bolck1">
            商品收藏
          </div>
        </div>
      </div>
      <div className="user-add-faverite-content" id="faverite-bolck1">
        <div className="container">
          {prdpagination.total === 0 ? (
            <div className="py-5">
              <EmptyImage discText="尚無最愛商品" />
            </div>
          ) : (
            <>
              <div className=" prd-card-all row row-cols-2 row-cols-md-4 ">
                {apparr.map((v, i) => {
                  return <LikePrdCard key={v.id} data={v} isprdLike={true} />;
                })}
              </div>
              <FePagination pagination={prdpagination} setPage={setPrdLikePage} className="pc-view" />
            </>
          )}
        </div>
      </div>

      <div className="page-type1-list-area faverite-list mode-official mt-5">
        <div className="container">
          <div className="page-type1-area-title" id="faveRite-bolck1">
            酒譜收藏
          </div>
        </div>
      </div>
      <div className="user-add-faverite-content" id="faverite-bolck1">
        <div className="container">
          {bartdpagination.total === 0 ? (
            <div className="py-5">
              <EmptyImage discText="尚無最愛酒譜" />
            </div>
          ) : (
            <>
              <div className=" prd-card-all row row-cols-2 row-cols-md-4 ">
                {bartdarr.map((v, i) => {
                  return <BartendingCard key={v.id} data={v} isbartdLike={true} />;
                })}
              </div>
              <FePagination pagination={bartdpagination} setPage={setBartdpagination} className="pc-view" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default UserLike;
