import FePage1Header from '../../../components/FePage1Header';
import upperUsericon from '../../../assets/images/fe/membercenter/usericon.png';
import upperBackground from '../../../assets/images/fe/membercenter/UserInfo-AboutCard.jpg';


import './index.scss';
const AboutUser = () => {
  const user = {
    name: 'chen',
    nick: 'Cheer',
    usermessage: 'Helllo',
  };

  const page1HeaderInfo = {
    titleEn: 'AboutMember',
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
  return (
    <>
      <div className="container">
        <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
        <section className="aboutUser-s1">
          <div className="aboutUser-card">
            <div className="upper-half">
              <div className="upper-background"><img src={upperBackground} alt="" /></div>
              <div className="upper-usericon"><img src={upperUsericon} alt="" /></div>
            </div>
            <div className="lower-half">
              <div className="lower-part">
                <div className="lower-title">暱稱</div>
                <div className="lower-content">Chen</div>
              </div>
              <div className="lower-part">
                <div className="lower-title">關於我</div>
                <div className="lower-content">Helllo</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUser;
