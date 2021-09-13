import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";

function CalendarContainer() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default CalendarContainer;

const Container = styled.div`
  width: 430px;
  height: 460px;

  border: 1px solid black;
  padding: 0 10px;
`;
