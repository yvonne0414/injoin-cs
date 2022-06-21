import { FE_IMAGE_URL } from '../../utils/config';

const HomeHotCard = () => {
  return (
    <>
      <div className="homepages3-card">
        <div className="card-img">
          <img src={`${FE_IMAGE_URL}/homepage/s3-img.png`} />
        </div>

        <div className="card-title">[ Porton mosto verde ]</div>
      </div>
    </>
  );
};

export default HomeHotCard;
