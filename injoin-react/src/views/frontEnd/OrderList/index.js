// scss
import './index.scss';

import { Link } from 'react-router-dom';
// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';

const OrderList = () => {
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
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      {/* <!-- page-type1-list official --> */}
      <div className="page-type1-list-area order-list mode-official">
        <div className="container">
          <nav className="navbar order-status-wraper">
            <ul className="nav order-status">
              <li className="nav-item">
                <a className="nav-select " href="#/">
                  尚未付款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-select" href="#/">
                  處理中
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-select" href="#/">
                  待收貨
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-select" href="#/">
                  已完成
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-select" href="#/">
                  已取消
                </a>
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
              <div>付款狀態</div>
              <div>總金額</div>
              <div></div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="list-content_order_num">51345</div>
              <div className="list-content_order_time">2022/01/02</div>
              <div className="list-content_order_status">已完成</div>
              <div className="list-content_order_pay">已付款</div>
              <div className="list-content_order_total">NT$5022</div>
              <div className="list-content_btn">
                <Link to="/group/1">詳細內容</Link>
              </div>
            </div>
          </div>
          <FePagination />
        </div>
      </div>
    </>
  );
};
export default OrderList;
