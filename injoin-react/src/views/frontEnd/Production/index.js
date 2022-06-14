import './index.scss';

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

      {/* <div className="prd-content">
        <div className="prd-total">
          <span>副材料</span>
          <span>/</span>
          <span>共16件商品</span>
        </div>
        <div className="prd-btn d-flex flex-row">
          <button>
            <i className="fa-solid fa-arrow-down-short-wide prolist-btn-icondown"></i>暢銷商品<i className="fa-solid fa-angle-right prolist-btn-iconright"></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-down-short-wide prolist-btn-icondown"></i>進階篩選<i className="fa-solid fa-angle-right prolist-btn-iconright"></i>
          </button>
        </div>
        <div className="row row-cols-1 col-sm-6 row-cols-md-2">
          <div className="col">
            <div className="card">
              <img src="images/productimg.png" className="card-img-top" alt="" />
              <div className="card-body">
                <Link to="/">金黑波本威士忌</Link>
                <p>NT.550</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="" className="card-img-top" alt="" />
              <div className="card-body"><Link to="/">金黑波本威士忌</Link></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Production;
