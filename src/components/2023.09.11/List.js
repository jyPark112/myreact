import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => (props.isActive ? "orange" : "green")};
`;

const Image = styled.img`
  border-radius: 80%;
  width: 18vw;
  height: 30vh;
  object-fit: cover;
`;

export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/fbPFOeH.jpeg",
    imageSize: 90,
  };
  let 변수 = true;
  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
      <Container>
        <Title isActive={false} fontColor="red">
          {user.name}
        </Title>
        <Image src={user.imageUrl} />
      </Container>
    </>
  );
}
