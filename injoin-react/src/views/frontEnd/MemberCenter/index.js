import React from 'react';
import FePage1Header from '../../../components/FePage1Header';
import './-membercenter.scss';
import Button from 'react-bootstrap/Button';
import iconURL from '../../../assets/images/fe/membercenter/usericon.png';
import { FE_IMAGE_URL } from '../../../utils/config';
import { Link } from 'react-router-dom';

const MemberCenter = () => {
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
      isShow: true,
      pageParent: {
        href: '/account/user',
        name: '會員中心',
      },
      selected: '會員資訊',
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
  return (
    <>
      <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        {/* ===============section2=============== */}
        <section className="member-s1">
          <div className="page-type1-area-title">會員資料</div>
          <div className="member-box">
            <nav className="memberbox-nav">
              <ul className="memberbox-ul list-unstyled d-flex row">
                <li className="col-4 col-md-3 active">個人檔案</li>
                <li className="col-4 col-md-3">關於我</li>
                <li className="col-4 col-md-3">更改密碼</li>
              </ul>
            </nav>
            <div className="member-card">
              <div className="member-user">
                <div className="user-img">
                  <img src={iconURL} alt="" />
                </div>
                <Button className="user-button" variant="light">
                  編輯照片
                </Button>
              </div>
              <div className="member-input row">
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="fullname" className="w-25 text-end">
                    真實姓名：
                  </label>
                  <input type="text" name="fullname" className="w-50 user-input" />
                </div>
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="username" className="w-25 text-end">
                    線上暱稱：
                  </label>
                  <input type="text" name="username" className="w-50 user-input" />
                </div>
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="useremail" className="w-25 text-end">
                    電子郵件：
                  </label>
                  <input type="text" name="useremail" className="w-50 user-input" />
                </div>
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="userbirth" className="w-25 text-end">
                    出生日期：
                  </label>
                  <input type="date" name="userbirth" className="w-50 user-input" />
                </div>
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="userphone" className="w-25 text-end">
                    手機號碼：
                  </label>
                  <input type="text" name="userphone" className="w-50 user-input" />
                </div>
                <div className="input-item col-12 my-2 my-md-4">
                  <label htmlFor="userhome" className="w-25 text-end">
                    居家住址：
                  </label>
                  <textarea type="text" name="userhome" className="w-50 user-input" />
                </div>
                <button className="member-submit">更新</button>
              </div>
            </div>
          </div>
        </section>
        {/* ===============section2=============== */}
        <div className="member-s2">
          <div className="members2-icon">
            <img src={`${FE_IMAGE_URL}/membercenter/memberlevel.png`} alt="" />
          </div>
          <div className="members2-content">
            <div className="page-type1-area-title" id="grouplist-bolck2">
              會員等級
            </div>
            <div className="members2-userlevel">黃金會員</div>
            <div className="members2-usersth">根據今年度的累積達到此等級，繼續累積即可升級為鉑金會員，年度結算日為 1/1，會員期限至 2024/1/1</div>
            <div className="members2-levelrules">
              了解詳細
              <Link to="/">
                <span>會員等級說明</span>
              </Link>
            </div>
          </div>
        </div>
        {/* ===============section3=============== */}
        <section className="member-s3">
          <div className="page-type1-area-title" id="#">
            年度升級任務
          </div>
          {[1].map((v, i) => {
            return (
              <div className="memberlevel active">
                <div className="levelicon">
                  <img src={`${FE_IMAGE_URL}/membercenter/memberlevelgold.png`} alt="" />
                </div>
                <div className="levelcontext">
                  <div className="leveltitle">黃金會員</div>
                  <div className="levelstate">已達成</div>
                  <div className="levelcontextm">已升級為黃金會員</div>
                </div>
                <div className="levellink"></div>
              </div>
            );
          })}
          {/*   // memberlevel-card */}
          {[1].map((v, i) => {
            return (
              <div className="memberlevel">
                <div className="levelicon">
                  <img src={`${FE_IMAGE_URL}/membercenter/memberlevelplatinum.png`} alt="" />
                </div>
                <div className="levelcontext">
                  <div className="leveltitle">升級鉑金會員</div>
                  <div className="levelstate">進行中</div>
                  <div className="levelcontextm">
                    達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
                    <hr />
                    達成條件：整年度累積實際消費達 NT$ 5,000，且交易次數達 2 次以上。
                  </div>
                </div>
                <div className="levellink"></div>
              </div>
            );
          })}
          {[1].map((v, i) => {
            return (
              <div className="memberlevel">
                <div className="levelicon">
                  <img src={`${FE_IMAGE_URL}/membercenter/memberleveldim.png`} alt="" />
                </div>
                <div className="levelcontext">
                  <div className="leveltitle">黃金會員</div>
                  <div className="levelstate">已達成</div>
                  <div className="levelcontextm">已升級為黃金會員</div>
                </div>
              </div>
            );
          })}
        </section>
        {/* ===============section4=============== */}
        <section className="member-s4">
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
    </>
  );
};

export default MemberCenter;
