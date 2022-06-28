import { Modal } from 'antd';
import { ImUserCheck } from 'react-icons/im';

import GroupPlayItem from './GroupPlayItem';
import './index.scss';

import { useEffect, useState } from 'react';

const FeAuditModal = (props) => {
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
    // console.log('Clicked cancel button');
    setVisible(false);
  };

  // 取得參加者資訊
  const { groupId, groupMaxNum, groupNowNum, groupMember } = props;
  let [groupNum, setGroupNum] = useState(groupNowNum);
  let [isFull, setIsFull] = useState(false);
  useEffect(() => {
    if (groupMaxNum === groupNum) {
      setIsFull(true);
    }
  });
  return (
    <>
      <div className="list-content_btn" title="審查" onClick={showModal}>
        <ImUserCheck />
        {/* 審查 */}
      </div>
      <Modal title="團員審核" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} centered>
        <div className="text-end">
          目前團員：{groupNum} / {groupMaxNum}
        </div>
        <div className="group-player-list">
          {groupMember.map((item) => {
            return <GroupPlayItem key={item.id} data={item} groupId={groupId} setGroupNum={setGroupNum} groupNum={groupNum} isFull={isFull} />;
          })}
        </div>
      </Modal>
    </>
  );
};

export default FeAuditModal;
