import AboutUser from '../AboutUser';
import HomePage from '../HomePage';

import UserInfo from '../UserInfo';
import UserVip from '../UserVip';
import ChenTest from './ChenTest';

let arr = ['chen', 'paul', 'avery'];
const state = 4;
const Chen = () => {
  return (
    <>
      {state === 1 && <HomePage />}

      {state === 2 && <UserInfo />}

      {state === 3 && <UserVip />}

      {state === 4 && <ChenTest />}
    </>
  );
};

export default Chen;
