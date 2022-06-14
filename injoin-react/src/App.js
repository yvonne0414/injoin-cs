import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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
import UserReputation from './views/frontEnd/UserReputation';
import UserGroup from './views/frontEnd/UserGroup';
import OrderList from './views/frontEnd/OrderList';
import OrderListDetail from './views/frontEnd/OrderListDetail';
import GroupList from './views/frontEnd/GroupList/index';
import GroupDetail from './views/frontEnd/GroupDetail/index';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
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
          <Route path="/account/reputation" exact element={<UserReputation />} />
          <Route path="/account/group" exact element={<UserGroup />} />

          {/* 訂單 */}
          <Route path="/account/order" exact element={<OrderList />} />
          <Route path="/account/order/1" exact element={<OrderListDetail />}>
            <Route path=":currentPage" element={<OrderListDetail />} />
          </Route>

          {/* 揪團 */}
          <Route path="/group" exact element={<GroupList />} />
          <Route path="/group/1" exact element={<GroupDetail />}>
            <Route path=":currentPage" element={<GroupDetail />} />
          </Route>

          {/* 購物車 */}
          <Route path="/cart" component={<GroupDetail />} auth={auth} setAuth={setAuth} />
          <Route path="/cart/step1" component={<GroupDetail />} />
          <Route path="/cart/step2" component={<GroupDetail />} />
          <Route path="/cart/step3" component={<GroupDetail />} />
        </Routes>
        <FeFooter />
      </main>
    </BrowserRouter>
  );
}

export default App;
