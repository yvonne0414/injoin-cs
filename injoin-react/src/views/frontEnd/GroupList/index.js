// component
import FePage1Header from '../../../components/FePage1Header';
import FePage1List from '../../../components/FePage1List';

import './groupList.scss';
import groupListImg1 from '../../../assets/images/fe/groupList/group-list-img-1.png';
import groupListImg2 from '../../../assets/images/fe/groupList/group-list-img-2.png';
import groupListImg3 from '../../../assets/images/fe/groupList/group-list-img-3.png';

const GroupList = () => {
  const page1HeaderInfo = {
    titleEn: 'Activity',
    titleCn: '揪團專區',
    menuList: [
      {
        href: '/',
        name: 'INJION 主辦活動',
      },
      {
        href: '/',
        name: '私人開團活動',
      },
      {
        href: '/',
        name: '我要開團',
      },
      {
        href: '/',
        name: '報名參加',
      },
    ],
    imgs: {
      m: 'group-list-header-m.png',
      pc: 'group-list-header.png',
    },
    pageSelector: {
      isShow: true,
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
      {/* <!-- page-type1-list official --> */}
      <FePage1List />
      {/* <div className="page-type1-list-area activity-list mode-official">
        <div className="container">
          <div className="page-type1-area-title">INJON主辦活動</div>
          <div className="page-type1-list-wraper">
            <div className="page-type1-list-title pc-view">
              <div>活動名稱</div>
              <div>活動時間</div>
              <div>活動地點</div>
              <div>活動狀態</div>
              <div></div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <i>icon</i>
                台北
              </div>
              <div className="list-content_state">活動報名中</div>
              <div className="list-content_btn">
                <a href="/">詳細內容</a>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_activity-name">
                一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~
              </div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <i>icon</i>
                台北
              </div>
              <div className="list-content_state">活動報名中</div>
              <div className="list-content_btn">
                <a href="/">詳細內容</a>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <i>icon</i>
                台北
              </div>
              <div className="list-content_state">活動報名中</div>
              <div className="list-content_btn">
                <a href="/">詳細內容</a>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <i>icon</i>
                台北
              </div>
              <div className="list-content_state">活動報名中</div>
              <div className="list-content_btn">
                <a href="/">詳細內容</a>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <i>icon</i>
                台北
              </div>
              <div className="list-content_state">活動報名中</div>
              <div className="list-content_btn">
                <a href="/">詳細內容</a>
              </div>
            </div>
          </div>
          <div className="page-type1-pagination">
            <button className="page-type1-pagination-btn prev">
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
              <div className="type1-pagination-btn-text">Prev</div>
            </button>
            <div className="page-type1-pagination-pagenum">
              <span>1</span>/<span>4</span>
            </div>
            <button className="page-type1-pagination-btn next active">
              <svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.0317 0.494568L36.5404 10.0776C37.1239 10.6656 37.1202 11.6154 36.5321 12.1989L26.9491 21.7076C26.3611 22.2911 25.4113 22.2874 24.8278 21.6994C24.2443 21.1113 24.248 20.1616 24.8361 19.5781L31.8485 12.62L0.994152 12.4999L1.00583 9.49997L31.8601 9.62003L24.9021 2.60762C24.3186 2.01956 24.3223 1.06982 24.9103 0.486314C25.4984 -0.0971889 26.4482 -0.0934934 27.0317 0.494568Z"
                />
              </svg>
              <div className="type1-pagination-btn-text">Next</div>
            </button>
          </div>
        </div>
      </div> */}
      {/* <!-- page-type1-intro --> */}
      <div className="page-group-intro-area container">
        <div className=" group-list-img-1">
          <img src={groupListImg1} alt="group-list-img-1" className="img-fluid object-cover" />
        </div>
        <div className="page-group-intro-content">
          <div className="page-group-intro-text">
            <div>INJON總能陪伴在您生活中的每一個時刻：從威士忌、葡萄酒、清酒再到啤酒，有INJON的每個場合都將更美好。</div>
          </div>
          <div className="group-list-img-2">
            <img src={groupListImg2} alt="group-list-img-2" className="img-fluid object-cover " />
          </div>
        </div>
      </div>
      <div className="w-100 overflow-hidden mb-5 square-area">
        <div className="bg-square"></div>
        {/* <!-- page-type1-list --> */}
        <div className="container">
          <div className="page-type1-list-area activity-list mode-user py-4">
            <div className="container">
              <div className="page-type1-area-title">私人開團活動</div>
              <div className="page-type1-list-wraper">
                <div className="page-type1-list-title pc-view">
                  <div>活動名稱</div>
                  <div>活動時間</div>
                  <div>活動地點</div>
                  <div>主揪人</div>
                  <div></div>
                </div>
                <div className="page-type1-list-content">
                  <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
                  <div className="list-content_time">2022/01/02</div>
                  <div className="list-content_place">
                    <i>icon</i>
                    台北
                  </div>
                  <div className="list-content_user">黃綠紅</div>
                  <div className="list-content_btn">
                    <a href="/">詳細內容</a>
                  </div>
                </div>
                <div className="page-type1-list-content">
                  <div className="list-content_activity-name">
                    一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~
                  </div>
                  <div className="list-content_time">2022/01/02</div>
                  <div className="list-content_place">
                    <i>icon</i>
                    台北
                  </div>
                  <div className="list-content_user">黃綠紅</div>
                  <div className="list-content_btn">
                    <a href="/">詳細內容</a>
                  </div>
                </div>
                <div className="page-type1-list-content">
                  <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
                  <div className="list-content_time">2022/01/02</div>
                  <div className="list-content_place">
                    <i>icon</i>
                    台北
                  </div>
                  <div className="list-content_user">黃綠紅</div>
                  <div className="list-content_btn">
                    <a href="/">詳細內容</a>
                  </div>
                </div>
                <div className="page-type1-list-content">
                  <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
                  <div className="list-content_time">2022/01/02</div>
                  <div className="list-content_place">
                    <i>icon</i>
                    台北
                  </div>
                  <div className="list-content_user">黃綠紅</div>
                  <div className="list-content_btn">
                    <a href="/">詳細內容</a>
                  </div>
                </div>
                <div className="page-type1-list-content">
                  <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
                  <div className="list-content_time">2022/01/02</div>
                  <div className="list-content_place">
                    <i>icon</i>
                    台北
                  </div>
                  <div className="list-content_user">黃綠紅</div>
                  <div className="list-content_btn">
                    <a href="/">詳細內容</a>
                  </div>
                </div>
              </div>
              <div className="page-type1-pagination">
                <button className="page-type1-pagination-btn prev">
                  <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                    />
                  </svg>
                  <div className="type1-pagination-btn-text">Prev</div>
                </button>
                <div className="page-type1-pagination-pagenum">
                  <span>1</span>/<span>4</span>
                </div>
                <button className="page-type1-pagination-btn next active">
                  <svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.0317 0.494568L36.5404 10.0776C37.1239 10.6656 37.1202 11.6154 36.5321 12.1989L26.9491 21.7076C26.3611 22.2911 25.4113 22.2874 24.8278 21.6994C24.2443 21.1113 24.248 20.1616 24.8361 19.5781L31.8485 12.62L0.994152 12.4999L1.00583 9.49997L31.8601 9.62003L24.9021 2.60762C24.3186 2.01956 24.3223 1.06982 24.9103 0.486314C25.4984 -0.0971889 26.4482 -0.0934934 27.0317 0.494568Z"
                    />
                  </svg>
                  <div className="type1-pagination-btn-text">Next</div>
                </button>
              </div>
            </div>
          </div>
          <div className="user-add-group-area">
            <div className="group-list-img-3 mb-5 mb-md-0">
              <img src={groupListImg3} className="img-fluid object-cover" alt="group-list-img-3" />
            </div>
            <div className="user-add-group-contents ">
              <div className="user-add-group-content">
                <div className="page-type1-area-title m-view">我要開團</div>
                <div className="user-add-group-content-text">
                  掌握思考過程，也就掌握了我要開團。對我個人而言，我要開團不僅僅是一個重大的事件，還可能會改變我的人生。
                  <br />
                  請詳細閱讀我要開團遵循條件，閱讀完，請勾選已詳細閱讀。
                </div>
                <div className="user-add-group-content-btn">
                  <button className=" btn-none">我要開團</button>
                </div>
              </div>
              <div className="user-add-group-content rtl">
                <div className="page-type1-area-title m-view">報名參加</div>
                <div className="user-add-group-content-text">
                  現在就來玩!
                  <br />
                  加入或創造一個你有興趣的聚會吧!不要有壓力!
                </div>
                <div className="user-add-group-content-btn">
                  <button className="btn-none">報名參加</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GroupList;
