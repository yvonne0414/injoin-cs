// scss
import './_index.scss';

// component
import FePage1Header from '../../../components/FePage1Header';

import { Input, Collapse } from 'antd';

import { AiOutlineArrowUp } from 'react-icons/ai';

const { Panel } = Collapse;

const ChatRoom = () => {
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
  const user = 2;
  const data = {
    name: '一起喝酒啦！',
    members: [
      {
        userId: 1,
        name: '王小明',
        userImg: 'about-us-img-1.png',
      },
      {
        userId: 2,
        name: '林曉宏',
        userImg: 'about-us-img-2.png',
      },
      {
        userId: 3,
        name: '周宇成',
        userImg: 'about-us-img-3.png',
      },
    ],
    dialogues: [
      {
        userId: 1,
        name: '王小明',
        userImg: 'about-us-img-1.png',
        content: '你好',
      },
      {
        userId: 1,
        name: '王小明',
        userImg: 'about-us-img-1.png',
        content: '一起玩嗎？',
      },
      {
        userId: 2,
        name: '林曉宏',
        userImg: 'about-us-img-2.png',
        content: '什麼時候呀？',
      },
      {
        userId: 3,
        name: '周宇成',
        userImg: 'about-us-img-3.png',
        content: '走呀！',
      },
    ],
  };

  const onSearch = (value) => console.log(value);
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="mt-5 pt-md-5">
        <div className="container">
          <div className="page-type1-area-title" id="chatroom-bolck1">
            聊天室
          </div>
          <h5 className="mb-3">團名</h5>
          <div className="chatroom-area">
            <Collapse bordered={false} defaultActiveKey={['1']} className="mb-4">
              <Panel header="揪團成員" key="1">
                <div className="group-member-area">
                  {data.members.map((member) => {
                    return (
                      <div className="group-member" key={member.userId}>
                        <div className="user-img">
                          <img src={require(`../../../assets/images/fe/aboutus/${member.userImg}`)} alt="userImg" className="img-fluid object-cover" />
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
                {data.dialogues.map((dialogue, i) => {
                  return (
                    <div className={`dialogue ${dialogue.userId === user && 'own'}`} key={i}>
                      <div className="dialogue-user">
                        <div className="user-img">
                          <img src={require(`../../../assets/images/fe/aboutus/${dialogue.userImg}`)} alt="userImg" className="img-fluid object-cover" />
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
              </div>
              <Search
                onSearch={onSearch}
                style={{
                  width: '100%',
                }}
                enterButton={suffix}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatRoom;
