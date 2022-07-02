import { useEffect } from 'react';
import AboutUser from '../AboutUser';
import Bartending from '../Bartending';
import HomePage from '../HomePage';
import Login from '../Login';
import Sighup from '../Signup';
import UserInfo from '../UserInfo';
import UserLike from '../UserLike';
import UserVip from '../UserVip';
import ChenTest from './ChenTest';


let arr = ['chen', 'paul', 'avery'];
const state = 9;
const Chen = () => {
  // useEffect(() => {
  //   // localStorage.setItem("userLike",JSON.stringify({}))
  //   let aarr = JSON.parse(localStorage.getItem('userLike'));
  //   console.log('chen', aarr);
  //   aarr = [...aarr, { apple: 1 }];
  //   console.log('new aarr', aarr);
  //   localStorage.setItem('userLike', JSON.stringify(aarr));
  //   console.log('new aarr', aarr);
  // }, []);
  return (
    <>
      {state === 1 && <HomePage />}

      {state === 2 && <UserInfo />}

      {state === 3 && <UserVip />}

      {state === 4 && <ChenTest />}

      {state === 5 && <Login />}

      {state === 6 && <Sighup />}
      {state === 7 && <AboutUser />}
      {state === 8 && <UserLike />}
      {state === 9 && <Bartending />}
    </>
  );
};

export default Chen;
