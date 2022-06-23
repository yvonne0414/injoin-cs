import { Pagination } from 'antd';
import { useState } from 'react';

function BePagination(props) {
  const { pagination, current, setCurrent } = props;

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination simple current={current} onChange={onChange} total={pagination.total} pageSize={8} />;
}
export default BePagination;
