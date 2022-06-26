import React from "react";

const Lnb = (props) => {
  return (
    <div className="lnb">
      <div className="user">
        <h3>{props.user} 님</h3>
        <hr />
      </div>
      <div className="menus">
        <div className="menu">내가 작성한 글</div>
        <div className="menu">회원정보 수정</div>
      </div>
    </div>
  );
};

export default Lnb;
