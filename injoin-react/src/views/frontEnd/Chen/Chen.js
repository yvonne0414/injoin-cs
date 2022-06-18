import HomePage from '../HomePage';
import UserInfo from '../UserInfo';

let arr = ['chen', 'paul', 'avery'];
const Chen = () => {

  return (
    <>
      {/* < HomePage/> */}

      {/* <UserInfo /> */}
      {arr.map((v,i)=>{
        return(
          <div className="apple" onClick={()=>{
            console.log({v})
          }}>
            {v}
          </div>
        )
      })}
    </>
  );
};

export default Chen;
