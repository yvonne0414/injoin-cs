const ReputationOrder = (props) => {
  const { data } = props;
  // const repuord = {
  //   time: '2022/01/02',
  //   ordernumber: '20EROVWDCZhV',
  // };
  return (
    <>
      <div className="page-type1-list-content">
        <div className="reputation-orderlist-time">{data.time}</div>
        <div className="reputation-orderlist-ordernumber">{data.ordernumber}</div>
        <div className="reputation-orderlist-button">
          <button>評價</button>
        </div>
      </div>
    </>
  );
};
export default ReputationOrder;
