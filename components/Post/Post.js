import React, { useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import fonts from "../../styles/fonts";

import Button from "../../components/UI/Button";
import { addPostAPI } from "../../lib/api/post";

const Post = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState(1);

  // new Date의 날짜 포맷 지정
  const today = new Date();

  function getToday() {
    var year = today.getFullYear();
    var month = ("0" + (1 + today.getMonth())).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }
  // 오늘 날짜 넘겨줌
  const date = getToday(today);

  // 제목
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // 본문
  const descChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  // 발행 여부
  const releaseHandler = () => {
    setRelease(0);
  }

  const addPost = () => {
    const post = {
      postTitle: title,
      postDescription: description,
      postDate: date,
      isrelease: release,
    };
    console.log(post);
    //POST API 요청 전송, data와 함께
    addPostAPI(post);
    // 폼에 입력된 상태값 초기화
    setTitle("");
    setDescription("");

    router.push(`/post/${title}`);

    //   router.push({
    //   pathname: '/post/[title]',
    //   query: { title: title },
    // })
  };
  return (
    <Container>
      <div className="wrap">
        <div className="text-area">
          <input
            className="title"
            type="text"
            onChange={titleChangeHandler}
            value={title}
            placeholder="제목을 입력하세요"
          />
          <textarea
            className="description"
            onChange={descChangeHandler}
            placeholder="내용을 입력하세요"
          ></textarea>
        </div>
        <div className="save-area">
          <input type="checkbox" onClick={releaseHandler} value={release}/><label> 비공개</label>
          <Button onClick={addPost}>저장</Button>
        </div>
      </div>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 100%;

  .wrap {
    max-width: 960px;
    margin: 30px auto;
  }
  .text-area {
    display: flex;
    flex-direction: column;
  }

  .title {
    border: 0;
    border-bottom: 1px solid #d9d9db;
    height: 60px;
    ${fonts.H2}
  }

  .title::placeholder {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.8;
  }

  .description {
    margin-top: 20px;
    border: 0;
    height: 60vh;
    ${fonts.Body1}
  }

  .description::placeholder 
  font-size: 20px;
  font-weight: 400;
  opacity: 0.8;
  }

  .save-area {
    width: 200px;
    padding-top: 20px;
    float: right;
  }

`;
