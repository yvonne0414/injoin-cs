// scss
import './index.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination';
import OrderListForm from '../../../components/FeOrderList/OrderList';

const OrderList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [userId, setUserId] = useState(3);
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
        name: '參加的團',
      },
    ],
    imgs: {
      m: 'order-list-header.png',
      pc: 'order-list-header.png',
    },
    pageSelector: {
      isShow: true,
      pageParent: {
        href: '/',
        name: '訂單列表',
      },
      selected: 'orderList',
      selectOptions: [
        {
          name: '商品訂單',
          value: 'orderList',
        },
        {
          name: '參加的團',
          value: 'orderList2',
        },
        {
          name: 'test',
          value: 'orderList3',
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
  //   {
  //     id: 2,
  //     orderNum: '12345',
  //     orderTime: '2022/01/02',
  //     orderStatus: '已完成',
  //     orderPay: '已付款',
  //     orderTotal: 'NT$5022',
  //     orderBtn: '詳細內容',
  //   },
  //   {
  //     id: 3,
  //     orderNum: '45678',
  //     orderTime: '2022/01/02',
  //     orderStatus: '已完成',
  //     orderPay: '已付款',
  //     orderTotal: 'NT$5022',
  //     orderBtn: '詳細內容',
  //   },
  // ];
  

  // let orderId = useParams();
  //設定狀態--1.未出貨 2.
  const [orderStatus, setOrdersStatus] = useState(1);

  const [orderData, setOrderData] = useState([]);
  let [ordersPage, setOrdersPage] = useState(1);
  let [ordersPagination, setOrdersPagination] = useState({
    total: 1,
    page: 1,
    lastPage: 1,
  });

  useEffect(() => {
    let getOrders = async () => {
      //axios.get(URL, config)
      let response = await axios.get(API_URL + `/order`, {
        params: {
          userId: userId,
          page: ordersPage,
          logisticsState: orderStatus,
        },
      });
      setOrderData(response.data.data);
      setOrdersPagination(response.data.pagination);
      console.log(response.data.pagination);
    };

    getOrders();
  }, [ordersPage, orderStatus]);

  let ordersarr = orderData;
  // console.log(ordersarr);

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      {/* <!-- page-type1-list official --> */}
      <div className="page-type1-list-area order-list mode-official">
        <div className="container">
          <nav className="navbar order-status-wraper  d-flex justify-content-center">
            <ul className="nav order-status">
              {/* <li className="nav-item">
                <Link to="#/" className="nav-select">
                  訂單成立
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-select"
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
                  className="nav-select"
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
                  className="nav-select"
                  to="#"
                  onClick={() => {
                    setOrdersStatus(3);
                  }}
                >
                  已完成
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-select"
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

          <div className="page-type1-area-title" id="grouplist-bolck1">
            已完成
          </div>
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
        </div>
      </div>
    </>
  );
};

export default OrderList;