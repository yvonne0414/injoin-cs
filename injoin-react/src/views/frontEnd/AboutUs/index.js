import { Link } from 'react-router-dom';
import './index.scss';

import FePage1Header from '../../../components/FePage1Header';

import aboutusImg1 from '../../../assets/images/fe/aboutus/about-us-img-1.png';
import aboutusImg2 from '../../../assets/images/fe/aboutus/about-us-img-2.png';
import aboutusImg3 from '../../../assets/images/fe/aboutus/about-us-img-3.png';
// import aboutusImg4 from '../../../assets/images/fe/aboutus/about-us-img-4.png';
// import taiwanmap from '../../../assets/images/fe/aboutus/taiwan-map.png';

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
      // {
      //   href: '#aboutus-bolck3',
      //   name: '訂閱我們',
      // },
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
      <div className="page-type1-list-area position-relative about-us-session1">
        <div className="box-1"></div>
        <div className="container">
          <div className="page-type1-area-title" id="aboutus-bolck1">
            關於INJION
          </div>
          <div className="user-add-aboutus-content-text ">
            INJON在2023年正式設立網路平台，並於2011年起在台北陸續成立銷售門市，提供酒類相關產品資訊與透明化的價格，買酒網把關產品來歷且保證品質的初衷作為經營宗旨，所有酒類商品均來自各品牌總公司、進口代理商或授權經銷商，我們希望帶給大家最值得信任的來源、最齊全的品項、最實惠的價格以及最周到完善的服務。
          </div>
        </div>
        <div className="about-us-img-1 ">
          <img src={aboutusImg1} alt="about-us-img-1" />
        </div>
      </div>
      <div className="sesion2 position-relative">
        <div className="box-2"></div>
        <div className="container about-us-session2-content-wraper">
          <div className="about-us-session2-content-block1">
            <div className="page-type1-area-title" id="aboutus-bolck2">
              INJOIN的特色
            </div>
            <div className="user-add-aboutus-content-text">
              INJON網站及銷售門市提供多元且全方位的酒類飲品資訊與透明化價格，自有車隊結合物流公司的宅配服務，讓您不用出門就能輕鬆選酒，享受迅速送達指定地點的便利與酒類資訊學習互動的樂趣。
              <br />
              INJON總能陪伴在您生活中的每一個時刻：從威士忌、葡萄酒、清酒再到啤酒，有INJON的每個場合都將更美好。
            </div>
          </div>
          <div className="about-us-img-2 about-us-session2-content-block2">
            <img src={aboutusImg2} alt="about-us-img-2" />
          </div>
          <div className="user-add-aboutus-content-text about-us-session2-content-block3">
            不論是居家品酒、朋友聚會小酌、春酒尾牙、私人派對、大小型活動、日常及年節送禮，甚至是專業收藏等用途，皆可依據不同需求提供商品推薦與量身訂做的專案服務；酒類服務上您所希望的，即便是門市未陳列，或是網站中未介紹的品項，我們將竭誠替您向各大酒廠或代理商洽詢，並彙集相關資訊給您分享。
          </div>
          <div className="about-us-img-3 about-us-session2-content-block4">
            <img src={aboutusImg3} alt="about-us-img-3" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
