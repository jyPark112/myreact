import styled from "styled-components";

const Img = styled.img`
  width: 80%;
  margin-top: 70px;
  margin-left: 10%;
  height: 500px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export function LogoImg() {
  return (
    <>
      <Img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/SLOT/PC_%EB%A9%94%EC%9D%B8_%EC%83%81%EB%8B%A8%EB%B0%B0%EB%84%88_KW3_20230427R5oIouyJB0naYyHJDP0i.png" />
    </>
  );
}
