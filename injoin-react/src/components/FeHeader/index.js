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
            <a href="/chen">
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
            <div className="fe-header-drawer-body-content header-menu-wraper">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a href="/">
                  <span></span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a href="/">
                  <span></span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z" />
                  </svg>
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
