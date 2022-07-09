import './index.scss';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';
import FeAuditModal from '../../../components/FeAuditModal/index.js';
import EmptyImage from '../../../components/EmptyImage';

import { FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { ImUserMinus } from 'react-icons/im';
import { RiWechatLine } from 'react-icons/ri';
import { HiOutlineTrash } from 'react-icons/hi';

import { message, Popconfirm, Tabs } from 'antd';

// img
import memberGroupImg3 from '../../../assets/images/fe/memberGroup/member-group-img-1.png';

import LogoutPage from '../LogoutPage/LogoutPage.js';
import { userState } from '../../../App';

import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

const UserGroup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  //header Info
  const page1HeaderInfo = {
    titleEn: 'MyActivity',
    titleCn: '揪團管理',
    menuList: [
      {
        href: '#new-group-block1',
        name: '來揪團吧',
      },
      {
        href: '#grouplist-bolck2',
        name: '我揪的團',
      },
      {
        href: '#grouplist-bolck3',
        name: '待參加揪團',
      },
      {
        href: '#grouplist-bolck4',
        name: '歷史揪團紀錄',
      },
    ],
    imgs: {
      m: 'group-list-header-m.png',
      pc: 'group-list-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/account/user',
        name: '會員中心',
      },
      selected: '揪團管理',
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

  // 刪除活動：popconfirm
  const delGroup = async (groupId) => {
    try {
      let res = await axios.post(`${API_URL}/group/delete/${groupId}`, {});
      message.success('活動已刪除');
      getOwnAddList();
      getWpList();
    } catch (e) {
      console.error(e);
    }
  };

  // 取消報名
  const unJoin = async (groupId) => {
    try {
      let res = await axios.post(`${API_URL}/group/unjoin/${groupId}`, {
        userId: memberInfo.userId,
      });
      message.success('已取消報名');
      getWoList();
      getWpList();
    } catch (e) {
      console.error(e);
    }
  };

  // tabs
  const { TabPane } = Tabs;
  const onChange = (key) => {
    // console.log(key);
  };

  // 我揪的團列表
  let [ownPage, setOwnPage] = useState(1);
  let [ownData, setOwnData] = useState([]);
  let [ownPagination, setOwnPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });
  const getOwnAddList = async () => {
    let response = await axios.get(API_URL + '/group/ownaddgroup', {
      params: {
        userId: memberInfo.userId,
        page: ownPage,
      },
    });
    setOwnData(response.data.data);
    setOwnPagination(response.data.pagination);
    // console.log(response.data);
    // console.log(ownData);
    // console.log(ownPagination);
  };
  useEffect(() => {
    getOwnAddList();
  }, [ownPage, memberInfo.userId]);

  // 待參加官方(wo)
  let [woPage, setWoPage] = useState(1);
  let [woData, setWoData] = useState([]);
  let [woPagination, setWoPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });
  const getWoList = async () => {
    let response = await axios.get(API_URL + '/group/participant', {
      params: {
        // TODO:userId要換成session的
        userId: memberInfo.userId,
        groupMaxStatus: 4,
        groupMinStatus: 0,
        groupCate: 1,
        page: woPage,
      },
    });
    setWoData(response.data.data);
    setWoPagination(response.data.pagination);
  };
  useEffect(() => {
    getWoList();
  }, [woPage, memberInfo.userId]);

  // 待參加私人(wp)
  let [wpPage, setWpPage] = useState(1);
  let [wpData, setWpData] = useState([]);
  let [wpPagination, setWpPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });
  const getWpList = async () => {
    let response = await axios.get(API_URL + '/group/participant', {
      params: {
        // TODO:userId要換成session的
        userId: memberInfo.userId,
        groupMaxStatus: 4,
        groupMinStatus: 0,
        groupCate: 2,
        page: wpPage,
      },
    });
    setWpData(response.data.data);
    setWpPagination(response.data.pagination);
    // console.log(wpData);
  };
  useEffect(() => {
    getWpList();
  }, [wpPage, memberInfo.userId]);

  // 歷史官方(ho)
  let [hoPage, setHoPage] = useState(1);
  let [hoData, setHoData] = useState([]);
  let [hoPagination, setHoPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });
  const getHoList = async () => {
    let response = await axios.get(API_URL + '/group/participant', {
      params: {
        // TODO:userId要換成session的
        userId: memberInfo.userId,
        groupMaxStatus: 5,
        groupMinStatus: 3,
        groupCate: 1,
        page: hoPage,
      },
    });
    setHoData(response.data.data);
    setHoPagination(response.data.pagination);
  };
  useEffect(() => {
    getHoList();
  }, [hoPage, memberInfo.userId]);

  // 歷史私人(hp)
  let [hpPage, setHpPage] = useState(1);
  let [hpData, setHpData] = useState([]);
  let [hpPagination, setHpPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });
  const getHpList = async () => {
    let response = await axios.get(API_URL + '/group/participant', {
      params: {
        // TODO:userId要換成session的
        userId: memberInfo.userId,
        groupMaxStatus: 5,
        groupMinStatus: 3,
        groupCate: 2,
        page: hpPage,
      },
    });
    setHpData(response.data.data);
    setHpPagination(response.data.pagination);
  };
  useEffect(() => {
    getHpList();
  }, [hpPage, memberInfo.userId]);

  return (
    <>
      {loginInfo.islogin ? (
        <>
          <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
          <div className="user-add-group-area">
            <div className="container">
              <div className="page-type1-area-title" id="new-group-block1">
                來揪團吧
              </div>
              <div className="d-flex user-add-group-content-wraper">
                <div className="user-add-group-content">
                  <div className="user-add-group-content-text px-2">
                    <div>現在就來玩!</div>
                    <div className="mt-3">加入或創造一個你有興趣的聚會吧!不要有壓力!</div>
                  </div>
                  <div className="d-flex">
                    <Link to="/newgroup" className="user-add-group-content-btn w-fit-content mx-3" style={{ display: 'block' }}>
                      <button className="injoin-btn-outline btn-none text-gold">我要開團</button>
                    </Link>
                    <Link to="/group" className="user-add-group-content-btn w-fit-content  mx-3" style={{ display: 'block' }}>
                      <button className="injoin-btn-outline btn-none text-gold">我要報名</button>
                    </Link>
                  </div>
                </div>
                <div className="mb-5 mb-md-0 position-relative">
                  <div className="bg-square-1"></div>
                  <img src={memberGroupImg3} className="img-fluid object-cover" alt="group-list-img-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="page-type1-list-area member-group-list-area mt-5 pt-md-5">
            <div className="container">
              <div className="page-type1-area-title" id="grouplist-bolck2">
                我揪的團
              </div>
              {ownPagination.total === 0 ? (
                <EmptyImage discText="暫無活動" />
              ) : (
                <>
                  <div className="page-type1-list-wraper">
                    <div className="page-type1-list-title pc-view">
                      <div>活動名稱</div>
                      <div>活動時間</div>
                      <div>活動地點</div>
                      <div className="list-content_btn"></div>
                      <div className="list-content_btn"></div>
                      <div className="list-content_btn"></div>
                      <div className="list-content_btn"></div>
                      <div className="list-content_btn"></div>
                    </div>
                    {ownData.map((item) => {
                      let startTime = item.start_time;
                      let endTime = item.end_time;
                      startTime = startTime.slice(0, startTime.length - 3);
                      endTime = endTime.slice(0, endTime.length - 3);
                      return (
                        <div className="page-type1-list-content my-group-list-wraper" key={item.id}>
                          <div className="list-content_activity-name">{item.name}</div>
                          <div className="list-content_time">
                            {startTime}~{endTime}
                          </div>
                          <div className="list-content_place">
                            <FaMapMarkerAlt />
                            {item.cityName}
                          </div>
                          <div className="list-content_btn" title="查看">
                            <Link to={`/group/${item.id}`}>
                              <FaEye />
                              {/* 詳細內容 */}
                            </Link>
                          </div>
                          <div className="list-content_btn" title="編輯">
                            <Link to={`/editgroup/${item.id}`}>
                              <BsPencilSquare />
                              {/* 編輯 */}
                            </Link>
                          </div>

                          <FeAuditModal groupId={item.id} groupMaxNum={item.max_num} groupNowNum={item.now_num} groupMember={item.member} userId={memberInfo.userId} />

                          <div className="list-content_btn" title="聊天室">
                            <Link to={`/chatroom/${item.id}`}>
                              <RiWechatLine />
                              {/* 聊天室 */}
                            </Link>
                          </div>
                          <div className="list-content_btn" title="刪除活動">
                            <Popconfirm
                              title="你確定要刪除此項活動嗎?"
                              onConfirm={() => {
                                delGroup(item.id);
                              }}
                              okText="確定"
                              cancelText="取消"
                            >
                              <HiOutlineTrash />
                            </Popconfirm>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <FePagination pagination={ownPagination} setPage={setOwnPage} />
                </>
              )}
            </div>
          </div>
          <div className="page-type1-list-area member-group-list-area mt-5 pt-md-5">
            <div className="bg-square-2"></div>
            <div className="container">
              <div className="page-type1-area-title" id="grouplist-bolck3">
                待參加揪團
              </div>
              <Tabs onChange={onChange} type="card" centered size="large">
                <TabPane tab="官方揪團" key="1">
                  {woPagination.total === 0 ? (
                    <EmptyImage discText="暫無活動" />
                  ) : (
                    <>
                      <div className="page-type1-list-wraper">
                        <div className="page-type1-list-title pc-view">
                          <div>活動名稱</div>
                          <div>活動時間</div>
                          <div>活動地點</div>
                          <div>活動狀態</div>
                          <div className="list-content_btn"></div>
                          <div className="list-content_btn"></div>
                          <div className="list-content_btn"></div>
                        </div>
                        {woData.map((item) => {
                          let startTime = item.start_time;
                          let endTime = item.end_time;
                          startTime = startTime.slice(0, startTime.length - 3);
                          endTime = endTime.slice(0, endTime.length - 3);
                          return (
                            <div className="page-type1-list-content my-group-list-wraper" key={item.id}>
                              <div className="list-content_activity-name">{item.name}</div>
                              <div className="list-content_time">
                                {startTime}~{endTime}
                              </div>
                              <div className="list-content_place">
                                <FaMapMarkerAlt />
                                {item.cityName}
                              </div>
                              <div className="list-content_status">
                                <span>{item.status_name}</span>
                              </div>
                              <div className="list-content_btn" title="查看">
                                <Link to={`/group/${item.id}`}>
                                  <FaEye />
                                  {/* 詳細內容 */}
                                </Link>
                              </div>
                              <div className="list-content_btn" title="取消報名活動">
                                <Popconfirm
                                  title="你確定要取消報名此項活動嗎？"
                                  onConfirm={() => {
                                    unJoin(item.id);
                                  }}
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  <ImUserMinus />
                                </Popconfirm>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <FePagination pagination={woPagination} setPage={setWoPage} />
                    </>
                  )}
                </TabPane>
                <TabPane tab="私人揪團" key="2">
                  {wpPagination.total === 0 ? (
                    <EmptyImage discText="暫無活動" />
                  ) : (
                    <>
                      <div className="page-type1-list-wraper">
                        <div className="page-type1-list-title pc-view">
                          <div>活動名稱</div>
                          <div>活動時間</div>
                          <div>活動地點</div>
                          <div>活動狀態</div>
                          <div>審核狀態</div>
                          <div className="list-content_btn"></div>
                          <div className="list-content_btn"></div>
                          <div className="list-content_btn"></div>
                        </div>
                        {wpData.map((item) => {
                          let startTime = item.start_time;
                          let endTime = item.end_time;
                          startTime = startTime.slice(0, startTime.length - 3);
                          endTime = endTime.slice(0, endTime.length - 3);
                          // console.log(item);
                          return (
                            <div className="page-type1-list-content my-group-list-wraper" key={item.id}>
                              <div className="list-content_activity-name">{item.name}</div>
                              <div className="list-content_time">
                                {startTime}~{endTime}
                              </div>
                              <div className="list-content_place">
                                <FaMapMarkerAlt />
                                {item.cityName}
                              </div>
                              <div className="list-content_status">
                                <span>{item.status_name}</span>
                              </div>
                              <div className="list-content_status">{item.audit_status === 0 ? '審核中' : item.audit_status === 1 ? '審核通過' : '審核未通過'}</div>
                              <div className="list-content_btn" title="查看">
                                <Link to={`/group/${item.id}`}>
                                  <FaEye />
                                  {/* 詳細內容 */}
                                </Link>
                              </div>
                              {item.audit_status === 1 ? (
                                <div className="list-content_btn" title="聊天室">
                                  <Link to={`/chatroom/${item.id}`}>
                                    <RiWechatLine />
                                    {/* 聊天室 */}
                                  </Link>
                                </div>
                              ) : (
                                // <div className="list-content_btn"></div>
                                ''
                              )}
                              {item.user_id !== memberInfo.userId ? (
                                <div className="list-content_btn" title="取消報名活動">
                                  <Popconfirm
                                    title="你確定要取消報名此項活動嗎?"
                                    onConfirm={() => {
                                      unJoin(item.id);
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                  >
                                    <ImUserMinus />
                                  </Popconfirm>
                                </div>
                              ) : (
                                // <div className="list-content_btn"></div>
                                ''
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <FePagination pagination={wpPagination} setPage={setWpPage} />
                    </>
                  )}
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="page-type1-list-area member-group-list-area mt-5 pt-md-5">
            <div className="bg-square-3"></div>
            <div className="container">
              <div className="page-type1-area-title" id="grouplist-bolck4">
                歷史揪團紀錄
              </div>
              <Tabs onChange={onChange} type="card" centered size="large">
                <TabPane tab="官方揪團" key="1">
                  {hoPagination.total === 0 ? (
                    <EmptyImage discText="暫無紀錄" />
                  ) : (
                    <>
                      <div className="page-type1-list-wraper">
                        <div className="page-type1-list-title pc-view">
                          <div>活動名稱</div>
                          <div>活動時間</div>
                          <div>活動地點</div>
                          <div>活動狀態</div>
                          <div className="list-content_btn"></div>
                        </div>
                        {hoData.map((item) => {
                          let startTime = item.start_time;
                          let endTime = item.end_time;
                          startTime = startTime.slice(0, startTime.length - 3);
                          endTime = endTime.slice(0, endTime.length - 3);
                          return (
                            <div className="page-type1-list-content my-group-list-wraper" key={item.id}>
                              <div className="list-content_activity-name">{item.name}</div>
                              <div className="list-content_time">
                                {startTime}~{endTime}
                              </div>
                              <div className="list-content_place">
                                <FaMapMarkerAlt />
                                {item.cityName}
                              </div>
                              <div className="list-content_status">
                                <span>{item.status_name}</span>
                              </div>
                              <div className="list-content_btn" title="查看">
                                <Link to={`/group/${item.id}`}>
                                  <FaEye />
                                  {/* 詳細內容 */}
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                        <div className="page-type1-list-content my-group-list-wraper">
                          <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
                          <div className="list-content_time">2022/01/02</div>
                          <div className="list-content_place">
                            <FaMapMarkerAlt />
                            台北
                          </div>
                          <div className="list-content_status">
                            <span>活動報名中</span>
                          </div>
                          <div className="list-content_btn" title="查看">
                            <Link to="/group/1">
                              <FaEye />
                              {/* 詳細內容 */}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <FePagination pagination={hoPagination} setPage={setHoPage} />
                    </>
                  )}
                </TabPane>
                <TabPane tab="私人揪團" key="2">
                  {hpPagination.total === 0 ? (
                    <EmptyImage discText="暫無紀錄" />
                  ) : (
                    <>
                      <div className="page-type1-list-wraper">
                        <div className="page-type1-list-title pc-view">
                          <div>活動名稱</div>
                          <div>活動時間</div>
                          <div>活動地點</div>
                          <div>身份</div>
                          <div className="list-content_btn"></div>
                          <div className="list-content_btn"></div>
                        </div>
                        {hpData.map((item) => {
                          let startTime = item.start_time;
                          let endTime = item.end_time;
                          startTime = startTime.slice(0, startTime.length - 3);
                          endTime = endTime.slice(0, endTime.length - 3);
                          return (
                            <div className="page-type1-list-content my-group-list-wraper" key={item.id}>
                              <div className="list-content_activity-name">{item.name}</div>
                              <div className="list-content_time">
                                {startTime}~{endTime}
                              </div>
                              <div className="list-content_place">
                                <FaMapMarkerAlt />
                                {item.cityName}
                              </div>
                              <div className="list-content_status">{item.user_id === memberInfo.userId ? '主揪' : '團員'}</div>
                              <div className="list-content_btn" title="查看">
                                <Link to={`/group/${item.id}`}>
                                  <FaEye />
                                  {/* 詳細內容 */}
                                </Link>
                              </div>
                              <div className="list-content_btn" title="聊天室">
                                <Link to={`/chatroom/${item.id}`}>
                                  <RiWechatLine />
                                  {/* 聊天室 */}
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <FePagination pagination={hpPagination} setPage={setHpPage} />
                    </>
                  )}
                </TabPane>
              </Tabs>
            </div>
          </div>
        </>
      ) : (
        <LogoutPage setisLogin={setisLogin} />
      )}
    </>
  );
};
export default UserGroup;
