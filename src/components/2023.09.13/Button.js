import styled from "styled-components";

const StyleButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  line-height: 1px;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
`;

export function Button({ color, bgcolor, title }) {
  return (
    <>
      <StyleButton color={color} bgcolor={bgcolor}>
        {title}
      </StyleButton>
    </>
  );
}
