import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useContext, createContext, useEffect } from 'react';
import { BackTop } from 'antd';

import FeHeader from './components/FeHeader';
import FeFooter from './components/FeFooter';
import Chen from './views/frontEnd/Chen/Chen';
import HomePage from './views/frontEnd/HomePage';
import AboutUs from './views/frontEnd/AboutUs';
import Production from './views/frontEnd/Production';
import ProductionDetail from './views/frontEnd/ProductionDetail';
import Bartending from './views/frontEnd/Bartending';
import BartendingDetail from './views/frontEnd/BartendingDetail';
import UserInfo from './views/frontEnd/UserInfo';
import UserLike from './views/frontEnd/UserLike';
import UserVip from './views/frontEnd/UserVip';
import UserCoupon from './views/frontEnd/UserCoupon';
import CouponDetail from './views/frontEnd/CouponDetail';
import UserReputation from './views/frontEnd/UserReputation';
import UserGroup from './views/frontEnd/UserGroup';
import OrderList from './views/frontEnd/OrderList';
import OrderListDetail from './views/frontEnd/OrderListDetail';
import GroupList from './views/frontEnd/GroupList/index';
import GroupDetail from './views/frontEnd/GroupDetail/index';
import GroupAdd from './views/frontEnd/GroupAdd';
import GroupEdit from './views/frontEnd/GroupEdit';
import ChatRoom from './views/frontEnd/ChatRoom';
import axios from 'axios';
import { API_URL } from './utils/config';
import AboutUser from './views/frontEnd/AboutUser';

export const userState = createContext();

function App() {
  const [auth, setAuth] = useState(false);
  const [islogin, setislogin] = useState(false);
  const [member, setMember] = useState(null);

  useEffect(() => {
    let getMemberInfo = async () => {
      let response = await axios.get(`${API_URL}/member/info`, {
        withCredentials: true,
      });
      setMember(response.data);
    };
    getMemberInfo();

    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/userlike/1`);

      // console.log("app",response.data);
      localStorage.removeItem('userLike');
      localStorage.setItem('userLike', JSON.stringify(response.data));
    };
    getUserLike();
  }, []);

  useEffect(() => {
    let getMemberInfo = async () => {
      let response = await axios.get(`${API_URL}/member/info`, {
        withCredentials: true,
      });
      // console.log("app.js" ,response.data);
      setMember(response.data);
    };
    getMemberInfo();
  }, [islogin]);

  return (
    <userState.Provider value={{ islogin, setislogin, member }}>
      <BrowserRouter>
        <BackTop />
        <FeHeader />
        <main>
          <Routes>
            <Route path="/chen" element={<Chen />} />

            {/* 首頁 */}
            <Route path="/" exact element={<HomePage />} />
            <Route path="/aboutus" exact element={<AboutUs />} />

            {/* 商品 */}
            <Route path="/production" exact element={<Production />} />
            <Route path="/production/1" exact element={<ProductionDetail />}>
              <Route path=":currentPage" element={<ProductionDetail />} />
            </Route>

            {/* 酒譜 */}
            <Route path="/bartending" exact element={<Bartending />} />
            <Route path="/bartending/1" exact element={<BartendingDetail />}>
              <Route path=":currentPage" element={<BartendingDetail />} />
            </Route>

            {/* 會員中心 */}
            <Route path="/account/user" exact element={<UserInfo />} />
            <Route path="/account/like" exact element={<UserLike />} />
            <Route path="/account/vip" exact element={<UserVip />} />
            <Route path="/account/coupon" exact element={<UserCoupon />} />
            <Route path="/account/coupon/1" exact element={<CouponDetail />}>
              <Route path=":currentPage" element={<CouponDetail />} />
            </Route>
            <Route path="/account/reputation" exact element={<UserReputation />} />
            <Route path="/account/group" exact element={<UserGroup />} />

            {/* 訂單 */}
            <Route path="/account/order" exact element={<OrderList />} />
            <Route path="/account/order/1" exact element={<OrderListDetail />}>
              <Route path=":currentPage" element={<OrderListDetail />} />
            </Route>

            {/* 揪團 */}
            <Route path="/newgroup" exact element={<GroupAdd />} />
            <Route path="/editgroup/:groupId" element={<GroupEdit />}>
              <Route path=":currentPage" element={<GroupEdit />} />
            </Route>
            <Route path="/group" exact element={<GroupList />} />
            <Route path="/group/:groupId" exact element={<GroupDetail />}>
              <Route path=":currentPage" element={<GroupDetail />} />
            </Route>

            <Route path="/chatroom/:groupId" exact element={<ChatRoom />}>
              <Route path=":currentPage" element={<ChatRoom />} />
            </Route>

            {/* 購物車 */}
            <Route path="/cart" component={<GroupDetail />} auth={auth} setAuth={setAuth} />
            <Route path="/cart/step1" component={<GroupDetail />} />
            <Route path="/cart/step2" component={<GroupDetail />} />
            <Route path="/cart/step3" component={<GroupDetail />} />

            {/* 會員資料 */}
            <Route path="/aboutuser" component={<AboutUser />}>
              <Route path=":userid" element={<AboutUser />} />
            </Route>
          </Routes>
          <FeFooter />
        </main>
      </BrowserRouter>
    </userState.Provider>
  );
}

export default App;
