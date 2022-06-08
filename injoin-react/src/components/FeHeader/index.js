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

function FeHeader() {
  const [visible, setVisible] = useState(false);

  const [ismobile, setIsMobile] = useState(true);

  const handleRWD = () => {
    if (window.innerWidth > 768) setIsMobile(false);
    else setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    handleRWD(); //加入此行

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
            <img src={ismobile ? logoImgA : logoImg} alt="injoinlog" className="img-fluid object-covero" />
          </div>
          <div className="pc-view pc-content">
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
        bodyStyle={{ backgroundColor: '#00000085' }}
        zIndex={10}
      >
        <div className="d-flex flex-column justify-content-between align-items-center flex-md-row justify-content-md-start align-items-center text-white">
          <div className="fe-header-drawer-body-content">
            <ul className="list-unstyled">
              <li>
                <span>01</span>
                <span>首頁</span>
              </li>
            </ul>
          </div>
          <div className="fe-header-drawer-body-content">
            <div>
              <div>Welcome to INJOIN</div>
              <div>
                <div>門市地址</div>
                <div>台北市文山區萬芳路60-18號 (萬芳社區捷運站出口旁）</div>
              </div>
              <div>
                <div>聯絡信箱</div>
                <div>MS@mixology.com.tw </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
export default FeHeader;
