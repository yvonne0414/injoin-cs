import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

// img
import memberGroupImg3 from '../../assets/images/fe/groupList/group-list-img-3.png';

import { message } from 'antd';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, BE_IMAGE_URL } from '../../utils/config';

const GroupPlayItem = (props) => {
  const { data, groupId, setGroupNum, groupNum, isFull } = props;

  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    setIsCheck(Boolean(data.audit_status));
  }, [data]);

  async function checkPlayer() {
    // console.log(isFull);
    if (isFull) {
      // console.log('in');
      message.info('人員已滿');
      return;
    }
    if (isCheck) {
      message.info('已加入');
      return;
    }
    let res = await axios.post(`${API_URL}/group/checkmember/${groupId}`, { memberId: data.user_id });
    console.log(res.data);
    if (res.data.code === 0) {
      setIsCheck(true);
      setGroupNum(groupNum + 1);
    }
  }

  return (
    <>
      <div className="group-player-item">
        <div className="group-player-item-info">
          <div className="group-player-item-info-img">
            <img src={`${BE_IMAGE_URL}${data.user_img}`} alt="" className="img-fluid object-cover" />
          </div>
          <div className="fs-6 group-player-item-info-name">
            <span>{data.name}</span>
          </div>
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
