import { FE_IMAGE_URL } from '../../utils/config';

const UserInfoTask = () => {
  const UserInfoVipLevel = {
    vipLevel: 1,
    vipcount:1,
    vipmoney:5000,
    vipMessage: `達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
    <hr />
    達成條件：整年度累積實際消費達 NT$ 5,000，且交易次數達 2 次以上。`,
  };
  return (
    <>
      <div className="page-type1-area-title" id="#">
        年度升級任務
      </div>
      <div className="levelLight"></div>
      <div className="userInfo-task ">
        <div className="levelicon">
          <img src={`${FE_IMAGE_URL}/membercenter/memberlevelgold.png`} alt="" />
        </div>
        <div className="levelcontent">
          <div className="leveltitle">黃金會員</div>
          <div className="levelstate">已達成</div>
          <div className="levelcontextm">已升級為黃金會員</div>
        </div>
      </div>
      <div className="userInfo-task">
        <div className="levelicon">
          <img src={`${FE_IMAGE_URL}/membercenter/memberlevelplatinum.png`} alt="" />
        </div>
        <div className="levelcontent">
          <div className="leveltitle">黃金會員</div>
          <div className="levelstate">已達成</div>
          <div className="levelcontextm">
            達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
            <hr />
            達成條件：整年度累積實際消費達 NT$ 5,000，且交易次數達 2 次以上。
          </div>
        </div>
      </div>
      <div className="userInfo-task">
        <div className="levelicon">
          <img src={`${FE_IMAGE_URL}/membercenter/memberleveldim.png`} alt="" />
        </div>
        <div className="levelcontent">
          <div className="leveltitle">黃金會員</div>
          <div className="levelstate">已達成</div>
          <div className="levelcontextm">
            達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
            <hr />
            達成條件：整年度累積實際消費達 NT$ 5,000，且交易次數達 2 次以上。
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoTask;
