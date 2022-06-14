import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import FeHeader from './components/FeHeader';
import FeFooter from './components/FeFooter';
import Chen from './views/frontEnd/Chen/Chen';
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
          <Route path="/" exact element={<GroupList />} />
          <Route path="/aboutus" exact element={<GroupList />} />
          {/* 商品 */}
          <Route path="/production" exact element={<GroupList />} />
          <Route path="/production/1" exact element={<GroupList />}>
            <Route path=":currentPage" element={<GroupDetail />} />
          </Route>
          {/* 酒譜 */}
          <Route path="/bartending" exact element={<GroupList />} />
          <Route path="/bartending/1" exact element={<GroupList />}>
            <Route path=":currentPage" element={<GroupDetail />} />
          </Route>
          {/* 會員中心 */}
          <Route path="/account" exact element={<GroupList />} />
          <Route path="/account/like" exact element={<GroupList />} />
          <Route path="/account/vip" exact element={<GroupList />} />
          <Route path="/account/coupon" exact element={<GroupList />} />
          <Route path="/account/reputation" exact element={<GroupList />} />
          <Route path="/account/reputation/1" exact element={<GroupList />}>
            <Route path=":currentPage" element={<GroupDetail />} />
          </Route>
          {/* 訂單 */}
          <Route path="/account/order" exact element={<GroupList />} />
          <Route path="/account/order/1" exact element={<GroupList />}>
            <Route path=":currentPage" element={<GroupDetail />} />
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
