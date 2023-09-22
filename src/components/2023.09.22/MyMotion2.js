import styled from "styled-components";
import { motion, animate, useAnimationControls } from "framer-motion";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d0e, #91f);
`;
const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 15px;
`;

const Btn = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  position: absolute;
  top: 100px;
  left: ${(props) => props.$left};
`;

const move = {
  left: { x: -500, transition: { duration: 0.5 } },
  right: { x: 500, transition: { duration: 0.5 } },
};

export function MyMotion2() {
  const control = useAnimationControls();
  function onClickLeft() {
    control.start("left");
  }
  function onClickRight() {
    control.start("right");
  }
  // animation을 제어하는 기능
  return (
    <>
      <Container>
        <Box variants={move} animate={control} />
        <Btn $left="200px" onClick={onClickLeft}>
          Left
        </Btn>
        <Btn $left="400px" onClick={onClickRight}>
          Right
        </Btn>
      </Container>
    </>
  );
}
