import TodoArea from "Components/TodoArea";
import CalendarContainer from "Containers/CalendarContainer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <CalendarContainer />
      <TodoArea />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;
