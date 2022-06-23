import './index.scss';
import logo from '../../assets/images/shared/injoinlogo-a.png';
function BeHeader() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-4">
        <div className="header-line"></div>
        <div className="w-25 px-2" style={{ maxWidth: '14rem', zIndex: 2, backgroundColor: '#000' }}>
          <img src={logo} alt="" className="img-fluid object-cover" />
        </div>
      </div>
    </>
  );
}
export default BeHeader;
