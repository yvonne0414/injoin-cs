import './index.scss';

const FePage1Header = (props) => {
  const { titleEn, titleCn, menuList, imgs, pageSelector } = props;
  let titleEnCaption = titleEn.substring(0, 1).toUpperCase();
  let titleEnContent = titleEn.substring(1).toLowerCase();
  let selectOptions = pageSelector.selectOptions;

  return (
    <div className="page-type1-header">
      {pageSelector.isShow && (
        <div className="page-type1-header-select text-end me-2 me-md-5">
          <span className="mx-2">{pageSelector.pageParent.name}</span>/
          <select defaultValue={pageSelector.selected} className="mx-2 px-2">
            {selectOptions.map((selectOption) => {
              return (
                <option key={selectOption.value} value={selectOption.value}>
                  {selectOption.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="container">
        <div className="page-type1-header-content">
          <div className="page-type1-header-content-title">
            <div className="page-type1-header-content-title-en">
              <span>{titleEnCaption}</span>
              {titleEnContent}
            </div>
            <div className="page-type1-header-content-title-cn">{titleCn}</div>
          </div>
          <ul className="list-unstyled page-type1-header-content-menu">
            {menuList.map((menu, i) => {
              return (
                <li key={i} className={i === 0 ? 'active' : ''}>
                  <a href={menu.href} value={i}>
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="page-type1-header-img">
        <img src={`images/fe/page1header/${imgs.m}`} className="img-fluid object-cover m-view" alt={imgs.m} />
        <img src={`images/fe/page1header/${imgs.pc}`} className="img-fluid object-cover pc-view" alt={imgs.pc} />
        <div className="page-type1-header-img-mask"></div>
      </div>
    </div>
  );
};
export default FePage1Header;
