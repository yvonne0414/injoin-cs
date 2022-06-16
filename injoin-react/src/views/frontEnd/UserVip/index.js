import './index.scss';
import FePage1Header from '../../../components/FePage1Header';

const page1HeaderInfo = {
  titleEn: 'VIP',
  titleCn: '會員等級說明',
  menuList: [
    {
      href: '#grouplist-bolck1',
      name: '如何成為VIP會員',
    },
    {
      href: '#grouplist-bolck2',
      name: '會員等級權益',
    },
    {
      href: '#grouplist-bolck2',
      name: '注意事項',
    },
  ],
  imgs: {
    m: 'uservip.png',
    pc: 'uservip.png',
  },
  pageSelector: {
    isShow: true,
    pageParent: {
      href: '/',
      name: '會員中心',
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
const UserVip = () => {
  return <>
  <div className="container">
  <FePage1Header className="d-none" titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
  </div>
  </>;
};
export default UserVip;
