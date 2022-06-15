// scss
import './_index.scss';

// icon
import { BsCalendar2Date, BsFillFileEarmarkTextFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillDollarCircle, AiOutlineFieldTime } from 'react-icons/ai';

// component
import FePage1Header from '../../../components/FePage1Header';
import { Link } from 'react-router-dom';

// images
import testimg from '../../../assets/images/fe/groupDetail/groupDetail-img-test.png';

const GroupDetail = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'details',
    titleCn: '揪團資訊',
    menuList: [
      {
        href: '#groupdetail-bolck1',
        name: '活動詳細內容',
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
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="group-detail-info-wraper">
        <div className="container">
          <div className="page-type1-area-title" id="grouplist-bolck1">
            活動詳細內容
          </div>
          <div className="position-relative">
            <div className="group-detail-info-bg-square"></div>
            <div className="p-3 p-md-5">
              <h3 className="ff-cn-main">一起來飲酒囉</h3>
              <hr />
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                <div className="group-detail-info">
                  <div className="group-detail-info-tag">
                    <div>
                      <AiFillDollarCircle />
                      <span className="group-detail-info-content ms-2">NT. 1000</span>
                    </div>
                    <div>
                      <BsPeopleFill />
                      <span className="group-detail-info-content ms-2">5</span>
                    </div>
                    <div>
                      <BsFillBellFill />
                      <span className="group-detail-info-content ms-2">活動報名中</span>
                    </div>
                  </div>
                  <div>
                    <span className="group-detail-info-title">
                      <BsCalendar2Date />
                      <span>活動日期</span>
                    </span>
                    <span className="group-detail-info-content">20220610</span>
                  </div>
                  <div>
                    <span className="group-detail-info-title">
                      <FaMapMarkerAlt />
                      <span>活動地點</span>
                    </span>
                    <span className="group-detail-info-content">台北市萬華區成都路111號1樓</span>
                  </div>
                  <div>
                    <span className="group-detail-info-title">
                      <AiOutlineFieldTime />
                      <span>最終審核日</span>
                    </span>
                    <span className="group-detail-info-content">20220601</span>
                  </div>
                  <div>
                    <span className="group-detail-info-title">
                      <BsFillFileEarmarkTextFill />
                      <span>活動介紹</span>
                    </span>
                    <span className="group-detail-info-content">
                      <p>
                        微醺餐酒交流派對 Wine Tasting Party
                        精選多達15款產自阿根廷,智利,西班牙,義大利,法國,美國的莊園葡萄酒，佐以主廚精心設計的時令阿根廷經典小食，細細品味拉丁風情，給自己一個輕鬆的異國小周末！
                        別再猶豫了，現在就約朋友來Chill一下吧！
                      </p>
                    </span>
                  </div>
                </div>
                <div className="group-detail-img">
                  <img src={testimg} alt="" className="img-fluid object-cover" />
                </div>
              </div>
              <div className="w-100 text-center mt-4">
                <button className="btn btn-none injoin-btn-outline text-gold">報名參加</button>
              </div>
            </div>
          </div>

          <Link to="/group" className="back-page btn btn-none mt-3">
            <div>
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
            </div>
            <span className="ms-3 ff-cn-main">返回揪團列表</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default GroupDetail;
