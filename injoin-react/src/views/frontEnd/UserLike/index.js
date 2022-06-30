// scss
import './index.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import faveritePrdImg1 from '../../../../src/assets/images/fe/faverite/';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';
import LikePrdCard from '../../../components/FeUserLike/UserLike';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

const UserLike = () => {
  // userid
  let userid = 1;
  const [arr, setArr] = useState([]);
  const [userlike, setUserlike] = useState([]);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('userLike')));
    // setArr(JSON.parse(localStorage.getItem('userLike')));
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/userlike/${userid}`);

      console.log("app",response.data);
      setArr(response.data.data);
    };
    getUserLike();
  }, []);
  // console.log('arr:', arr);

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
          name: '評價',
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
  console.log(arr);
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
          <div className=" prd-card-all row row-cols-2 row-cols-md-4 ">
            {apparr.map((v, i) => {
              return <LikePrdCard key={v.id} data={v} />;
            })}
          </div>
        </div>
      </div>

      <FePagination className="pc-view" />
    </>
  );
};
export default UserLike;
