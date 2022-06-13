import './index.scss';
import logoImg from '../../assets/images/shared/injoinlogo.png';
function FeFooter() {
  return (
    <footer className="footer-wraper">
      <div className="footer-content-wraper footer-email">
        <span className="footer-title">聯絡信箱</span>
        <span className="footer-content">INJOIN@gmail.com</span>
      </div>
      <div className="footer-content-wraper footer-time">
        <span className="footer-title">營業時間</span>
        <span className="footer-content">週一到週日 2:00pm~10:00pm</span>
      </div>
      <div className="footer-content-wraper footer-logo">
        <div>
          <img src={logoImg} alt="logo" />
        </div>
        <hr className="m-view text-white w-100" />
        <span className="fw-lighter mt-4">©2022 INJOIN All right reserved</span>
      </div>
      <div className="footer-content-wraper pc-view footer-phone">
        <span className="footer-title">聯絡電話</span>
        <span className="footer-content">(02)2230-0246</span>
      </div>
      <div className="footer-content-wraper pc-view footer-address">
        <span className="footer-title">門市地址</span>
        <span className="footer-content">台北市文山區萬芳路60-18號</span>
        <span className="footer-content">（萬芳社區捷運站出口旁）</span>
      </div>
    </footer>
  );
}
export default FeFooter;
