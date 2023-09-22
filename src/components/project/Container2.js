import styled from "styled-components";

const Container = styled.div`
  margin-top: 300px;
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
  position: relative;
  padding-top: 100px;
  margin: 0 auto;
  width: 70%;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
`;
const One = styled.div`
  margin-left: 20%;
  margin-top: 40px;
  display: grid;
  gap: 30px;
`;
const Button = styled.button`
  justify-content: center;
  width: 80px;
  height: 30px;
  padding-bottom: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  margin-top: 70px;
`;

const Img = styled.div`
  width: 350px;
  height: 380px;
  margin: 0 auto;
  overflow: hidden;
  object-fit: cover;
  border: 1px solid lightgrey;
  border-radius: 10px;
  img {
    width: 100%;
    height: 65%;
  }
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
          <h2>추천 차량</h2>
          <Image>
            <Img>
              <img src="https://image.m-park.co.kr/mpark/AttEdit/CarPhoto/Middle/3091501/3091501244R1.jpg" />
            </Img>
            <Img>
              <img src="https://image.m-park.co.kr/mpark/AttEdit/CarPhoto/Middle/3091001/3091001679R1.jpg" />
            </Img>
            <Img>
              <img src="https://image.m-park.co.kr/mpark/AttEdit/CarPhoto/Middle/3091001/3091001692R1.jpg" />
            </Img>
          </Image>
        </Box>
      </Container>
    </>
  );
}
