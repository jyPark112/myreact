import styled from "styled-components";

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 1000px;
`;
const Input = styled.div`
  text-align: center;
  input {
    padding: 0.5rem;
  }
`;
const Box = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 70%;
  border: 1px solid;
  border-radius: 20px;
`;
const One = styled.div`
  margin-left: 20%;
  margin-top: 50px;
  display: grid;
  gap: 10px;
`;
const Button = styled.button`
  justify-content: center;
  width: 80px;
  height: 30px;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid;
`;

export function Container2() {
  return (
    <>
      <Container>
        <Input>
          <input type="" />
        </Input>
        <Box>
          <One>
            <Button>소형</Button>
            <Button>중형</Button>
            <Button>대형</Button>
            <Button>SUV</Button>
            <Button>스포츠</Button>
          </One>
        </Box>
      </Container>
    </>
  );
}
