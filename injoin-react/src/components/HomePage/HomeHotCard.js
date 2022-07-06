import { BE_IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';

const HomeHotCard = (props) => {
  const { data } = props;
  // const obj = {
  //   prdimg: 's3-img.png',
  //   ordname: 'Porton mosto verde',
  // };
  return (
    <>
      <div className="homepages3-card">
        <Link to={`production/${data.id}`}>
          <div className="card-img">
            <img src={`${BE_IMAGE_URL}/production/${data.main_img}`} alt="" />
          </div>

          <div className="card-title">{data.name}</div>
        </Link>
      </div>
    </>
  );
};

export default HomeHotCard;
