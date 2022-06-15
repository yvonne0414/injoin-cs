// scss
import './index.scss';

import { Link } from 'react-router-dom';
// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';

import couponListImg1 from '../../../assets/images/fe/couponList/coupon-list-img-1.png';
import couponListImg2 from '../../../assets/images/fe/couponList/coupon-list-img-2.png';

const UserCoupon = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'Coupon',
    titleCn: '優惠券',
    menuList: [
      {
        href: '#couponlist-bolck1',
        name: '優惠券使用規則',
      },
      {
        href: '#couponlist-bolck2',
        name: '優惠券領取',
      },
      {
        href: '#couponlist-bolck3',
        name: '我的優惠券',
      },
      {
        href: '#couponlist-bolck4',
        name: '',
      },
    ],
    imgs: {
      m: 'coupon-list-header.png',
      pc: 'coupon-list-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/',
        name: '會員中心',
      },
      selected: 'groupList',
      selectOptions: [
        {
          name: '優惠券',
          value: 'groupList',
        },
        {
          name: '優惠券使用規則',
          value: 'groupList2',
        },
        {
          name: '優惠券領取',
          value: 'groupList3',
        },
        {
          name: '我的優惠券',
          value: 'groupList4',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      {/* <!-- page-type1-list official --> */}
      <div className="page-type1-list-area activity-list mode-official">
        <div className="container">
          <div className="page-type1-area-title" id="grouplist-bolck1">
            優惠券使用規則
          </div>
          <div className="d-flex mb-5">
            <div className="coupon-direction container">
              <ol>
                <li className="coupon-item">請留意您的折扣碼使用期限。</li>
                <li className="coupon-item">每次結帳，只能使用一張折價券。</li>
                <li className="coupon-item">折價券不可折抵運費。</li>
                <li className="coupon-item">折價券可與商店折扣活動併用，訂單會以折價券優先折抵，再計算折扣活動。</li>
                <li className="coupon-item">折價券有使用期限，到期時會自動於「我的折價券」中刪除。</li>
                <li className="coupon-item">
                  折價券<span>最多只能折抵該次購買總金額的30%</span>。(依每個折價劵使用規則而訂)
                </li>
                <li className="coupon-item">
                  折價券僅能使用一次且<span>不找零</span>，一經使用無法恢復。
                </li>
                <li className="coupon-item">
                  使用折價券的訂單<span>如取消或退貨，折價券將自動失效不會歸還</span>。
                </li>
              </ol>
            </div>

            <div className="coupon-item-intro-area pc-view">
              <div className="coupon-list-img-1 ">
                <img src={couponListImg1} alt="coupon-list-img-1" className="img-fluid object-cover" />
              </div>
            </div>
          </div>

          {/* <!-- page-type1-intro --> */}
          <div className="page-coupon-intro-area container">
            <div className="page-coupon-intro-content ">
              <div className="coupon-list-img-2">
                <img src={couponListImg2} alt="coupon-list-img-2" className="img-fluid object-cover " />
              </div>
              <div className="page-coupon-intro-text">
                <div className="page-type1-area-title" id="couponlist-bolck2">
                  優惠券領取
                </div>
                <div class="mt-3">
                  <ol>
                    <li> 您可以在「優惠券」中找到「優惠券領取」。</li>
                    <li>進入「輸入折價券(即折扣代碼)」。</li>
                    <li> 接著輸入您的折扣代碼，應對的折價券就會儲存在您的帳戶中。</li>
                    <li>在購物車裡點選「使用優惠券」，方能使用</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section class="container coupon-sec-area mb-5">
            <div class="coupon-sec-content">box</div>
          </section>

          {/* <!-- page-type1-list --> */}
          <div className="page-type1-area-title" id="grouplist-bolck1">
            已完成
          </div>
          <div className="page-type1-list-wraper">
            <div className="page-type1-list-title pc-view">
              <div>優惠代號</div>
              <div>優惠名稱</div>
              <div>開始時間</div>
              <div>截止時間</div>
              <div>使用狀況</div>
              <div></div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
          </div>

          <FePagination />
        </div>
      </div>
    </>
  );
};
export default UserCoupon;
