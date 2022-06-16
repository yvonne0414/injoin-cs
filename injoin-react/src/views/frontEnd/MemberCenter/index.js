import React from 'react';
import FePage1Header from '../../../components/FePage1Header';
import './-membercenter.scss';
import Button from 'react-bootstrap/Button';
import iconURL from '../../../assets/images/fe/membercenter/usericon.png';
import { Checkbox, Form, Input } from 'antd';

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
      <div className="contianer">
        {/* <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} /> */}
        <section className="member-s1 d-none">
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
        <section className="member-s2">
          <div className="page-type1-area-title" id="grouplist-bolck2">
            年度升級任務
          </div>
          <div className="memberlevel">
<div className="levelicon"></div>
<div className="levelcontext">
  <div className="leveltitle"></div>
  
</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MemberCenter;
