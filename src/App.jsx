import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Button } from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello world</Heading>
            <div>
              <Button onClick={() => alert("check in")}>Check In</Button>
              <Button
                variations="secondary"
                size="medium"
                onClick={() => alert("check out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h2">Form</Heading>
            <form>
              <Input type="number" placeholder="number of guest"></Input>
              <Input type="number" placeholder="number of guest"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </div>
  );
}

export default App;
