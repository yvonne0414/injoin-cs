import FePage1Header from '../../../components/FePage1Header';

const CouponDetail = () => {
  // header 資料
  const page1HeaderInfo = {
    titleEn: 'CouponDetail',
    titleCn: '優惠詳細',
    menuList: [
      {
        href: '#',
        name: '優惠詳細',
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
      selected: '',
      selectOptions: [
        {
          name: '',
          value: '',
        },
      ],
    },
  };
  const { titleEn, titleCn, menuList, imgs, pageSelector } = page1HeaderInfo;
  return (
    <>
      <FePage1Header titleEn={titleEn} titleCn={titleCn} menuList={menuList} imgs={imgs} pageSelector={pageSelector} />
    </>
  );
};
export default CouponDetail;
