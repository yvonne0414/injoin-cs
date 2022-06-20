import './index.scss';
import { Link } from 'react-router-dom';
// component
import FePage1Header from '../../../components/FePage1Header';
import FePagination from '../../../components/FePagination1';

import { FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { ImUserCheck } from 'react-icons/im';
import { RiWechatLine } from 'react-icons/ri';
import { HiOutlineTrash } from 'react-icons/hi';

// img
import memberGroupImg3 from '../../../assets/images/fe/memberGroup/member-group-img-1.png';

const UserGroup = () => {
  const page1HeaderInfo = {
    titleEn: 'MyActivity',
    titleCn: '揪團管理',
    menuList: [
      {
        href: '#new-group-block1',
        name: '我要開團',
      },
      {
        href: '#',
        name: '我的揪團',
      },
      {
        href: '#',
        name: '我參加的揪團',
      },
      {
        href: '#',
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
      selected: 'group',
      selectOptions: [
        {
          name: '會員資訊',
          value: 'user',
        },
        {
          name: '我的收藏',
          value: 'like',
        },
        {
          name: '會員等級',
          value: 'vip',
        },
        {
          name: '優惠券',
          value: 'coupon',
        },
        {
          name: '留言',
          value: 'reputation',
        },
        {
          name: '我的訂單',
          value: 'order',
        },
        {
          name: '揪團管理',
          value: 'group',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="user-add-group-area">
        <div className="container">
          <div className="page-type1-area-title" id="new-group-block1">
            我要開團
          </div>
          <div className="d-flex user-add-group-content-wraper">
            <div className="user-add-group-content">
              <div className="user-add-group-content-text px-2">
                <div>現在就來玩!</div>
                <div className="mt-3">加入或創造一個你有興趣的聚會吧!不要有壓力!</div>
              </div>
              <Link to="/newgroup" className="user-add-group-content-btn mx-auto w-fit-content" style={{ display: 'block' }}>
                <button className="injoin-btn-outline btn-none text-gold">我要開團</button>
              </Link>
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
            私人開團活動
          </div>
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
            <div className="page-type1-list-content my-group-list-wraper">
              <div className="list-content_activity-name">一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~一起來飲酒囉~</div>
              <div className="list-content_time">2022/01/02</div>
              <div className="list-content_place">
                <FaMapMarkerAlt />
                台北
              </div>
              <div className="list-content_btn" title="查看">
                <Link to="/group/1">
                  <FaEye />
                  {/* 詳細內容 */}
                </Link>
              </div>
              <div className="list-content_btn" title="編輯">
                <Link to="/newgroup">
                  <BsPencilSquare />
                  {/* 編輯 */}
                </Link>
              </div>
              <div className="list-content_btn" title="審查">
                <Link to="/">
                  <ImUserCheck />
                  {/* 審查 */}
                </Link>
              </div>
              <div className="list-content_btn" title="聊天室">
                <Link to="/">
                  <RiWechatLine />
                  {/* 聊天室 */}
                </Link>
              </div>
              <div className="list-content_btn" title="刪除活動">
                <Link to="/">
                  <HiOutlineTrash />
                  {/* 刪除 */}
                </Link>
              </div>
            </div>
          </div>
          <FePagination />
        </div>
      </div>
    </>
  );
};
export default UserGroup;
