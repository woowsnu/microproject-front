import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addUserPostAPI } from "../../lib/api/post";
import styled from "styled-components";
import Button from "../UI/Button";

const PostSucess = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const loginCheck = localStorage.getItem("userId");
    setUserId(loginCheck);
  });

  const title = router.query.title;
  console.log(title);

  const addUserPost = () => {
    const userPost = {
      postTitle: title,
      userId: userId,
    };
    console.log(userPost);
    //POST API 요청 전송, data와 함께
    addUserPostAPI(userPost);
    // 폼에 입력된 상태값 초기화
    router.replace(`/mypage/${userId}`);
  };

  return (
    <Container>
      <div className="wrap">
        <div className="text-area">
          <h1>{userId} 님</h1>
          <h2>{title} 이 저장되었습니다.</h2>
        </div>
        <div className="save-area">
          <Button onClick={addUserPost}>확인</Button>
        </div>
      </div>
    </Container>
  );
};

export default PostSucess;

const Container = styled.div`
  width: 100%;

  .wrap {
    max-width: 960px;
    margin: 200px auto;
  }

  .text-area {
    display: flex;
    flex-direction: column;
  }

  .save-area {
    width: 200px;
    padding-top: 400px;
    float: right;
  }
`;
