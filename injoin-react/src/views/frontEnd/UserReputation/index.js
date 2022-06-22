import './index.scss';

import FePagination from '../../../components/FePagination1';
import reputationimg from '../../../assets/images/fe/userReputation/reputation_1.png';
import FePage1Header from '../../../components/FePage1Header';

import React, { useState } from 'react';
import { Rate } from 'antd';
import ReputationList from '../../../components/FeUserReputation/ReputationList';
import ReputationOrder from '../../../components/FeUserReputation/ReputationOrder';
const UserReputation = () => {
  const page1HeaderInfo = {
    titleEn: 'Reputation',
    titleCn: '會員評價',
    menuList: [
      {
        href: '#user-reputation-bolck1',
        name: '我的評價',
      },
      {
        href: '#user-reputation-bolck2',
        name: '待評價訂單',
      },
    ],
    imgs: {
      m: 'user-reputation-header-m.png',
      pc: 'user-reputation-header.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '首頁',
      },
      selected: 'UserReputation',
      selectOptions: [
        {
          name: '揪團專區',
          value: 'UserReputation',
        },
        {
          name: 'test',
          value: 'UserReputation2',
        },
      ],
    },
  };
  const [pop, setPop] = useState(false);
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  const listarr = [
    {
      id: 1,
      img: 'reputation_1.png',
      time: '2022-03-20',
      name: '金黑波本威士忌',
      commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
      star: [<Rate disabled defaultValue={2} />],
    },
    {
      id: 2,
      img: 'reputation_1.png',
      time: '2022-03-20',
      name: '金黑波本威士忌',
      commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
      star: <Rate disabled defaultValue={2} />,
    },
    {
      id: 3,
      img: 'reputation_1.png',
      time: '2022-03-20',
      name: '金黑波本威士忌',
      commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
      star: <Rate disabled defaultValue={2} />,
    },
    {
      id: 4,
      img: 'reputation_1.png',
      time: '2022-03-20',
      name: '金黑波本威士忌',
      commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
      star: <Rate disabled defaultValue={2} />,
    },
    {
      id: 5,
      img: 'reputation_1.png',
      time: '2022-03-20',
      name: '金黑波本威士忌',
      commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
      star: <Rate disabled defaultValue={2} />,
    },
  ];
  const orderarr = [
    {
      id: 1,
      time: '2022/01/02',
      ordernumber: '20EROVWDCZhV',
    },
    {
      id: 2,
      time: '2022/01/02',
      ordernumber: '20EROVWDCZhV',
    },
    {
      id: 3,
      time: '2022/01/02',
      ordernumber: '20EROVWDCZhV',
    },
    {
      id: 4,
      time: '2022/01/02',
      ordernumber: '20EROVWDCZhV',
    },
    { id: 5, time: '2022/01/02', ordernumber: '20EROVWDCZhV' },
  ];

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      <div className="page-type1-list-area reputation-list mode-reputation">
        <div className="container">
          <div className="page-type1-area-title" id="user-reputation-bolck1">
            我的評價
          </div>
          <div className="reputation-list-wraper ">
            <div className="reputation-list-title pc-view">
              <div className="reputation-title-date">評價日期</div>
              <div className="reputation-title-img">商品圖片</div>
              <div className="reputation-title-name">商品名稱</div>
              <div className="reputation-tittle-commit">評論</div>
              <div></div>
            </div>
            {listarr.map((v, i) => {
              return <ReputationList key={v.id} data={v} />;
            })}
          </div>
        </div>
        <FePagination />
      </div>

      <div className="page-type1-list-area reputation-orderlist mode-reputation-order">
        <div className="container">
          <div className="page-type1-area-title" id="user-reputation-bolck2">
            待評價訂單
          </div>
          <div className="page-type1-list-wraper">
            <div className="page-type1-list-title pc-view">
              <div className="reputation-orderlist-date">日期</div>
              <div></div>
              <div className="reputation-orderlist-number">訂單編號</div>
            </div>
            {orderarr.map((v, i) => {
              return <ReputationOrder key={v.id} data={v} />;
            })}
          </div>
        </div>
        <FePagination />
      </div>

      <div className="reputation-pop ">
        <div className="container">
          <div className="reputation-pop-orderlist">20EROVWDCZhV</div>
          <div className="reputation-pop-content">
            <div className="reputation-pop-time">2022-03-20</div>
            <div className="reputation-pop-img">
              <img src={reputationimg} alt="" />
            </div>
            <div className="reputation-pop-prd">
              <div className="reputation-pop-tittle"> 金黑波本威士忌</div>
              <div className="reputation-pop-star">評價 icon</div>
              <div className="reputation-pop-commit"> 評論</div>
            </div>
            <div className="reputation-pop-commit-context"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserReputation;
