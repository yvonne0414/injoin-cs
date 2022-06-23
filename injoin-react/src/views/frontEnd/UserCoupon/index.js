// scss
import './index.scss';
import { Link } from 'react-router-dom';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';
import UserCouponList from '../../../components/FeCoupon/UserCoupon';

//images
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
      selected: 'couponList',
      selectOptions: [
        {
          name: '優惠券',
          value: 'couponList',
        },
        {
          name: '優惠券使用規則',
          value: 'couponList2',
        },
        {
          name: '優惠券領取',
          value: 'couponList3',
        },
        {
          name: '我的優惠券',
          value: 'couponList4',
        },
      ],
    },
  };

  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  const usercouponArr = [
    {
      id: 1,
      coupomNum: '1001',
      couponName: '註冊禮券折$100',
      couponStart: '2022/05/29',
      couponEnd: '2022/06/29',
      couponStatus: '未使用',
      couponBtn: '詳細內容',
    },
    {
      id: 2,
      coupomNum: '1002',
      couponName: '註冊禮券折$100',
      couponStart: '2022/05/29',
      couponEnd: '2022/06/29',
      couponStatus: '未使用',
      couponBtn: '詳細內容',
    },
    {
      id: 3,
      coupomNum: '1003',
      couponName: '註冊禮券折$100',
      couponStart: '2022/05/29',
      timeof: '~',
      couponEnd: '2022/06/29',
      couponStatus: '已使用',
      couponBtn: '詳細內容',
    },
  ];

  return (
    <>
      {/* header */}
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />

      {/* <!-- page-type1-list official --> */}
      <div className="page-type1-list-area coupon-list mode-official">
        <div className="container">
          <div className="page-type1-area-title" id="couponlist-bolck1">
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
          <div className="page-coupon-intro-area container mb-5">
            <div className="page-coupon-intro-content ">
              <div className="coupon-list-img-2">
                <img src={couponListImg2} alt="coupon-list-img-2" className="img-fluid object-cover " />
              </div>
              <div className="page-coupon-intro-text">
                <div className="page-type1-area-title" id="couponlist-bolck2">
                  優惠券領取
                </div>
                <div className="mt-3">
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

          {/* <section className="container coupon-sec-area mb-5">
            <div className="coupon-sec-content">
              <div className="coupon_num_card">
                <div className="num_card-body mb-3">
                  <div className="ta_num">
                    <span>請輸入您要使用的折價代碼</span>
                  </div>
                  <div>
                    <input type="text" className="form-control ta_num_name" placeholder="優惠券代碼" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="list-content_decide_btn">
                      <Link to="/">取消</Link>
                    </div>

                    <div className="list-content_decide_btn">
                      <Link to="/group/1">確定</Link>
                    </div>
                  </div>
                </div>
                <div className="coupon-sec-content-notify">
                  無論您使用哪種方式領取折價券，請注意：
                  <br />
                  系統都會在您的購物車結帳時，<span>自動帶入</span>已領取的折價券。
                  <br />
                  若您有<span>2張以上</span>折價券，系統會<span>優先選擇即將到期之折價券</span>，但您仍可選擇使用其他折價券。
                </div>
              </div>
            </div>
          </section> */}

          {/* <!-- page-type1-list --> */}
          <div className="page-type1-area-title" id="couponlist-bolck3">
            我的優惠券
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
            {usercouponArr.map((v, i) => {
              return <UserCouponList key={v.id} data={v} />;
            })}
            {/* <div className="page-type1-list-content">
              <div className="list-content_coupon_num">1001</div>
              <div className="list-content_coupon_name">註冊禮券折$100</div>
              <div className="list-content_coupon_start">2022/05/29</div>
              <div className="list-content_coupon_end">2022/06/29</div>
              <div className="list-content_coupon_status">未使用</div>
              <div className="list-content_btn">
                <Link to="/coupon/1">詳細內容</Link>
              </div>
            </div> */}
          </div>

          <FePagination />
          <div className="couponlist-footer">
            <spna>單筆訂單限抵一張折價券。</spna>
            <p>取消訂單、辦理整筆退貨或退貨後之保留商品未符合折價券使用條件時，若折價券能仍在使用期限內，將歸還至帳戶中。</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCoupon;
