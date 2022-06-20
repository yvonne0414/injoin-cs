import './index.scss';
import { Link } from 'react-router-dom';
import FePagination from '../../../components/FePagination1';
import reputationimg from '../../../assets/images/fe/userReputation/reputation_1.png';
import FePage1Header from '../../../components/FePage1Header';
const UserReputation = () => {
  const page1HeaderInfo = {
    titleEn: 'Reputation',
    titleCn: '會員評價',
    menuList: [
      {
        href: '#user-reputation-bolck1',
        name: '我的評價',
      },
      {
        href: '#user-reputation-bolck2',
        name: '待評價訂單',
      },
    ],
    imgs: {
      m: 'user-reputation-header-m.png',
      pc: 'user-reputation-header.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '首頁',
      },
      selected: 'UserReputation',
      selectOptions: [
        {
          name: '揪團專區',
          value: 'UserReputation',
        },
        {
          name: 'test',
          value: 'UserReputation2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="page-type1-list-area reputation-list mode-reputation">
        <div className="container">
          <div className="page-type1-area-title" id="user-reputation-bolck1">
            我的評價
          </div>
          <div className="page-type1-list-wraper">
            <div className="page-type1-list-title pc-view">
              <div>評價日期</div>
              <div>商品圖片</div>
              <div>商品名稱</div>
              <div>評論</div>
              <div></div>
            </div>
            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">很快就收到商品了，品質很好，與照片相符，包裝也很完整。</div>
                </div>
              </div>
            </div>

            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">很快就收到商品了，品質很好，與照片相符，包裝也很完整。</div>
                </div>
              </div>
            </div>
            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">很快就收到商品了，品質很好，與照片相符，包裝也很完整。</div>
                </div>
              </div>
            </div>
            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">很快就收到商品了，品質很好，與照片相符，包裝也很完整。</div>
                </div>
              </div>
            </div>
            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">很快就收到商品了，品質很好，與照片相符，包裝也很完整。</div>
                </div>
              </div>
            </div>
          </div>
          <FePagination />
        </div>
      </div>

      <div className="page-type1-list-area reputation-orderlist mode-reputation-order">
        <div className="container">
          <div className="page-type1-area-title" id="user-reputation-bolck2">
            待評價訂單
          </div>
          <div className="page-type1-list-wraper">
            <div className="page-type1-list-title pc-view">
              <div>日期</div>
              <div></div>
              <div>訂單編號</div>
            </div>
            <div className="page-type1-list-content">
              <div className="reputation-orderlist-time">2022/01/02</div>
              <div className="reputation-orderlist-ordernumber">20EROVWDCZhV</div>
              <div className="reputation-orderlist-button">
                <Link to="/">評價</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="reputation-orderlist-time">2022/01/02</div>
              <div className="reputation-orderlist-ordernumber">20EROVWDCZhV</div>
              <div className="reputation-orderlist-button">
                <Link to="/">評價</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="reputation-orderlist-time">2022/01/02</div>
              <div className="reputation-orderlist-ordernumber">20EROVWDCZhV</div>
              <div className="reputation-orderlist-button">
                <Link to="/">評價</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="reputation-orderlist-time">2022/01/02</div>
              <div className="reputation-orderlist-ordernumber">20EROVWDCZhV</div>
              <div className="reputation-orderlist-button">
                <Link to="/">評價</Link>
              </div>
            </div>
            <div className="page-type1-list-content">
              <div className="reputation-orderlist-time">2022/01/02</div>
              <div className="reputation-orderlist-ordernumber">20EROVWDCZhV</div>
              <div className="reputation-orderlist-button">
                <Link to="/">評價</Link>
              </div>
            </div>
          </div>
          <FePagination />
        </div>
        <div className="page-type1-list-area reputation-orderlist mode-reputation-order">
          <div className="container">
            <div className="reputation-list-card ">
              <div className="reputation-list-content ">
                <div className="reputation-list-time">2022-03-20</div>
                <div className="reputation-list-prd ">
                  <div className="reputation-list-img">
                    <img src={reputationimg} alt="" />
                  </div>
                  <div className="reputation-list-prdname">金黑波本威士忌</div>
                </div>
                <div className="reputation-list-footer">
                  <div className="reputation-list-star">icon</div>
                  <div className="reputation-list-comment">評論</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserReputation;
