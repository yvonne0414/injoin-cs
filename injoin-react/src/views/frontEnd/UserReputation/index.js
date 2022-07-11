import './index.scss';

import FePagination from '../../../components/FePagination';
import FePage1Header from '../../../components/FePage1Header';
import EmptyImage from '../../../components/EmptyImage';

import { Rate } from 'antd';
import ReputationList from '../../../components/FeUserReputation/ReputationList';
import ReputationOrder from '../../../components/FeUserReputation/ReputationOrder';

import LogoutPage from '../LogoutPage/LogoutPage.js';

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { userState } from '../../../App';

//test
import reputationimg from '../../../assets/images/fe/userReputation/reputation_1.png';
const UserReputation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const page1HeaderInfo = {
    titleEn: 'Reputation',
    titleCn: '會員評價',
    menuList: [
      {
        href: '#user-reputation-bolck1',
        name: '歷史評價',
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
      isShow: true,
      pageParent: {
        href: '/account/user',
        name: '會員中心',
      },
      selected: '我的評價',
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

  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);

  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

  useEffect(() => {
    if (loginInfo.member) {
      // console.log('useEffect-loginInfo', loginInfo);
      setMemberInfo({ userId: loginInfo.member.id });
    }
  }, [loginInfo]);

  let [sendCommit, setCommit] = useState(0);

  // 我評價的商品
  let [ratedList, setRatedList] = useState([]);
  let [ratePagination, setRatePagination] = useState({
    lastPage: 1,
    page: 1,
    total: 0,
  });
  let [ratePage, setRatePage] = useState(1);
  let getRatedList = async () => {
    let res = await axios.get(`${API_URL}/reputation/history`, {
      params: {
        userId: memberInfo.userId,
        page: ratePage,
      },
    });
    // console.log(res.data);
    setRatedList(res.data.data);
    setRatePagination(res.data.pagination);
  };
  useEffect(() => {
    getRatedList();
    // console.log(ratedList);
  }, [ratePage, memberInfo.userId, sendCommit]);

  // 待評價訂單
  let [wRatedList, setWRatedList] = useState([]);
  let [wRatePagination, setWRatePagination] = useState({
    lastPage: 1,
    page: 1,
    total: 0,
  });
  let [wRatePage, setWRatePage] = useState(1);
  let getWRatedList = async () => {
    let res = await axios.get(`${API_URL}/reputation/notreview`, {
      params: {
        userId: memberInfo.userId,
        page: wRatePage,
      },
    });
    // console.log(res.data);
    setWRatedList(res.data.data);
    setWRatePagination(res.data.pagination);
    console.log(res.data.data);
  };

  useEffect(() => {
    getWRatedList();
    // console.log(ratedList);
  }, [wRatePage, memberInfo.userId, sendCommit]);

  return (
    <>
      {loginInfo.islogin ? (
        <>
          <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

          <div className="page-type1-list-area reputation-list mode-reputation py-3 mb-4" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <div className="container">
              <div className="page-type1-area-title" id="user-reputation-bolck1">
                歷史評價
              </div>
              {ratePagination.total === 0 ? (
                <EmptyImage discText="無歷史評價" />
              ) : (
                <>
                  <div className="reputation-list-wraper ">
                    <div className="reputation-list-title pc-view">
                      <div className="reputation-list-date">評價日期</div>
                      <div className="reputation-list-name">商品名稱</div>
                      <div className="reputation-list-commit">評論</div>
                      <div className="reputation-list-img">商品圖片</div>
                    </div>

                    {ratedList.map((v, i) => {
                      return <ReputationList key={i} data={v} />;
                    })}
                  </div>
                </>
              )}
            </div>
            {ratePagination.total !== 0 && <FePagination pagination={ratePagination} setPage={setRatePage} />}
          </div>

          <div className="page-type1-list-area reputation-orderlist mode-reputation-order py-3 mb-4" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <div className="container">
              <div className="page-type1-area-title" id="user-reputation-bolck2">
                待評價訂單
              </div>

              {wRatePagination.total === 0 ? (
                <div className="mx-auto w-100 d-block">
                  <EmptyImage discText="無待評價訂單" />
                </div>
              ) : (
                <div className="page-type1-list-wraper">
                  <div className="page-type1-list-title pc-view">
                    <div className="reputation-orderlist-time">日期</div>
                    <div className="reputation-orderlist-ordernumber">訂單編號</div>
                    <div className="reputation-orderlist-button"></div>
                  </div>
                  {wRatedList.map((v, i) => {
                    return <ReputationOrder key={i} data={v} setCommit={setCommit} />;
                  })}
                </div>
              )}
            </div>
            {wRatePagination.total !== 0 && <FePagination pagination={wRatePagination} setPage={setWRatePage} />}
          </div>
        </>
      ) : (
        <LogoutPage setisLogin={setisLogin} />
      )}
    </>
  );
};
export default UserReputation;
