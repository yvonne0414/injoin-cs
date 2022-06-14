import { Link } from 'react-router-dom';
import './index.scss';

import FePage1Header from '../../../components/FePage1Header';

import aboutusImg1 from '../../../assets/images/fe/aboutus/about-us-img-1.png';
import aboutustImg2 from '../../../assets/images/fe/aboutus/about-us-img-2.png';
import aboutusImg3 from '../../../assets/images/fe/aboutus/about-us-img-3.png';
import aboutusImg4 from '../../../assets/images/fe/aboutus/about-us-img-4.png';
import taiwanmap from '../../../assets/images/fe/aboutus/taiwan-map.png';

const AboutUs = () => {
  const page1HeaderInfo = {
    titleEn: 'About Us',
    titleCn: '關於我們',
    menuList: [
      {
        href: '#aboutus-bolck1',
        name: '關於INJION',
      },
      {
        href: '#aboutus-bolck2',
        name: 'INIJON的特色',
      },
      {
        href: '#aboutus-bolck3',
        name: '訂閱我們',
      },
    ],
    imgs: {
      m: 'group-list-header-m.png',
      pc: 'group-list-header.png',
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
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="page-type1-list-area activity-list mode-official position-relative">
        <div className="container">
          <div className="page-type1-area-title" id="aboutus-bolck1">
            關於INJION
          </div>
          <div className="user-add-group-content-text">
            INJON在2023年正式設立網路平台，並於2011年起在台北陸續成立銷售門市，提供酒類相關產品資訊與透明化的價格，買酒網把關產品來歷且保證品質的初衷作為經營宗旨，所有酒類商品均來自各品牌總公司、進口代理商或授權經銷商，我們希望帶給大家最值得信任的來源、最齊全的品項、最實惠的價格以及最周到完善的服務。
          </div>
        </div>
        <div className="box"></div>
        <div className="">
          <img src={aboutusImg1} alt="about-us-img-1" className="about-us-img-1 " />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
