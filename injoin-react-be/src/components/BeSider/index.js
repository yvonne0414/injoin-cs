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
    <a href="/">優惠券管理</a>,
    '2',
    <a href="/">
      <RiCoupon2Line />
    </a>
  ),
  getItem(
    <a href="/">訂單管理</a>,
    '3',
    <a href="/">
      <ProfileOutlined />
    </a>
  ),
  getItem(
    <a href="/">酒譜管理</a>,
    '4',
    <a href="/">
      <IoWineSharp />
    </a>
  ),
  getItem(
    <a href="/">揪團管理</a>,
    '5',
    <a href="/">
      <FaGlassCheers />
    </a>
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
