import { FE_IMAGE_URL } from '../../utils/config';

const HomeBartdCard = () => {
  return (
    <>
      <div className="homepages4-card">
        <div className="homeapges4-card">
          <div className="card-img">
            <img src={`${FE_IMAGE_URL}/homepage/s4-img.png`} alt="" />
          </div>
          <div className="card-content">[ 西班牙式琴通寧 ]</div>
        </div>
      </div>
    </>
  );
};

export default HomeBartdCard;
