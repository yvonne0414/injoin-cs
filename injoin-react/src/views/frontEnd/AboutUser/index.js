import FePage1Header from '../../../components/FePage1Header';
import upperUsericon from '../../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';
import { API_URL, BE_IMAGE_URL } from '../../../utils/config';

import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { message } from 'antd';

// http://localhost:3001/api/auth/about/2
const AboutUser = () => {
  const [isTrue, setIsTrue] = useState(true);

  const { userid } = useParams();
  const [user, setUser] = useState({
    name: '',
    nick: '',
    usermessage: '',
    userimg: '',
  });

  // 設定user id
  // let userid = 1
  useEffect(() => {
    let getuser = async () => {
      let response = await axios.get(`${API_URL}/auth/about/${userid}`);
      // console.log('aa',response.data.datas[0]);
      // console.log(response.data.datas[0].email);
      // console.log(response.data.datas.length);
      let message = '';
      if (response.data.datas[0].about_user == null) {
        // console.log('nope');
        message = '尚未填寫，但是相信我他是個好夥伴';
      } else {
        message = response.data.datas[0].about_user;
      }

      if (response.data.datas.length === 0) {
        setIsTrue(false);
      }
      let newuser = {
        ...user,
        name: response.data.datas[0].name,
        nick: response.data.datas[0].name,
        usermessage: message,
        userimg: response.data.datas[0].user_img,
      };
      setUser(newuser);
    };
    getuser();
  }, []);

  const page1HeaderInfo = {
    titleEn: 'About Member',
    titleCn: `${user.nick}`,
    menuList: [
      {
        href: '#grouplist-bolck2',
        name: `關於 : ${user.nick}`,
      },
    ],
    imgs: {
      m: 'aboutus.jpg',
      pc: 'aboutus.jpg',
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

  // console.log(user);
  // console.log(isTrue);

  return (
    <>
      {!isTrue ? (
        <h1>查無此人</h1>
      ) : (
        <>
          <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
          <div className="container">
            <section className="aboutUser-s1">
              <div className="aboutUser-card">
                <div className="upper-half">
                  <div className="upper-background">
                    <img src={upperBackground} alt="" />
                  </div>
                  <div className="upper-usericon">
                    {user.userimg === null ? <img src={upperUsericon} alt="" /> : <img src={`${BE_IMAGE_URL}${user.userimg}`} alt="" />}
                    {/* <img src={`${BE_IMAGE_URL}${user.userimg}`} alt="" /> */}
                  </div>
                </div>
                <div className="lower-half">
                  <div className="lower-part">
                    <div className="lower-title">暱稱</div>
                    <div className="lower-content">{user.name}</div>
                  </div>
                  <div className="lower-part">
                    <div className="lower-title">關於我</div>
                    <div className="lower-content">{user.usermessage}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      ;
    </>
  );
};

export default AboutUser;
