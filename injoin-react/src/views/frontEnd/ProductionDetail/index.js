import './index.scss';
import { Breadcrumb, Carousel } from 'antd';

import prddetailImg1 from '../../../assets/images/fe/productionDetail/prd-detail-img-1.png';
import prddetailImg2 from '../../../assets/images/fe/productionDetail/prd-detail-img-2.png';
import prddetailImg3 from '../../../assets/images/fe/productionDetail/prd-detail-img-3.png';
import prddetailImg4 from '../../../assets/images/fe/productionDetail/prd-detail-img-4.png';

const contentStyle = {
  height: '300px',
  color: '#000',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#fff',
  // background: 'transparent',
  overflow: 'hidden',
};

const ProductionDetail = () => {
  return (
    <>
      <div className="bg-box prddetail-session1">
        <div className="w-fit-content ms-auto">
          <Breadcrumb separator="">
            <Breadcrumb.Item href="">商品</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">威士忌</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">波爾本威士忌</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>金賓黑波爾本威士忌</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Carousel autoplay className="m-view mt-3">
          <div>
            <div style={contentStyle}>
              <img src={prddetailImg1} alt="prd-detail-img-1" className="mx-auto h-100" />
            </div>
          </div>
          <div>
          <div style={contentStyle}>
              <img src={prddetailImg2} alt="prd-detail-img-2" className="mx-auto h-100" />
            </div>
          </div>
          <div>
          <div style={contentStyle}>
              <img src={prddetailImg3} alt="prd-detail-img-3" className="mx-auto h-100" />
            </div>
          </div>
          <div>
          <div style={contentStyle}>
              <img src={prddetailImg4} alt="prd-detail-img-4" className="mx-auto h-100" />
            </div>
          </div>
        </Carousel>
        <div className="container">
          <div className="pc-view">
          <div className="prd-detail-img-1">
            <img src={prddetailImg1} alt="prd-detail-img-1"/>
          </div>
          </div>
          <div className="prd-detail-title">
          金賓黑波爾本威士忌
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductionDetail;
