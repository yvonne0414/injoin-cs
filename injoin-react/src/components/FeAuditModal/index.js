import { Modal } from 'antd';
import { ImUserCheck } from 'react-icons/im';
import { useState } from 'react';

import GroupPlayItem from './GroupPlayItem';
import './index.scss';

const FeAuditModal = () => {
  // modal
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const arr = [1, 2, 3];
  return (
    <>
      <div className="list-content_btn" title="審查" onClick={showModal}>
        <ImUserCheck />
        {/* 審查 */}
      </div>
      <Modal title="團員審核" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} centered>
        <div className="group-player-list">
          {arr.map((item) => {
            return <GroupPlayItem key={item} />;
          })}
        </div>
      </Modal>
    </>
  );
};

export default FeAuditModal;
