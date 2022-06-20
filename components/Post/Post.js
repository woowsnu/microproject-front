import React, { useState } from "react";
import Button from "../../components/UI/Button";
import { addPostAPI } from "../../lib/api/post"

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState("");

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

  const addPost = () => {
    const post = {
      post_title: title,
      post_description: description,
      date: date,
      is_release: release
    };
    console.log(post);
    //POST API 요청 전송, data와 함께
    addPostAPI(post);
    // 폼에 입력된 상태값 초기화
    setTitle('');
    setDescription('');
    setDueDate('');
    router.replace('/');
  };
  return (
    <div>
      <div>
        <input type="text" value={title} />
      </div>
      <textarea></textarea>
      <Button onClick={addPost}>저장</Button>
    </div>
  );
};

export default Post;
