import './index.scss';
import FePage1Header from '../../../components/FePage1Header';
import logoimg from '../../../assets/images/shared/injoinlogo.png';

const Login = () => {
  const page1HeaderInfo = {
    titleEn: 'Log in',
    titleCn: '會員登入',
    menuList: [],
    imgs: {
      m: 'login.png',
      pc: 'login.png',
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
        <section className="loginpage">
          <div className="logintitle">
            <div className="page-type1-area-title">登入</div>
          </div>
          <div className="logincard">
            <div className="loginimg">
              <img src={logoimg} alt="" />
            </div>
            <div className="loginfrom">
              <form action="">
                <div className="form-part">
                  <label htmlFor="">姓名</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form-part">
                  <label htmlFor="">密碼</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form-button">
                  <button className='injoin-btn-outline'>登入</button>
                </div>
              </form>
            </div>
            <div className="signup">
            還不是會員 ? 點我 <span>註冊會員</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
