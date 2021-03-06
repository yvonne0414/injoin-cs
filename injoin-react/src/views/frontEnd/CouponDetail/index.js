// scss
import './index.scss';

// component
import FePage1Header from '../../../components/FePage1Header';
import { Link } from 'react-router-dom';

// icon
import { BsTagsFill, BsFillAlarmFill, BsExclamationCircleFill, BsCheckCircleFill, BsCash } from 'react-icons/bs';
// import { AiOutlineFilePpt } from 'react-icons/ai';

// images
// import coupondetailImg from '../../../assets/images/fe/coupondetail/coupon-detail-img-1.png';

import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CouponDetail = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'CouponDetail',
    titleCn: '優惠券詳細',
    menuList: [
      {
        href: '#',
        name: '優惠券詳細',
      },
    ],
    imgs: {
      m: 'coupon-detail-header.png',
      pc: 'coupon-detail-header.png',
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

  const [detail, setDetail] = useState([]);
  const { couponId } = useParams();

  useEffect(() => {
    let getDetail = async () => {
      let response = await axios.get(`http://localhost:3001/api/coupon/couponDetail/${couponId}`);
      setDetail(response.data.detailData[0]);
    };
    getDetail();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="group-detail-info-wraper" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
        <div className="container">
          <div className="page-type1-area-title" id="grouplist-bolck1">
            優惠券詳細內容
          </div>
          <div className="position-relative">
            <div className="coupon-detail-info-bg-square"></div>
            <div className="p-3 p-md-5">
              <h3 className="ff-cn-main">{detail.name}</h3>
              <hr />
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                <div className="coupon-detail-info">
                  <div>
                    <span className="coupon-detail-info-title">
                      <BsTagsFill />
                      <span className="mt-2">優惠券名稱</span>
                    </span>
                    <span className="coupon-detail-info-content mt-2">{detail.name}</span>
                  </div>
                  {/* <div>
                    <span className="coupon-detail-info-title">
                      <BsCalendarCheck />
                      <span>領取期間</span>
                    </span>
                    <span className="coupon-detail-info-content">2022/06/01 ~ 2022/06/30</span>
                  </div> */}
                  <div>
                    <span className="coupon-detail-info-title">
                      <BsCash />
                      <span className="mt-2">折扣金額</span>
                    </span>
                    <span className="coupon-detail-info-content mt-2">${detail.discount}元</span>
                  </div>
                  <div>
                    <span className="coupon-detail-info-title">
                      <BsFillAlarmFill />
                      <span>使用期效</span>
                    </span>
                    <span className="coupon-detail-info-content mt-2">
                      {detail.start_time} ~ {detail.end_time}
                    </span>
                  </div>
                  <div>
                    <span className="coupon-detail-info-title">
                      <BsCheckCircleFill />
                      <span>使用門檻</span>
                    </span>
                    <span className="coupon-detail-info-content mt-2">
                      NT${detail.rule_min} ~ NT${detail.rule_max}
                      <p className="mt-2">購買商品金額滿 NT$ {detail.rule_min} 及可使用，假如優惠券折抵金額超過購買商品總額，則不可使用。限App/官網使用。</p>
                    </span>
                  </div>
                  {/* <div>
                    <span className="coupon-detail-info-title">
                      <span>備註</span>
                    </span>
                    <span className="coupon-detail-info-content "> &nbsp; </span>
                  </div> */}
                  <div>
                    <span className="coupon-detail-info-title">
                      <BsExclamationCircleFill />
                      <span>使用規則</span>
                    </span>
                    <span className="coupon-detail-info-content mt-2">
                      <ol>
                        <li> 每次線上結帳，只能使用一張折價券，門市及櫃點使用則以另行公告為主。 </li>
                        <li>使用折價券折抵後，每項商品金額不可為零。 </li>
                        <li>若結帳商品標註為「不適用折價券」，則該商品不能使用折價券進行折抵。</li>
                        <li>折價券僅能使用一次且不找零，一經使用無法恢復。</li>
                        <li>使用本優惠券的訂單如退貨或取消部分商品，本優惠券將失效不會歸還。</li>
                        <li>本優惠券有使用效期，逾期後則無法使用，且無法恢復。</li>
                        <li>折價券不可折抵運費。</li>
                      </ol>
                    </span>
                  </div>
                  {/* <div>
                    <span className="coupon-detail-info-title">
                      <BsFillFileEarmarkTextFill />
                      <span>注意事項</span>
                    </span>
                    <span className="coupon-detail-info-content">
                      <ul>
                        <li> 領取資格：於活動期間內，首次註冊註冊並完成領取。</li>
                        <li> 一個會員帳號只能領取一次。</li>
                        <li> 每檔折價券活動的數量均為限時限量，領完為止。</li>
                      </ul>
                    </span>
                  </div> */}
                </div>
                {/* <div className="coupon-detail-img mx-auto">
                  <img src={coupondetailImg} alt="" className="img-fluid object-cover" />
                </div> */}
              </div>
            </div>
          </div>

          <Link to="/account/coupon" className="back-page btn btn-none mt-3 mx-auto">
            <div>
              {/* <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg> */}
            </div>
            <div className="w-100 text-center mt-4">
              <button className="btn btn-none injoin-btn-outline text-gold">返回我的優惠券</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CouponDetail;
