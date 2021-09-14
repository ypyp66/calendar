import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import CalendarService from "../Utils/CalendarService";
import DateArea from "../Components/DateArea";

function CalendarContainer() {
  const { today, increaseMonth, decreaseMonth, goToday, setCurrent } =
    CalendarService();
  return (
    <Container>
      <Header
        today={today}
        increaseMonth={increaseMonth}
        decreaseMonth={decreaseMonth}
        goToday={goToday}
      />
      <DateArea today={today} setCurrent={setCurrent} />
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
