import { Modal } from 'antd';
import { ImUserCheck } from 'react-icons/im';

import GroupPlayItem from './GroupPlayItem';
import './index.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

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
  const { groupId, groupMaxNum, groupNowNum, groupMember, userId } = props;
  let [groupNum, setGroupNum] = useState(groupNowNum);
  let [isFull, setIsFull] = useState(false);
  useEffect(() => {
    if (groupMaxNum === groupNum) {
      setIsFull(true);
    }
  });

  // 開啟madol時，取得參加者資訊
  let [memberData, setMemberData] = useState([]);
  const getGroupMemberList = async () => {
    let response = await axios.get(API_URL + '/group/memberlist/' + groupId);
    setMemberData(response.data.data);
    // console.log(memberData);
  };

  useEffect(() => {
    getGroupMemberList();
  }, [visible]);

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
          {memberData.map((item) => {
            return <GroupPlayItem key={item.id} data={item} groupId={groupId} setGroupNum={setGroupNum} groupNum={groupNum} isFull={isFull} />;
          })}
        </div>
      </Modal>
    </>
  );
};

export default FeAuditModal;
