import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import vipimg from '../../../assets/images/fe/uservip/vips2pic.png';
import vips3img from '../../../assets/images/fe/uservip/vips3pic.png';
import vips5img from '../../../assets/images/fe/uservip/vips5pic.png';
import UserVipCard from '../../../components/UserInfo/UserVipCard';

import { useEffect } from 'react';

const page1HeaderInfo = {
  titleEn: 'VIP',
  titleCn: '會員等級說明',
  menuList: [
    {
      href: '#grouplist-bolck1',
      name: '如何成為VIP會員',
    },
    {
      href: '#grouplist-bolck2',
      name: '會員等級權益',
    },
    {
      href: '#grouplist-bolck2',
      name: '注意事項',
    },
  ],
  imgs: {
    m: 'uservip.png',
    pc: 'uservip.png',
  },
  pageSelector: {
    isShow: true,
    pageParent: {
      href: '/account/user',
      name: '會員中心',
    },
    selected: '會員等級',
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
const UserVip = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        <section className="uservip-s1" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
          <div className="page-type1-area-title">如何成為VIP會員</div>
          <div className="uservips1-title">需先至官網註冊會員才能累計消費</div>
          <ul className="uservips1-ul">
            <li>新會員：透過推薦連結註冊成為會員，即可獲得購物金100元。</li>
            <li>會員等級制：本公司採會員等級制，只要註冊會員即享有黃金會員之等級福利。</li>
            <li>升級之規則請參考下方會員分級標準。等級共分為 : 黃金、鉑金、鑽石。</li>
          </ul>
          <div className="uservips1-notice">*消費累積,一律依照會員註冊Email累計, 忘記登入或不同人購買, 皆無法合併計算累積*</div>
        </section>
        <section className="uservip-s2">
          <div data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <div className="uservips2-title">會員分級標準</div>
            <div className="uservips2-content">
              <div className="vip-part">
                Injon 會員分為三個級別，以每年年初(1月1日)作為年度結算日基準，並以結算日前一年內，會員在 Injon
                累積的實際消費總金額與有效交易次數作為分級標準。實際消費金額不含運費與取消訂單金額，若訂單套用優惠折抵，實際消費金額以折抵後金額計算。
              </div>
              <div className="vip-part">在成為 Injon 會員後，一年內累積以下實際消費金額與有效交易次數，可獲得相應的會員身份一年：</div>
              <div className="vip-part">黃金會員：累積消費總金額未達 NT$ 5,000。</div>
              <div className="vip-part">鉑金會員：累積消費總金額達 NT$ 5,000。</div>
              <div className="vip-part">鑽石會員：累積消費總金額達 NT$ 7,000。</div>
              <div className="vip-part">會員的身份等級、可享優惠、累積消費總金額都可以在網站的會員中心會員中心進行查詢。</div>
            </div>
          </div>
          <div className="uservips2-img" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <img src={vipimg} alt="" />
          </div>
        </section>
        <seciton className="uservip-s3" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
          <div className="uservips3-img" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <img src={vips3img} alt="" />
          </div>
          <div className="uservips3-content" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <div className="page-type1-area-title">會員等級權益</div>
            <div className="uservips3-title">購物金使用規則</div>
            <ul className="uservip3-ul">
              <li>結帳不限金額皆可使用購物金，單次最高折抵訂單總金額15%</li>
              <li>生日購物金使用期限以一個月為限</li>
              <li>生日優惠券無法和購物金、首購優惠等其他優惠一起使用。</li>
              <li>已成立訂單不得以未使用優惠券為由取消訂單。</li>
              <li>Injon 保有修改、變更或暫停本活動之權利，如有未盡事宜，悉依 Injon 相關規定或解釋辦理，並得隨時補充公告之。</li>
            </ul>
          </div>
        </seciton>
        <section className="uservip-s4" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
          <UserVipCard />
        </section>
        <section className="uservip-s5" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
          <div className="uservips5-contnet">
            <div className="page-type1-area-title">注意事項</div>
            <ul className="uservips5-ul">
              <li>網站消費達到會員升級門檻者，系統將自動為您升級。</li>
              <li>自會員資格升級日起1年為限，於此期間消費達「升級門檻」即可再延續會員資格。</li>
              <li>若於會員資格升級日起1年內，消費未達升級門檻則下一年度無法繼續享有該等級會員相對應之優惠。</li>
              <li>完成註冊會員後請務必填寫正確的基本個人資料，以免影響往後之會員權益。</li>
              <li>生日購物金均將於加入會員次月發送。</li>
            </ul>
          </div>
          <div className="uservips5-img">
            <img src={vips5img} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};
export default UserVip;
