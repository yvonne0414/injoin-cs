import './index.scss';

import { Link } from 'react-router-dom';

import { FE_IMAGE_URL } from '../../utils/config';

import { FaWineBottle } from 'react-icons/fa';
import { TbLemon } from 'react-icons/tb';
import { IoIosWine } from 'react-icons/io';
import { GiSpoon } from 'react-icons/gi';
import React from 'react';

const FePage2Header = (props) => {
  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs, setCateL, category, setCateM, setCateS, setSearchWord } = props;
  return (
    <section>
      <div className="section-title">
        <div className="background-img">
          <img src={`${FE_IMAGE_URL}/page2header/${sectionBg}`} alt="" />
        </div>
        {subTitle.isShow && (
          <div className="title-sub d-flex flex-row">
            <span>{subTitle.subName}</span>
            <div className="title-line">
              <div></div>
            </div>
            <span>{subTitle.subContent}</span>
          </div>
        )}

        <div className="title-major">
          {majorTitle.contents.map((content, i) => {
            return (
              <React.Fragment key={i}>
                <span>{content}</span>
                <br />
              </React.Fragment>
            );
          })}
          {/* <span>Blanco Tequila</span>
          <br /> */}
          <a className="title-major-btn btn btn-outline" href="/">
            Details
          </a>
        </div>
        <div className="title-image">
          <img src={`${FE_IMAGE_URL}/page2header/${prdImg}`} alt="" />
        </div>
        <div className="prd-nav">
          <ul className="list-unstyled d-flex  justify-content-start mb-0 nav-justified prd-nav-ul">
            {navs.map((nav) => {
              return (
                <li className="prd-nav-li">
                  <span
                    className={`nav-link prd-nav-a ${category === nav.cateL && 'active'}`}
                    onClick={() => {
                      setCateL(nav.cateL);
                      setCateM(0);
                      setCateS(0);
                    }}
                  >
                    {/* <FaWineBottle className=" prd-nav-icon" /> */}
                    {nav.icon}
                    {nav.name}
                  </span>
                </li>
              );
            })}
            {/* <li className="prd-nav-li">
              <Link className="nav-link prd-nav-a" to="">
                <FaWineBottle className=" prd-nav-icon" />
                基酒
              </Link>
            </li>
            <li className="prd-nav-li">
              <Link className="nav-link prd-nav-a" to="">
                <TbLemon className=" prd-nav-icon" />
                副材料
              </Link>
            </li>
            <li className="prd-nav-li">
              <Link className="nav-link prd-nav-a" to="">
                {/* <i className="fa-solid fa-bottle-droplet prd-nav-icon"></i> */}
            {/* <GiSpoon className=" prd-nav-icon" />
                工具
              </Link>
            </li>
            <li className="prd-nav-li">
              <Link className="nav-link prd-nav-a" to="">
                <IoIosWine className=" prd-nav-icon" />
                酒杯
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FePage2Header;
