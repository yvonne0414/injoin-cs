import { useState } from 'react';
import ReputationModal from './ReputationModal';
import { Modal } from 'antd';

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

  const { data, setCommit } = props;

  return (
    <>
      <div className="page-type1-list-content">
        <div className="reputation-orderlist-time">{data.order_time}</div>
        <div className="reputation-orderlist-ordernumber">{data.id}</div>
        <div className="reputation-orderlist-button">
          <button onClick={showModal}>評價</button>
          <Modal title={`${data.id}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} wrapClassName={'reputation-orderlist-ratelist'}>
            {data.orderDetailData.map((v, i) => {
              return <ReputationModal key={v.orderDetailId} data={v} userId={data.user_id} orderId={data.id} setCommit={setCommit} />;
            })}
          </Modal>
        </div>
      </div>
    </>
  );
};
export default ReputationOrder;
