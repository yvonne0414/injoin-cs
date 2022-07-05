import './_index.scss';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Step3 = () => {
  return (
    <div className="position-relative cart-bg mt-4 mb-5 py-5">
      <div className="cart-add-info-bg-square"></div>
      <div className="shopping-cart-section ">
        <div className="cart-checkbox-area">
          <div className="cart-checkbox mb-3">
            <FaCheck style={{ width: 32, height: 32 }} />
          </div>
          <div className="finish-checkbox mb-2">完成訂單</div>
          <div className="order-num-check">
            <span>您的訂單編號:123456789xxx</span>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="me-3 me-md-5">
            <Link to="/account/order" className="btn btn-none injoin-btn-outline text-gold p-2 ">
              查看訂單
            </Link>
          </div>
          <div>
            <Link to="/production" className="btn btn-none injoin-btn-outline text-gold p-2">
              繼續購物
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step3;
