// scss
import './index.scss';

import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';

// img
import groupListImg1 from '../../../assets/images/fe/groupList/group-list-img-1.png';
import groupListImg2 from '../../../assets/images/fe/groupList/group-list-img-2.png';
import groupListImg3 from '../../../assets/images/fe/groupList/group-list-img-3.png';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

const GroupList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //page
  let [officialPage, setOfficialPage] = useState(1);
  let [privatePage, setPrivatePage] = useState(1);

  // 官方
  let [officialList, setOfficialList] = useState({
    pagination: {
      total: 1,
      page: 1,
      lastPage: 1,
    },
    data: [],
  });
  useEffect(() => {
    let getOfficialList = async () => {
      let response = await axios.get(API_URL + '/group/list', {
        params: {
          groupCate: 1,
          page: officialPage,
        },
      });
      setOfficialList(response.data);
      // console.log(officialList.pagination.lastPage);
    };
    getOfficialList();
  }, [officialPage]);

  // 私人
  let [privateList, setPrivateList] = useState({
    pagination: {
      total: 0,
      page: 1,
      lastPage: 1,
    },
    data: [],
  });

  useEffect(() => {
    let getPrivateList = async () => {
      let response = await axios.get(API_URL + '/group/list', {
        params: {
          groupCate: 2,
          page: privatePage,
        },
      });
      // console.log(API_URL + '/group/private');
      setPrivateList(response.data);
      // console.log(response.data);
    };
    getPrivateList();
  }, [privatePage]);
  // console.log('privateList', privateList);

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
        name: '我的揪團',
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

  // const officialList = {
  //   pagination: {
  //     page: 1,
  //     lastPage: 5,
  //   },
  //   data: [
  //     {
  //       name: '一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~',
  //       time: '2022/01/02',
  //       place: '台北',
  //       status: 1,
  //       statusName: '活動報名中',
  //       groupId: 1,
  //     },
  //     {
  //       name: '一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~',
  //       time: '2022/01/02',
  //       place: '台北',
  //       status: 1,
  //       statusName: '活動報名中',
  //       groupId: 2,
  //     },
  //     {
  //       name: '一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~',
  //       time: '2022/01/02',
  //       place: '台北',
  //       status: 1,
  //       statusName: '活動報名中',
  //       groupId: 3,
  //     },
  //     {
  //       name: '一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~',
  //       time: '2022/01/02',
  //       place: '台北',
  //       status: 1,
  //       statusName: '活動報名中',
  //       groupId: 4,
  //     },
  //     {
  //       name: '一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~',
  //       time: '2022/01/02',
  //       place: '台北',
  //       status: 1,
  //       statusName: '活動報名中',
  //       groupId: 5,
  //     },
  //   ],
  // };

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
            {officialList.data.map((item) => {
              let startTime = item.start_time;
              let endTime = item.end_time;
              startTime = startTime.slice(0, startTime.length - 3);
              endTime = endTime.slice(0, endTime.length - 3);
              return (
                <div className="page-type1-list-content" key={item.id}>
                  <div className="list-content_activity-name">{item.name}</div>
                  <div className="list-content_time">
                    {startTime} ~ {endTime}
                  </div>
                  <div className="list-content_place">
                    <FaMapMarkerAlt />
                    {item.cityName}
                  </div>
                  <div className="list-content_state">{item.status_name}</div>
                  <div className="list-content_btn">
                    <Link to={`/group/${item.id}`}>詳細內容</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <FePagination pagination={officialList.pagination} setPage={setOfficialPage} />
        </div>
      </div>
      {/* <!-- page-type1-intro --> */}
      <div className="page-group-intro-area container">
        <div className=" group-list-img-1">
          <img src={groupListImg1} alt="group-list-img-1" className="img-fluid object-cover w-100" />
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
              {privateList.data.map((item) => {
                let startTime = item.start_time;
                let endTime = item.end_time;
                startTime = startTime.slice(0, startTime.length - 3);
                endTime = endTime.slice(0, endTime.length - 3);

                return (
                  <div className="page-type1-list-content" key={item.id}>
                    <div className="list-content_activity-name">{item.name}</div>
                    <div className="list-content_time">
                      {startTime} ~ {endTime}
                    </div>
                    <div className="list-content_place">
                      <FaMapMarkerAlt />
                      {item.cityName}
                    </div>
                    <div className="list-content_user">{item.username}</div>
                    <div className="list-content_btn">
                      <Link to={`/group/${item.id}`}>詳細內容</Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <FePagination pagination={privateList.pagination} setPage={setPrivatePage} />
          </div>
          <div className="user-add-group-area">
            <div className="group-list-img-3 mb-5 mb-md-0">
              <img src={groupListImg3} className="img-fluid object-cover w-50" alt="group-list-img-3" />
            </div>
            <div className="user-add-group-contents ">
              <div className="user-add-group-content" id="grouplist-bolck3">
                <div className="page-type1-area-title m-view">我要開團</div>
                <div className="user-add-group-content-text">
                  <div>現在就來玩!</div>
                  <div className="mt-3">加入或創造一個你有興趣的聚會吧!不要有壓力!</div>
                </div>
                <Link to="/newgroup" className="user-add-group-content-btn" style={{ display: 'block' }}>
                  <button className=" btn-none">我要開團</button>
                </Link>
              </div>
              <div className="user-add-group-content rtl" id="grouplist-bolck4">
                <div className="page-type1-area-title m-view">我的揪團</div>
                <div className="user-add-group-content-text">
                  <div>了解自己遊玩的足跡，踏出舒適圈，認識新朋友</div>
                  <div className="mt-3">來聊天室與新的朋友們互動吧！</div>
                </div>
                <Link to="/account/group" className="user-add-group-content-btn" style={{ display: 'block' }}>
                  <button className="btn-none">我的揪團</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GroupList;
