import './index.scss';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { API_URL, BE_IMAGE_URL } from '../../../utils/config';
import FePage1Header from '../../../components/FePage1Header';
import Button from 'react-bootstrap/Button';
import iconURL from '../../../assets/images/fe/membercenter/usericon.png';
import { FE_IMAGE_URL } from '../../../utils/config';
import { Link } from 'react-router-dom';
import UserInfoForm from '../../../components/UserInfo/UserInfoForm';
import UserInfoVipLevel from '../../../components/UserInfo/UserInfoVipLevel';
import UserInfoTask from '../../../components/UserInfo/UserInfoTask';
import LogoutPage from './LogoutPage';

import { userState } from '../../../App';

const UserInfo = () => {
  const apple = useContext(userState);
  // console.log("usetInfo:" , apple);
  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const page1HeaderInfo = {
    titleEn: 'Member',
    titleCn: '會員中心',
    menuList: [
      {
        href: '#grouplist-bolck1',
        name: '會員資料',
      },
      {
        href: '#grouplist-bolck2',
        name: '會員等級',
      },
    ],
    imgs: {
      m: 'member-head.png',
      pc: 'member-head.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '首頁',
      },
      selected: 'groupList',
      selectOptions: [
        {
          name: '揪團專區',
          value: 'groupList',
        },
        {
          name: 'test',
          value: 'groupList2',
        },
      ],
    },
  };

  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  return (
    <>
      {apple.islogin ? (
        <div className="container">
          <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
          {/* ===============section2=============== */}
          <section className="member-s1">
            <div className="member-s1-bg"></div>
            <UserInfoForm />
          </section>
          {/* ===============section2=============== */}
          <div className="member-s2 ">
            <UserInfoVipLevel />
          </div>
          {/* ===============section3=============== */}
          <section className="member-s3 ">
            <UserInfoTask />
          </section>
          {/* ===============section4=============== */}
          <section className="member-s4 ">
            <div className="page-type1-area-title" id="">
              詳細說明
            </div>
            <div className="member-directions">
              <div className="direction-title">保級狀態</div>
              <div className="direction-content">
                你上一個結算日 2022/1/1 的級別為黃金會員，下一個結算日 2023/1/1 的級別為黃金會員，尚未符合保級資格。立即累積消費，於下個年度繼續享受尊貴會員專屬的特別禮遇！
              </div>
              <div className="member-directions">
                <div className="direction-title">累積規則</div>
                <ul>
                  <li>消費金額與次數會自動累積到下一個任務。</li>
                  <li>消費金額與次數累積將於結帳日 7 天後生效。</li>
                  <li>年度結算日前 6 日內訂單，消費金額與次數累積將提前於結算日當日生效。</li>
                  <li>若取消交易或退款，該筆消費則不會計算在累積消費金額與次數中。</li>
                </ul>
              </div>
            </div>
            <div className="members4-img">
              <img src={`${FE_IMAGE_URL}/membercenter/memberdirection.png`} alt="" />
            </div>
          </section>
        </div>
      ) : (
        <LogoutPage setisLogin={setisLogin} />
      )}
    </>
  );
};
export default UserInfo;
