// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';

import './groupList.scss';
import groupListImg1 from '../../../assets/images/fe/groupList/group-list-img-1.png';
import groupListImg2 from '../../../assets/images/fe/groupList/group-list-img-2.png';
import groupListImg3 from '../../../assets/images/fe/groupList/group-list-img-3.png';

const GroupList = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'Activity',
    titleCn: '揪團專區',
    menuList: [
      {
        href: '#grouplist-bolck1',
        name: 'INJION 主辦活動',
      },
      {
        href: '#grouplist-bolck2',
        name: '私人開團活動',
      },
      {
        href: '#grouplist-bolck3',
        name: '我要開團',
      },
      {
        href: '#grouplist-bolck4',
        name: '報名參加',
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
      {/* <!-- page-type1-list official --> */}
      <div className="page-type1-list-area activity-list mode-official">
        <div className="container">
          <div className="page-type1-area-title" id="grouplist-bolck1">
            INJON主辦活動
          </div>
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
          <FePagination />
        </div>
      </div>
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
              <div className="page-type1-area-title" id="grouplist-bolck2">
                私人開團活動
              </div>
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
              <FePagination />
            </div>
          </div>
          <div className="user-add-group-area">
            <div className="group-list-img-3 mb-5 mb-md-0">
              <img src={groupListImg3} className="img-fluid object-cover" alt="group-list-img-3" />
            </div>
            <div className="user-add-group-contents ">
              <div className="user-add-group-content" id="grouplist-bolck3">
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
              <div className="user-add-group-content rtl" id="grouplist-bolck4">
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
