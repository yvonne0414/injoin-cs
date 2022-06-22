import './index.scss';
import FePage1Header from '../../../components/FePage1Header';

const Sighup = () => {
  const page1HeaderInfo = {
    titleEn: 'Sign up',
    titleCn: '會員註冊',
    menuList: [],
    imgs: {
      m: 'signup.png',
      pc: 'signup.png',
    },
    pageSelector: {
      isShow: false,
      pageParent: {
        href: '/',
        name: '首頁',
      },
      selected: 'groupList',
      selectOptions: [
        {
          name: '揪團專區',
          value: 'groupList',
        },
        {
          name: 'test',
          value: 'groupList2',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  return (
    <>
      <div className="container">
        {/* <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} /> */}
        <section className="signuppage">
          <div className="signuptitle">
            <div className="page-type1-area-title">註冊</div>
          </div>
          <div className="sighupcard">
            <div className="signupfomr">
              <div className="form-part">
                <label htmlFor="">姓名</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-button">
                <button className="injoin-btn-outline">登入</button>
              </div>
            </div>
          </div>
          <div className="login">
            已經是會員 ? 點我 <span>登入會員</span>
          </div>
        </section>
        <section className="notice">注意事項 : ※未滿18歲請勿註冊。 ※本頁面只提供會員註冊，如要修改會員資料請至會員中心 > 會員資料，進行更新。</section>
      </div>
    </>
  );
};

export default Sighup;
