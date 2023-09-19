import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 500px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export function LogoImg() {
  return (
    <>
      <Img src="" />
    </>
  );
}
