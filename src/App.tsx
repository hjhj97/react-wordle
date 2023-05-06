import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}

export default App;
