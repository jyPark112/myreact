import styled from "styled-components";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { ItemList } from "./ItemList";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 auto;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 260px;
  width: ${() => window.innerWidth - 150}px;
`;

const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={MEDIUM} />
      </Container>
      <Content>
        <div>
          <Button color="white" bgcolor="green" title="버튼1" />
          <Button color="red" bgcolor="blue" title="버튼2" />
          <Button color="white" bgcolor="khaki" title="버튼3" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <ItemList />
        </div>
      </Content>
    </>
  );
}
