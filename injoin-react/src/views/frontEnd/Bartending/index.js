import './index.scss';
import BartendingCard from '../../../components/BartendingCard/index';
import FePage2Header from '../../../components/FePage2Header';
import FePagination from '../../../components/FePagination1';
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

          <div className=" Bartending-card-all row row-cols-2 row-cols-md-4 gx-2">
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
            <BartendingCard />
          </div>
          <FePagination className="pc-view" />
        </div>
      </div>
    </>
  );
};
export default Bartending;
