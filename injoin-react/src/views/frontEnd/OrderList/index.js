// scss
import './index.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';
import OrderListForm from '../../../components/FeOrderList/OrderList';
import EmptyImage from '../../../components/EmptyImage';

import { userState } from '../../../App';
import LogoutPage from '../LogoutPage/LogoutPage.js';

const { RangePicker } = DatePicker;

const OrderList = () => {
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

  let [userId, setUserId] = useState(memberInfo.userId);
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'Order List',
    titleCn: '訂單列表',
    menuList: [
      {
        href: '#orderlist-bolck1',
        name: '商品訂單',
      },
      {
        href: '#orderlist-bolck2',
        name: '',
      },
    ],
    imgs: {
      m: 'order-list-header.png',
      pc: 'order-list-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/account/user',
        name: '會員中心',
      },
      selected: '我的訂單',
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

  // const orderlistArr = [
  //   {
  //     id: 1,
  //     orderNum: '51345',
  //     orderTime: '2022/01/02',
  //     orderStatus: '已完成',
  //     orderPay: '已付款',
  //     orderTotal: 'NT$5022',
  //     orderBtn: '詳細內容',
  //   },
  // ];

  // let orderId = useParams();
  //設定狀態--1.未出貨 2.已出貨 3.已完成 4.已取消
  const [orderStatus, setOrdersStatus] = useState(1);
  const [dates, setDates] = useState([null, null]);
  const [hackValue, setHackValue] = useState(null);
  const [value, setValue] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [orderData, setOrderData] = useState([]);
  let [ordersPage, setOrdersPage] = useState(1);
  let [ordersPagination, setOrdersPagination] = useState({
    total: 0,
    page: 1,
    lastPage: 1,
  });

  useEffect(() => {
    console.log(dates[0]);
    let getOrders = async () => {
      //axios.get(URL, config)
      let response = await axios.get(API_URL + `/order`, {
        params: {
          userId: userId,
          page: ordersPage,
          logisticsState: orderStatus,
          orderdatestart: startTime || '2022-01-01',
          orderdateend: endTime || '2322-01-01',
        },
      });
      setOrderData(response.data.data);
      setOrdersPagination(response.data.pagination);
      console.log(response.data);
    };

    getOrders();
  }, [ordersPage, orderStatus, startTime, endTime]);

  let ordersarr = orderData;
  // console.log(ordersarr);

  //篩選日期

  useEffect(() => {
    // console.log(value ? value[0].format('YYYY-MM-DD') : 'none');
    setStartTime(value && value[0].format('YYYY-MM-DD'));
    setEndTime(value && value[1].format('YYYY-MM-DD'));
  }, [value]);

  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }

    const tooLate = dates[0] && current.diff(dates[0], 'days') > 30;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([null, null]);
      setDates([null, null]);
    } else {
      setHackValue(null);
    }
  };

  return (
    <>
      {loginInfo.islogin ? (
        <>
          <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
          {/* <!-- page-type1-list official --> */}
          <div className="page-type1-list-area order-list mode-official" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
            <div className="container">
              <nav className="navbar order-status-wraper  d-flex justify-content-center justify-content-md-start">
                <ul className="nav order-status">
                  {/* <li className="nav-item">
                <Link to="#/" className="nav-select">
                  訂單成立
                </Link>
              </li> */}
                  <li className="nav-item">
                    <Link
                      className={`nav-select ${orderStatus === 1 && 'active'}`}
                      to="#"
                      onClick={() => {
                        setOrdersStatus(1);
                      }}
                    >
                      待出貨
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-select ${orderStatus === 2 && 'active'}`}
                      to="#"
                      onClick={() => {
                        setOrdersStatus(2);
                      }}
                    >
                      已出貨
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-select ${orderStatus === 3 && 'active'}`}
                      to="#"
                      onClick={() => {
                        setOrdersStatus(3);
                      }}
                    >
                      已送達
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-select ${orderStatus === 4 && 'active'}`}
                      to="#"
                      onClick={() => {
                        setOrdersStatus(4);
                      }}
                    >
                      已取消
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="nav-date d-flex justify-content-between ">
                <div className="page-type1-area-title mb-3" id="grouplist-bolck1">
                  {orderStatus === 1 ? '待出貨' : orderStatus === 2 ? '已出貨' : orderStatus === 3 ? '已送達' : '已取消'}
                </div>
                <div className="orderdate mb-4">
                  <RangePicker
                    value={hackValue || value}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => setDates(val)}
                    onChange={(val) => setValue(val)}
                    onOpenChange={onOpenChange}
                  />
                </div>
              </div>
              {ordersPagination.total === 0 ? (
                <div className="py-5 my-5">
                  <EmptyImage discText="無相關訂單" />
                </div>
              ) : (
                <>
                  <div className="page-type1-list-wraper">
                    <div className="page-type1-list-title pc-view">
                      <div>訂單編號</div>
                      <div>訂單時間</div>
                      <div>訂單狀態</div>
                      <div>配送方式</div>
                      <div>總金額</div>
                      <div></div>
                    </div>

                    {/* 假資料測試 */}
                    {/* {orderlistArr.map((v, i) => {
              return <OrderListForm key={i} data={v} />;
            })} */}

                    {ordersarr.map((v, i) => {
                      // console.log(v);
                      // if (v.logistics_state === orderStatus) {
                      return <OrderListForm key={i} data={v} />;
                      // }
                    })}
                  </div>
                  <FePagination pagination={ordersPagination} setPage={setOrdersPage} />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <LogoutPage setisLogin={setisLogin} />
      )}
    </>
  );
};

export default OrderList;
