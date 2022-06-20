import './index.scss';
import { Link } from 'react-router-dom';
import productimg from '../../../assets/images/fe/productList/product_1.png';
import FePage2Header from '../../../components/FePage2Header';
const Bartending = () => {
  const page2HeaderInfo = {
    isProduct: true,
    sectionBg: 'Bartending_background.png',
    subTitle: {
      isShow: false,
      subName: 'Flagship product',
      subContent: '38.0%  750ml',
    },
    majorTitle: {
      contents: ['Have you hugged a', 'bartender today'],
      href: '',
    },

    navs: [
      {
        name: 'Vodks',
        href: '',
      },
      {
        name: 'Rum',
        href: '',
      },
      {
        name: 'Gin',
        href: '',
      },
      {
        name: 'Mixed',
        href: '',
      },
    ],
  };
  const { isProduct, sectionBg, subTitle, majorTitle, BartendingImg, navs } = page2HeaderInfo;
  return (
    <>
      <FePage2Header isProduct={isProduct} sectionBg={sectionBg} subTitle={subTitle} majorTitle={majorTitle} BartendingImg={BartendingImg} navs={navs} />
      <div className="Bartending-content">
        <div className="container">
          <div className="Bartending-content-top">
            <div className="Bartending-total m-view">
              <span>Rum</span>
              <span>/</span>
              <span>共16種酒譜</span>
            </div>
            <div className="Bartending-sel-all">
              <div className="Bartending-sel-1">
                <select value="" className=" mx-2 Bartending-sel">
                  {/* <optgroup labal="基酒種類"></optgroup> */}
                  <option value="" className="Bartending-sel-option">
                    酒譜類型
                  </option>
                </select>
                <select value="" className="mx-3 Bartending-sel">
                  <option value="" className="Bartending-sel-option">
                    Cocktail
                  </option>
                </select>
              </div>
            </div>
            <form className="Bartending-search-form d-flex">
              <input className="Bartending-search-label form-control form-control-sm me-1" type="search" placeholder="Search" />
              <button className="btn Bartending-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-4 gy-2  ">
            <div className="col Bartending-card-col">
              <div className="Bartending-card card ">
                <div className="Bartending-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="Bartending-card-body card-body ">
                  <div className="Bartending-card-title card-title">
                    <Link to="/">粉紅松鼠</Link>
                  </div>
                  <div className="Bartending-card-engtitle">Pink Squirrel</div>
                  <div className="Bartending-card-subtitle card-footer">杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿 </div>
                </div>
              </div>
            </div>
            <div class="col Bartending-card-col">
              <div className="Bartending-card card ">
                <div className="Bartending-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="Bartending-card-body card-body ">
                  <div className="Bartending-card-title card-title">
                    <Link to="/">粉紅松鼠</Link>
                  </div>
                  <div className="Bartending-card-engtitle">Pink Squirrel</div>
                  <div className="Bartending-card-subtitle card-footer">杏仁香甜酒 調味伏特加 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿 </div>
                </div>
              </div>
            </div>
            <div class="col Bartending-card-col">
              <div className="Bartending-card card ">
                <div className="Bartending-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="Bartending-card-body card-body ">
                  <div className="Bartending-card-title card-title">
                    <Link to="/">粉紅松鼠</Link>
                  </div>
                  <div className="Bartending-card-engtitle">Pink Squirrel</div>
                  <div className="Bartending-card-subtitle card-footer">杏仁香甜酒 調味伏特加 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿 </div>
                </div>
              </div>
            </div>
            <div class="col Bartending-card-col">
              <div className="Bartending-card card ">
                <div className="Bartending-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="Bartending-card-body card-body ">
                  <div className="Bartending-card-title card-title">
                    <Link to="/">粉紅松鼠</Link>
                  </div>
                  <div className="Bartending-card-engtitle">Pink Squirrel</div>
                  <div className="Bartending-card-subtitle card-footer">杏仁香甜酒 杏仁香甜酒 杏仁香甜酒 調味伏特加 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bartending;
