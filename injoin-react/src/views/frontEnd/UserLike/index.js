// scss
import './index.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';
import PrdCard from '../../../components/PrdCard';

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
  const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
            {cardArr.map((v, i) => {
              return <PrdCard key={i} />;
            })}
          </div>
        </div>
      </div>

      <FePagination className="pc-view" />
    </>
  );
};
export default UserLike;
