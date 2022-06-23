import { FE_IMAGE_URL } from '../../utils/config';

const HomeHotCard = () => {
  const obj = {
    prdimg: 's3-img.png',
    ordname: 'Porton mosto verde',
  };
  return (
    <>
      <div className="homepages3-card">
        <div className="card-img">
          <img src={`${FE_IMAGE_URL}/homepage/${obj.prdimg}`} />
        </div>

        <div className="card-title">[ {obj.ordname} ]</div>
      </div>
    </>
  );
};

export default HomeHotCard;
