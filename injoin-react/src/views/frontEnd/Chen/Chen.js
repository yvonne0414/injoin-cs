import AboutUser from '../AboutUser';
import HomePage from '../HomePage';
import Login from '../Login';
import Sighup from '../Signup';
import UserInfo from '../UserInfo';
import UserVip from '../UserVip';

let arr = ['chen', 'paul', 'avery'];
const state = 5;
const Chen = () => {
  return (
    <>
      {state === 1 && <HomePage />}

      {state === 2 && <UserInfo />}

      {state === 3 && <UserVip />}

      {state === 4 && <Login />}

      {state === 5 && <Sighup />}

    </>
  );
};

export default Chen;
