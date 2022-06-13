// 引用css
import './index.scss';

// 引用fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faHeart, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

// // 引用antd
import { Drawer } from 'antd';
import React, { useState, useEffect } from 'react';

// 引用圖片
import logoImg from '../../assets/images/shared/injoinlogo.png';
import logoImgA from '../../assets/images/shared/injoinlogo-a.png';

const FeHeader = () => {
  const [visible, setVisible] = useState(false);

  const [ismobile, setIsMobile] = useState(true);

  const handleRWD = () => {
    if (window.innerWidth > 768) setIsMobile(false);
    else setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    handleRWD();

    return () => {
      window.removeEventListener('resize', handleRWD);
    };
  }, []);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };
  const menu_arr = ['首頁', '關於我們', '商品列表', '調酒酒譜', '現正揪團'];

  return (
    <>
      <header className="fe-header">
        <div className="container">
          <div className="menu-bar">
            <div className={visible ? 'menu-icon show' : 'menu-icon'} onClick={showDrawer}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="logo-wraper">
            <img src={ismobile ? logoImgA : logoImg} alt="injoinlog" className="img-fluid object-cover" />
          </div>
          <div className="pc-view injoin-side-slogan">
            <span className="header-text">INJOIN YOURLIFE</span>
            <div className="v-line">
              <div></div>
            </div>
          </div>
          <div className="shortcut-btns text-end">
            <a href="/">
              <FontAwesomeIcon icon={faHeart} fixedWidth />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faUser} fixedWidth />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faCartShopping} fixedWidth />
            </a>
            <a href="/" className="pc-view">
              <FontAwesomeIcon icon={faArrowRightToBracket} fixedWidth className="pc-view" />
            </a>
          </div>
        </div>
      </header>
      <Drawer
        title=""
        placement={ismobile ? 'top' : 'left'}
        onClose={onClose}
        visible={visible}
        width={'100%'}
        closable={false}
        headerStyle={{ display: 'none' }}
        height={'100%'}
        bodyStyle={{ backgroundColor: '#000000de' }}
        zIndex={10}
      >
        <div className="drawer-content  d-flex text-white">
          <div className="m-view injoin-side-slogan">
            <span className="header-text">INJOIN YOURLIFE</span>
            <div className="v-line">
              <div></div>
            </div>
          </div>
          <div className="fe-header-drawer-body-content-wrap h-100 py-5">
            <div className="fe-header-drawer-body-content">
              <ul className="list-unstyled">
                {menu_arr.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href="/" className="header-menu">
                        <span className="header-menu-num">0{i}</span>
                        <span className="header-menu-content">{item}</span>
                      </a>
                    </li>
                  );
                })}
                {/* <li className="header-menu">
                  <span className="header-menu-num">00</span>
                  <span className="header-menu-content">首頁</span>
                </li>
                <li className="header-menu">
                  <span className="header-menu-num">01</span>
                  <span className="header-menu-content">關於我們</span>
                </li> */}
              </ul>
            </div>
            <div className="fe-header-drawer-body-content">
              <div>
                <div className="header-slogan">
                  Welcome to
                  <br className="m-view" /> INJOIN
                </div>
                <div className="header-info">
                  <div className="header-info-title">門市地址</div>
                  <div className="header-info-content">台北市文山區萬芳路60-18號 (萬芳社區捷運站出口旁）</div>
                </div>
                <div className="header-info">
                  <div className="header-info-title">聯絡信箱</div>
                  <div className="header-info-content">MS@mixology.com.tw </div>
                </div>
              </div>
              <div className="header-connection">
                <a href="/">
                  <span></span>
                  fb
                </a>
                <a href="/">
                  <span></span>
                  IG
                </a>
                <a href="/">
                  <span></span>
                  line
                </a>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default FeHeader;
