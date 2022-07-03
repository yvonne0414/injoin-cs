import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import webSocket from 'socket.io-client';
import axios from 'axios';
import { API_URL, BE_IMAGE_URL } from '../../../utils/config';

import LogoutPage from '../LogoutPage/LogoutPage.js';
import { userState } from '../../../App';

// scss
import './_index.scss';

// component
import FePage1Header from '../../../components/FePage1Header';

import { Input, Collapse } from 'antd';

import { AiOutlineArrowUp } from 'react-icons/ai';

const { Panel } = Collapse;

const ChatRoom = () => {
  const navigate = useNavigate();
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'chatroom',
    titleCn: '聊天室',
    menuList: [
      {
        href: '#chatroom-bolck1',
        name: '聊天室',
      },
    ],
    imgs: {
      m: 'group-list-header-m.png',
      pc: 'group-list-header.png',
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
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;

  // 檢查登入
  const [isLogin, setisLogin] = useState('');
  const loginInfo = useContext(userState);

  // input
  const { Search } = Input;
  const suffix = (
    <AiOutlineArrowUp
      style={{
        fontSize: 16,
        color: '#ffdb96',
      }}
    />
  );

  // 假資料
  const [memberInfo, setMemberInfo] = useState({
    userId: loginInfo.islogin ? loginInfo.member.id : -1,
    // userImg: loginInfo.islogin ? loginInfo.member.id : '',
    username: loginInfo.islogin ? loginInfo.member.name : '',
  });

  // seketio
  const { groupId } = useParams();
  const [ws, setWs] = useState(webSocket('http://localhost:3001'));

  // const connectWebSocket = () => {
  //   //開啟
  //   setWs(webSocket('http://localhost:3001'));
  // };

  const disConnectWebSocket = () => {
    //向 Server 送出申請中斷的訊息，讓它通知其他 Client
    ws.emit('disConnection', memberInfo.userId, groupId);
    navigate(-1);
  };

  useEffect(() => {
    //開啟ws
    setWs(webSocket('http://localhost:3001'));
    getChatList();
  }, []);

  useEffect(() => {
    // TODO: 撈資料 取得歷史對話、chatId
    if (ws) {
      //連線成功在 console 中打印訊息
      // console.log('success connect!');
      //設定監聽
      initWebSocket();

      // 進入房間
      let room = groupId;
      if (room !== '') {
        ws.emit('addRoom', room);
      }
    }
  }, [ws]);

  useEffect(() => {
    return () => {
      // console.log('ChatRoom - useEffect');
      // 離開前關掉ws
      // console.log('disConnection');
      ws.close();
    };
  }, []);

  const initWebSocket = () => {
    //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
    ws.on('getMessage', (message) => {
      // console.log(message);
      getChatList();
      // scrollToBottom();
    });

    ws.on('addRoom', (message) => {
      console.log(message);
    });

    //以 leaveRoom 接收有使用者離開聊天的訊息
    ws.on('leaveRoom', (message) => {
      // TODO: 在線過程中對歷史陣列push新對話

      console.log(message);
    });
    // Server 通知完後再傳送 disConnection 通知關閉連線
    ws.on('disConnection', () => {
      ws.close();
    });
  };

  let [searchValue, setSearchValue] = useState('');
  const sendMessage = (value) => {
    if (!value) {
      return;
    }
    // console.log(groupId);
    let now = new Date().toLocaleString('zh-TW', {
      hour12: false,
      timeZone: 'Asia/Taipei', // 台灣
    });
    let message = {
      chatId: info.chatId,
      content: value,
      groupId: groupId,
      msgTime: now,
      name: memberInfo.username,
      userId: memberInfo.userId,
      userImg: memberInfo.userImg,
    };
    //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    ws.emit('getMessage', message, groupId);
    setSearchValue('');
  };
  // 傳完到最底部
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // TODO: 打api先從資料庫取出歷史聊天記錄
  let [data, setData] = useState([]);
  let [members, setMembers] = useState([]);
  let [info, setInfo] = useState({});

  const getChatList = async () => {
    let response = await axios.get(`${API_URL}/group/chat/${groupId}`, {
      params: {
        userId: memberInfo.userId,
      },
    });
    setData(response.data.data);
    setMembers(response.data.members);
    setInfo(response.data.info[0]);
    // console.log(response.data.data);
    // console.log(response.data.info[0]);
    // console.log(response.data.members);
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  // const onSearch = (value) => console.log(value);
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="mt-5 pt-md-5">
        <div className="container">
          <div className="page-type1-area-title" id="chatroom-bolck1">
            聊天室
          </div>
          <h5 className="mb-3">{info && info.name}</h5>

          <div className="chatroom-area">
            <Collapse bordered={false} defaultActiveKey={['1']} className="mb-4">
              <Panel header="揪團成員" key="1">
                <div className="group-member-area">
                  {members.map((member) => {
                    return (
                      <div className="group-member" key={member.userId}>
                        <div className="user-img">
                          <img src={`${BE_IMAGE_URL}${member.userImg}`} alt="userImg" className="img-fluid object-cover" />
                        </div>
                        <span>{member.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Panel>
            </Collapse>

            <div className="dialogue-area">
              <div className="dialogue-list">
                {data.map((dialogue, i) => {
                  return (
                    <div className={`dialogue ${dialogue.userId === memberInfo.userId && 'own'}`} key={i}>
                      <div className="dialogue-user">
                        <div className="user-img">
                          <img src={`${BE_IMAGE_URL}${dialogue.userImg}`} alt="userImg" className="img-fluid object-cover" />
                        </div>
                        <span>{dialogue.name}</span>
                      </div>
                      <div className="dialogue-content">
                        <span className="dialogue-content-shape"></span>
                        <span>{dialogue.content}</span>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
              <Search
                onSearch={sendMessage}
                onChange={() => {
                  setSearchValue();
                }}
                style={{
                  width: '100%',
                }}
                value={searchValue}
                enterButton={suffix}
              />
            </div>
          </div>
          <button onClick={disConnectWebSocket} className="back-page btn btn-none mt-3">
            <div>
              <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
                />
              </svg>
            </div>
            <span className="ms-3 ff-cn-main">返回上一頁</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ChatRoom;
