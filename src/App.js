import CalendarContainer from "./Container/CalendarContainer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <CalendarContainer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;
