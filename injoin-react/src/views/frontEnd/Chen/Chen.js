import AboutUser from '../AboutUser';
import HomePage from '../HomePage';
import Login from '../Login';
import Sighup from '../Signup';
import UserInfo from '../UserInfo';
import UserVip from '../UserVip';
import ChenTest from './ChenTest';



let arr = ['chen', 'paul', 'avery'];
const state = 7;
const Chen = () => {
  return (
    <>
      {state === 1 && <HomePage />}

      {state === 2 && <UserInfo />}

      {state === 3 && <UserVip />}

      {state === 4 && <ChenTest />}

      {state === 5 && <Login />}

      {state === 6 && <Sighup />}
      {state === 7 && <AboutUser />}
      
      
    
    </>
  );
};

export default Chen;
