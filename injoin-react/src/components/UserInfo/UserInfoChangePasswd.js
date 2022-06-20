import { Cascader, Input, Space } from 'antd';

const UserInfoChangePasswd = () => {
  const UserInfoChangePasswdArr = [
    { cn: '原始密碼', en: 'originallypassword' },
    { cn: '新密碼', en: 'newpassword' },
    { cn: '確認新密碼', en: 'confirmpassword' },
  ];

  return (
    <>
      <form className="userInfo-changepassword" action="" onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <div className="change-table">
          <Space direction="vertical">
            {UserInfoChangePasswdArr.map((v, i) => {
              return (
                <div className="change-part">
                  <div className="change-name">{v.cn}</div>
                  <Input.Password className="chenge-input" key={i} placeholder={v.cn} />
                </div>
              );
            })}
          </Space>
        </div>
        <div className="change-input">
          <button className="injoin-btn-outline" onClick={(e) => e.preventDefault}>
            更改密碼
          </button>
        </div>
      </form>
    </>
  );
};

export default UserInfoChangePasswd;
