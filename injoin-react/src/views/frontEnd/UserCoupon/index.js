// scss
import './index.scss';
// import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';
import UserCouponList from '../../../components/FeCoupon/UserCoupon';
import EmptyImage from '../../../components/EmptyImage';

//images
import couponListImg1 from '../../../assets/images/fe/couponList/coupon-list-img-1.png';
import couponListImg2 from '../../../assets/images/fe/couponList/coupon-list-img-2.png';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import LogoutPage from '../LogoutPage/LogoutPage.js';
import { userState } from '../../../App';

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
        href: '/account/user',
        name: '會員中心',
      },
      selected: '優惠券',
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

  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);
  // console.log('UserGroup', loginInfo);

  // let [userId, setUserId] = useState(8);
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.member ? loginInfo.member.id : -1,
  });

  useEffect(() => {
    if (loginInfo.member) {
      // console.log('useEffect-loginInfo', loginInfo);
      setMemberInfo({ userId: loginInfo.member.id });
    }
  }, [loginInfo]);

  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });

  let getCoupon = async () => {
    let response = await axios.get(`http://localhost:3001/api/coupon/couponList`, {
      params: {
        userId: memberInfo.userId,
        page: page,
      },
    });
    // console.log('res', response.data);
    // setPrded(response.data.data);
    setPagination(response.data.pagination);
    setData(response.data.data);
    // console.log(response.data.pagination);
  };

  useEffect(() => {
    getCoupon();
  }, [page]);

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
          {pagination.total === 0 ? (
            <EmptyImage discText="無優惠券" />
          ) : (
            <>
              <div className="page-type1-list-wraper">
                <div className="page-type1-list-title pc-view">
                  <div>優惠券代號</div>
                  <div>優惠券名稱</div>
                  <div>開始時間</div>
                  <div>截止時間</div>
                  {/* <div>使用狀況</div> */}
                  <div></div>
                </div>
                {data.map((v, i) => {
                  return <UserCouponList key={v.id} data={v} index={i} pagination={pagination} />;
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

              <FePagination pagination={pagination} setPage={setPage} />
            </>
          )}
          <div className="couponlist-footer mx-auto">
            <div className="conpon-title-sp">單筆訂單限抵一張折價券。</div>
            <div className="conpon-title-sp">取消訂單、辦理整筆退貨或退貨後之保留商品未符合折價券使用條件時，若折價券能仍在使用期限內，將歸還至帳戶中。</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCoupon;
