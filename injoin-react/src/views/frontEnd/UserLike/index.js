// scss
import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import faveritePrdImg1 from '../../../../src/assets/images/fe/faverite/';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';
import LikePrdCard from '../../../components/FeUserLike/UserLike';

const UserLike = () => {
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
        href: '/',
        name: '會員中心',
      },
      selected: 'faveRite',
      selectOptions: [
        {
          name: '商品收藏',
          value: 'faveRite',
        },
        {
          name: '酒譜收藏',
          value: 'faveRite2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
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
            {likecardArr.map((v, i) => {
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
