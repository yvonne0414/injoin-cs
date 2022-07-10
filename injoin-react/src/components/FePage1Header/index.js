import './index.scss';
import { FE_IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const FePage1Header = (props) => {
  const { titleEn, titleCn, menuList, imgs, pageSelector } = props;
  let titleEnCaption = titleEn.substring(0, 1).toUpperCase();
  let titleEnContent = titleEn.substring(1).toLowerCase();
  let selectOptions = pageSelector.selectOptions;
  let selected = pageSelector.selected;
  let selector = [];
  selectOptions.map((v) => {
    selector.push({ label: <Link to={`${v.value}`}>{v.name}</Link>, key: v.value });
  });
  // console.log(selector);

  let menu = <Menu items={selector} />;

  return (
    <div className="page-type1-header">
      {pageSelector.isShow && (
        <div className="page-type1-header-select text-end me-2 me-md-5">
          <span className="mx-2">{pageSelector.pageParent.name}</span>
          <span className="mx-3">/</span>

          <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selected}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      )}
      <div className="container">
        <div className="page-type1-header-content">
          <div className="page-type1-header-content-title">
            <div className="page-type1-header-content-title-en">
              <span>{titleEnCaption}</span>
              {titleEnContent}
            </div>
            <div className="page-type1-header-content-title-cn">{titleCn}</div>
          </div>
          <ul className="list-unstyled page-type1-header-content-menu">
            {menuList.map((menu, i) => {
              return (
                <li key={i} className={i === 0 ? 'active' : ''}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="page-type1-header-img" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
        <img src={`${FE_IMAGE_URL}/page1header/${imgs.m}`} className="img-fluid object-cover m-view" alt={imgs.m} />
        <img src={`${FE_IMAGE_URL}/page1header/${imgs.pc}`} className="img-fluid object-cover pc-view" alt={imgs.pc} />
        <div className="page-type1-header-img-mask"></div>
      </div>
    </div>
  );
};
export default FePage1Header;
