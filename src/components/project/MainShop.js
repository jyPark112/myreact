import styled from "styled-components";
import { LogoImg } from "./LogoImg";
import { Container2 } from "./Container2";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LogoBar = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  width: 100%;
  height: 100px;
  background-color: lightgray;
`;
const Img = styled.img`
  width: 130px;
  height: 80px;
  margin: auto 10px;
`;
const Box = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  p {
    font-size: 13px;
  }
`;

export function MainShop() {
  return (
    <>
      <Container>
        <LogoBar>
          <Img src="https://cdn.imweb.me/upload/S2023031322a6efd3a5662/b34635c711491.png" />
          <Box>
            <p>로그인</p>
            <p>회원가입</p>
          </Box>
        </LogoBar>
        <LogoImg />
        <Container2 />
      </Container>
    </>
  );
}
