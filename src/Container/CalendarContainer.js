import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import CalendarService from "../Utils/CalendarService";
import DateArea from "../Components/DateArea";

function CalendarContainer() {
  const { year, month, setMonth, setYear, IncreaseMonth, DecreaseMonth } =
    CalendarService();
  return (
    <Container>
      <Header
        year={year}
        month={month}
        IncreaseMonth={IncreaseMonth}
        DecreaseMonth={DecreaseMonth}
        setMonth={setMonth}
        setYear={setYear}
      />
      <DateArea />
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
