import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { BackTop, Layout } from 'antd';

import BeHeader from './components/BeHeader';
import BeSider from './components/BeSider';
import PrdList from './views/PrdList';
import PrdAdd from './views/PrdAdd';
import BarAdd from './views/BarAdd';
import CouponAdd from './views/CouponAdd';

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
              <Route path="/bartending" exact element={<BarAdd />} />
              <Route path="/coupon" exact element={<CouponAdd />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
