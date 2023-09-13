import { Session } from "./components/2023.09.11/Session";
import { Tab } from "./components/2023.09.11/Tab";
import { List } from "./components/2023.09.11/List";
import { Avatar } from "./components/2023.09.12/Avatar";
import { PropsTest } from "./components/2023.09.12/PropsTest";
import { CounterState } from "./components/2023.09.12/CounterState";
import { Menu } from "./components/2023.09.13/Menu";
import { Home } from "./components/2023.09.13/Home";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/2023.09.13/Button";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, GmarketSansMedium;
  }
`;

// component는 반드시 대문자로 시작해야함!
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
