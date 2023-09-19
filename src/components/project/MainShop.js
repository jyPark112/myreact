import styled from "styled-components";
import { LogoImg } from "./LogoImg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LogoBar = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  width: 100%;
  height: 100px;
  background-color: #eee;
`;
const Img = styled.img`
  width: 160px;
  height: 100px;
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
          <Img src="" />
          <Box>
            <p>로그인</p>
            <p>회원가입</p>
          </Box>
        </LogoBar>
        <LogoImg />
      </Container>
    </>
  );
}
