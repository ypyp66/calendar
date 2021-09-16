import React from "react";
import Header from "Components/Header";
import styled from "styled-components";
import HeaderService from "Utils/HeaderService";
import DateArea from "Components/DateArea";

function CalendarContainer() {
  const { increaseMonth, decreaseMonth, goToday } = HeaderService();
  return (
    <Container>
      <Header
        increaseMonth={increaseMonth}
        decreaseMonth={decreaseMonth}
        goToday={goToday}
      />
      <DateArea />
    </Container>
  );
}

export default CalendarContainer;

const Container = styled.main`
  width: 430px;
  height: 460px;

  border: 1px solid black;
  padding: 0 10px;
`;
