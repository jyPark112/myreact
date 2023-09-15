import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { NavLink, Link } from "react-router-dom";

const Container = styled.div`
  width: 100px;
  height: 100vh;
  background-color: #eee;
`;
const Li = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function Navbar({ setPage }) {
  return (
    <>
      <Container>
        <ul>
          <Li>
            {/* to속성에는 route에서 선언한 url 주소를 적어둔다 */}
            <Link to={"/"}>Home</Link>
          </Li>
          <Li>
            <Link to={"/contact"}>Contact</Link>
          </Li>
          <Li>
            <Link to={"/about"}>About</Link>
          </Li>
        </ul>
      </Container>
    </>
  );
}
