import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { BackTop, Layout } from 'antd';

import BeHeader from './components/BeHeader';
import BeSider from './components/BeSider';
import PrdList from './views/PrdList';
import PrdAdd from './views/PrdAdd';
import BarList from './views/BarList';
import BarAdd from './views/BarAdd';
import CouponList from './views/CouponList';
import CouponAdd from './views/CouponAdd';
import GroupList from './views/GroupList';
import GroupAdd from './views/GroupAdd';
import OrderList from './views/OrderList';

const { Content } = Layout;

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <BackTop />
        <BeSider />
        <Layout style={{ minHeight: '100vh' }}>
          <BeHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/productionlist" exact element={<PrdList />} />
              <Route path="/production" exact element={<PrdAdd />} />
              <Route path="/bartendinglist" exact element={<BarList />} />
              <Route path="/bartending" exact element={<BarAdd />} />
              <Route path="/couponlist" exact element={<CouponList />} />
              <Route path="/coupon" exact element={<CouponAdd />} />
              <Route path="/grouplist" exact element={<GroupList />} />
              <Route path="/group" exact element={<GroupAdd />} />
              <Route path="/orderlist" exact element={<OrderList />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
