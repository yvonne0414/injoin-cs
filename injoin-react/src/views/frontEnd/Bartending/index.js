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
  const bartendcard = [
    {
      id: 1,
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 2,
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 3,
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
    {
      id: 4,
      name: '粉紅松鼠',
      material: '杏仁香甜酒 鮮奶油 調味伏特加 鮮奶油紅石榴糖漿',
    },
  ];
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
            {bartendcard.map((v, i) => {
              return <BartendingCard key={i} data={v} />;
            })}
          </div>
          <FePagination className="pc-view" />
        </div>
      </div>
    </>
  );
};
export default Bartending;
