import MyPage from '../../components/MyPage/MyPage'

const index = () => {
  return (
    <MyPage />
  )
}

export default index

// Post에 UserId 컬럼을 가지고 있어야 하지 않을까...?
// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("http://localhost:8080/api/post");
//     const posts = await res.json();
//     return {
//       props: { posts },
//     };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// };


