import reputationimg from '../../assets/images/fe/userReputation/reputation_1.png';
import { Rate } from 'antd';
import { BE_IMAGE_URL } from '../../utils/config';

const ReputationList = (props) => {
  const { data } = props;
  // const relist = {
  //   img: 'reputation_1.png',
  //   time: '2022-03-20',
  //   name: '金黑波本威士忌',
  //   commit: '很快就收到商品了，品質很好，與照片相符，包裝也很完整。',
  //   star: <Rate disabled defaultValue={2} />,
  // };
  return (
    <div className="reputation-list-content">
      <div className="reputation-list-date">{data.rating_time}</div>
      <div className="reputation-list-name">{data.name}</div>
      <div className="reputation-list-commit">
        <div>
          <Rate value={data.rating} allowHalf disabled />
          <div>{data.content}</div>
        </div>
      </div>
      <div className="reputation-list-img">
        {data.imgList.map((img) => {
          return (
            <div key={img}>
              <img src={`${BE_IMAGE_URL}${img}`} alt="" className="img-fluid object-cover" />
            </div>
          );
        })}
        {/* <div>
          <img src={reputationimg} alt="" className="img-fluid object-cover" />
        </div>
        <div>
          <img src={reputationimg} alt="" className="img-fluid object-cover" />
        </div> */}
      </div>
    </div>
  );
};
export default ReputationList;

{
  /* <div className="reputation-list-card ">
  <div className="reputation-list-content">
    <div className="reputation-list-time">{data.time}</div>
    <div className="reputation-list-prd ">
      <div className="reputation-list-img">
        <img src={reputationimg} alt="" />
      </div>
      <div className="reputation-list-prdname">{data.name}</div>
    </div>
    <div className="reputation-list-footer">
      <div className="reputation-list-star">{data.star}</div>
      <div className="reputation-list-comment">{data.commit}</div>
    </div>
  </div>
</div>; */
}
