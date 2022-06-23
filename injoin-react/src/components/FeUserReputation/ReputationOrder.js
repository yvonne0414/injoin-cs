import { useState } from 'react';
import ReputationModal from './ReputationModal';
import { Modal } from 'antd';
import { Rate } from 'antd';

const ReputationOrder = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { data } = props;
  // const repuord = {
  //   time: '2022/01/02',
  //   ordernumber: '20EROVWDCZhV',
  // };
  const modalarr = [
    { id: 1, name: '金黑波本威士忌', star: <Rate /> },
    { id: 2, name: '金黑波本威士忌', star: <Rate /> },
    { id: 3, name: '金黑波本威士忌', star: <Rate /> },
  ];

  return (
    <>
      <div className="page-type1-list-content">
        <div className="reputation-orderlist-time">{data.time}</div>
        <div className="reputation-orderlist-ordernumber">{data.ordernumber}</div>
        <div className="reputation-orderlist-button">
          <button onClick={showModal}>評價</button>
          <Modal title={`訂單編號: ${data.ordernumber}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {modalarr.map((v, i) => {
              return <ReputationModal key={v.id} data={v} />;
            })}
          </Modal>
        </div>
      </div>
    </>
  );
};
export default ReputationOrder;
