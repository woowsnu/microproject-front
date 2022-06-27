import React from "react";
import CommunityCard from "./CommunityCard";
import styled from "styled-components";

const data = [
  {id : 1, title: "웹소설 같이써요", topic: "판타지", person: 2 },
  {id : 2, title: "브랜딩전략 전자책 함께 쓰실 분!", topic: "브랜딩/실무", person: 1 },
  {id : 3, title: "퇴사 후 생활 에세이로 남기실 분", topic: "에세이", person: 3 },
  {id : 4, title: " 단편 소설 모임 모집합니다", topic: "드라마/소설", person: 2 },
]

const CommunitySection = () => {
  return (
    <Wrap>
      <h2 className="section-title">같이 글써요 👀</h2>
      <div className="card-wrap">
        <CommunityCard title={data[0].title} topic={data[0].topic} person={data[0].person}/>
        <CommunityCard title={data[1].title} topic={data[1].topic} person={data[1].person}/>
        <CommunityCard title={data[2].title} topic={data[2].topic} person={data[2].person}/>
        <CommunityCard title={data[3].title} topic={data[3].topic} person={data[3].person}/>
      </div>
    </Wrap>
  );
};

export default CommunitySection;

const Wrap = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 160px;

  .section-title {
    text-align: left;
  }

  .card-wrap {
    display: flex;
    justify-content: space-between;
  }
`;
