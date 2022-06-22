import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { useState } from 'react';

// img
import memberGroupImg3 from '../../assets/images/fe/groupList/group-list-img-3.png';

const GroupPlayItem = () => {
  const [isCheck, setIsCheck] = useState(false);
  function checkPlayer() {
    setIsCheck(!isCheck);
  }
  return (
    <>
      <div className="group-player-item">
        <div className="group-player-item-info">
          <div className="group-player-item-info-img">
            <img src={memberGroupImg3} alt="" className="img-fluid object-cover" />
          </div>
          <div className="fs-6">王心凌</div>
          <div className={`group-player-item-info-status ${isCheck && 'checked'}`}>{isCheck ? '參與中' : '審核中'}</div>
        </div>
        <div className="group-player-item-function">
          <button className="btn" onClick={checkPlayer}>
            {isCheck ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
          </button>
        </div>
      </div>
    </>
  );
};
export default GroupPlayItem;
