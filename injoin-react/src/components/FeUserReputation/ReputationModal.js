import react from 'react';
import { Rate } from 'antd';
import reputationimg from '../../assets/images/fe/userReputation/reputation_1.png';

const ReputationModal = (props) => {
  const { data } = props;
  // const reModal = {
  //   name: '金黑波本威士忌',
  //   star: <Rate />,
  // };
  return (
    <>
      <div className="reputation-pop ">
        <div className="container">
          <div className="reputation-pop-content">
            <div className="reputation-pop-img">
              <img src={reputationimg} alt="" />
            </div>
            <div className="reputation-pop-prd">
              <div className="reputation-pop-tittle"> {data.name}</div>
              <div className="reputation-pop-star">
                評價
                {data.star}
              </div>
            </div>
            <div>
              <div className="reputation-pop-commit">
                <span>評論</span>
                <textarea cols="30" className="reputation-pop-commit-context"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReputationModal;
