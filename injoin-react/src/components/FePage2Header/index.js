import './index.scss';

import { Link } from 'react-router-dom';

import { FE_IMAGE_URL } from '../../utils/config';

import { FaWineBottle } from 'react-icons/fa';
import { TbLemon } from 'react-icons/tb';
import { IoIosWine } from 'react-icons/io';
import { GiSpoon } from 'react-icons/gi';
import React from 'react';

const FePage2Header = (props) => {
  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = props;
  return (
    <section>
      <div class="section-title">
        <div class="background-img">
          <img src={`${FE_IMAGE_URL}/page2header/${sectionBg}`} alt="" />
        </div>
        {subTitle.isShow && (
          <div class="title-sub d-flex flex-row">
            <span>{subTitle.subName}</span>
            <div class="title-line">
              <div></div>
            </div>
            <span>{subTitle.subContent}</span>
          </div>
        )}

        <div class="title-major">
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
          <a class="title-major-btn btn btn-outline" href="/">
            Details
          </a>
        </div>
        <div class="title-image">
          <img src={`${FE_IMAGE_URL}/page2header/${prdImg}`} alt="" />
        </div>
        <div class="prd-nav">
          <ul class="list-unstyled d-flex justify-content-center mb-0 nav-justified prd-nav-ul">
            {navs.map((nav) => {
              return (
                <li class="prd-nav-li">
                  <Link class="nav-link prd-nav-a" to={nav.href}>
                    <FaWineBottle className=" prd-nav-icon" />
                    {nav.name}
                  </Link>
                </li>
              );
            })}
            {/* <li class="prd-nav-li">
              <Link class="nav-link prd-nav-a" to="">
                <FaWineBottle className=" prd-nav-icon" />
                基酒
              </Link>
            </li>
            <li class="prd-nav-li">
              <Link class="nav-link prd-nav-a" to="">
                <TbLemon className=" prd-nav-icon" />
                副材料
              </Link>
            </li>
            <li class="prd-nav-li">
              <Link class="nav-link prd-nav-a" to="">
                {/* <i class="fa-solid fa-bottle-droplet prd-nav-icon"></i> */}
            {/* <GiSpoon className=" prd-nav-icon" />
                工具
              </Link>
            </li>
            <li class="prd-nav-li">
              <Link class="nav-link prd-nav-a" to="">
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
