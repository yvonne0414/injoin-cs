// scss
import './index.scss';

// component
import FePage1Header from '../../../components/FePage1Header';
// import FePagination from '../../../components/FePagination1';

const GroupDetail = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'details',
    titleCn: '揪團資訊',
    menuList: [
      {
        href: '#groupdetail-bolck1',
        name: '活動詳細內容',
      },
      {
        href: '#groupdetail-bolck2',
        name: '報名參加',
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
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
      <div className="container">
        <div className="page-type1-area-title" id="grouplist-bolck1">
          活動詳細內容
        </div>
      </div>
    </>
  );
};
export default GroupDetail;
