import { BE_IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';

const HomeBartdCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="homepages4-card">
        <Link to={`bartending/${data.id}`}>
          <div className="card-img">
            <img src={`${BE_IMAGE_URL}${data.img}`} alt="" />
          </div>
          <div className="card-content">{data.name}</div>
        </Link>
      </div>
    </>
  );
};

export default HomeBartdCard;
