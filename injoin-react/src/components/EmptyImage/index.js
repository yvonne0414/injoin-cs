import { Empty } from 'antd';

const EmptyImage = (props) => {
  const { discText } = props;
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_DEFAULT}
      imageStyle={{
        height: 60,
      }}
      description={<span>{discText}</span>}
    />
  );
};
export default EmptyImage;
