const UserInfoChangePasswd = () => {
  return (
    <>
      <form className="changepassword" action="">
        <div className="changetable">
          <div className="changepart">
            <label htmlFor="originallypassword">原始密碼</label>
            <input type="originallypassword" name="originallypassword" id="" />
            <div className="changepart">
              <label htmlFor="newpassword">新密碼</label>
              <input type="newpassword" name="newpassword" id="" />
            </div>
          </div>
          <div className="changepart">
            <label htmlFor="confirmpassword">確認新密碼</label>
            <input type="confirmpassword" name="confirmpassword" id="" />
          </div>
        </div>
        <button className="injoin-btn-outline" onClick={(e)=>e.preventDefault}>更改密碼</button>
      </form>
    </>
  );
};

export default UserInfoChangePasswd;
