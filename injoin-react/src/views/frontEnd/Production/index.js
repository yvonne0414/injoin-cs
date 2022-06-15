import React from 'react';
import './index.scss';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Form, Input } from 'antd';

import FePage2Header from '../../../components/FePage2Header';

const Production = () => {
  const page2HeaderInfo = {
    isProduct: true,
    sectionBg: 'prolist_background.png',
    subTitle: {
      isShow: true,
      subName: 'Flagship product',
      subContent: '38.0%  750ml',
    },
    majorTitle: {
      contents: ['About Don Julio', 'Blanco Tequila'],
      href: '',
    },
    prdImg: 'Flagship_product.png',
    navs: [
      {
        name: '基酒',
        href: '',
      },
      {
        name: '副材料',
        href: '',
      },
      {
        name: '工具',
        href: '',
      },
      {
        name: '酒杯',
        href: '',
      },
    ],
  };

  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = page2HeaderInfo;
  return (
    <>
      <FePage2Header isProduct={isProduct} sectionBg={sectionBg} subTitle={subTitle} majorTitle={majorTitle} prdImg={prdImg} navs={navs} />
      <div className="prd-content">
        <div className="container">
          <div className="prd-total">
            <span>副材料</span>
            <span>/</span>
            <span>共16件商品</span>
          </div>
          <div className="prd-sel">
            <div className="prd-sel-phone">
              <button className="prd-sel-btn">
                <FaSortAmountDownAlt className="prd-sel-btn-icondown" />
                暢銷商品
                <FaChevronRight className="prd-sel-btn-iconright" />
              </button>
              <button className="prd-sel-btn">
                <FaSortAmountDownAlt className="prd-sel-btn-icondown" />
                進階篩選
                <FaChevronRight className="prd-sel-btn-iconright" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="prd-sel-pc">
            <Form className="prd-sel-pc-form">
              <Form.Item type="string">
                <Input className="prd-sel-pc-input" type="text" placeholder="search" />
              </Form.Item>
            </Form>
           
          </div>
        </div>

        <div className="row row-cols-1 col-sm-6 row-cols-md-2">
          <div className="col">
            <div className="card">
              <img src="images/productimg.png" className="card-img-top" alt="" />
              <div className="card-body">
                <p>NT.550</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Production;
