import { ProfileOutlined, ShopOutlined } from '@ant-design/icons';
import { IoWineSharp } from 'react-icons/io5';
import { RiCoupon2Line } from 'react-icons/ri';
import { FaGlassCheers } from 'react-icons/fa';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link to="/productionlist">商品管理</Link>,
    '1',
    <Link to="/productionlist">
      <ShopOutlined />
    </Link>
  ),
  getItem(
    <Link to="/couponlist">優惠券管理</Link>,
    '2',
    <Link to="/couponlist">
      <RiCoupon2Line />
    </Link>
  ),
  getItem(
    <Link to="/orderlist">訂單管理</Link>,
    '3',
    <Link to="/orderlist">
      <ProfileOutlined />
    </Link>
  ),
  getItem(
    <Link to="/bartendinglist">酒譜管理</Link>,
    '4',
    <Link to="/bartendinglist">
      <IoWineSharp />
    </Link>
  ),
  getItem(
    <Link to="/grouplist">揪團管理</Link>,
    '5',
    <Link to="/grouplist">
      <FaGlassCheers />
    </Link>
  ),
];

const BeSider = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
      </Sider>
    </>
  );
};
export default BeSider;
