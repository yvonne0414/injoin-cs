import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { userState } from '../../App';
import { API_URL, FE_IMAGE_URL } from '../../utils/config';

const UserInfoTask = () => {
  const userstate = useContext(userState);
  // let vip_level =userstate.member.vip_level || 1 ;
  // console.log("task",vip_level);
  const [UserInfoVipLevel,setUserInfoVipLevel ]= useState({
    vipLevel: 1,
    vipcount: 1,
    vipmoney: 5000,
  })


// console.log('userstate',userstate);
  
  useEffect(()=>{
    let getUser= async()=>{
      // console.log(userstate.member.id);
      let res =await axios.get(`${API_URL}/auth/about?userid=${userstate.member.id}`)
      // console.log(res.data[0].vip_level);
      setUserInfoVipLevel({...UserInfoVipLevel,vipLevel:res.data[0].vip_level})
    }
    getUser()
  
  },[userstate.member])
 
  return (
    <>
      <div className="page-type1-area-title" id="#">
        年度升級任務
      </div>
      <div className="levelLight"></div>

      {UserInfoVipLevel.vipLevel === 1 && (
        <div>
          <div className="userInfo-task active">
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
              <div className="leveltitle">柏金會員</div>
              <div className="levelstate text-danger">進行中</div>
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
              <div className="leveltitle">鑽石會員</div>
              <div className="levelstate text-danger">進行中</div>
              <div className="levelcontextm">
                達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
                <hr />
                達成條件：整年度累積實際消費達 NT$ 7000，且交易次數達 4 次以上。
              </div>
            </div>
          </div>
        </div>
      )}
      {UserInfoVipLevel.vipLevel === 2 && (
        <div>
          <div className="userInfo-task">
            <div className="levelicon">
              <img src={`${FE_IMAGE_URL}/membercenter/memberlevelgold.png`} alt="" />
            </div>
            <div className="levelcontent">
              <div className="leveltitle">黃金會員</div>
              <div className="levelstate">已達成</div>
              <div className="levelcontextm">已升級為黃金會員</div>
            </div>
          </div>
          <div className="userInfo-task active">
            <div className="levelicon">
              <img src={`${FE_IMAGE_URL}/membercenter/memberlevelplatinum.png`} alt="" />
            </div>
            <div className="levelcontent ">
              <div className="leveltitle">柏金會員</div>
              <div className="levelstate">已達成</div>
              <div className="levelcontextm">已升級為柏金會員</div>
            </div>
          </div>
          <div className="userInfo-task">
            <div className="levelicon">
              <img src={`${FE_IMAGE_URL}/membercenter/memberleveldim.png`} alt="" />
            </div>
            <div className="levelcontent">
              <div className="leveltitle">鑽石會員</div>
              <div className="levelstate text-danger">進行中</div>
              <div className="levelcontextm">
                達成任務可立即升級為鉑金會員，會員期限會延續至下一個年度
                <hr />
                達成條件：整年度累積實際消費達 NT$ 7000，且交易次數達 4 次以上。
              </div>
            </div>
          </div>
        </div>
      )}
      {UserInfoVipLevel.vipLevel === 3 && (
        <div>
          <div className="userInfo-task">
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
              <div className="leveltitle">柏金會員</div>
              <div className="levelstate">已達成</div>
              <div className="levelcontextm">已升級為柏金會員</div>
            </div>
          </div>
          <div className="userInfo-task active">
            <div className="levelicon">
              <img src={`${FE_IMAGE_URL}/membercenter/memberleveldim.png`} alt="" />
            </div>
            <div className="levelcontent">
              <div className="leveltitle">鑽石會員</div>
              <div className="levelstate">已達成</div>
              <div className="levelcontextm">已升級為鑽石會員</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfoTask;
