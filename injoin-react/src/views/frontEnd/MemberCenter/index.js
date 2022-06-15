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
        {/* <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} /> */}
        <section className="member-s1">
          <div className="page-type1-area-title">會員資料</div>
          <div className="member-box">
            <nav className="memberbox-nav">
              <ul className="memberbox-ul list-unstyled d-flex row">
                <li className="col-4 active">個人檔案</li>
                <li className="col-4">關於我</li>
                <li className="col-4">更改密碼</li>
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
              <div className="member-input">
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MemberCenter;
