import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import CalendarService from "../Utils/CalendarService";

function CalendarContainer() {
  const { year, month, setMonth } = CalendarService();
  return (
    <Container>
      <Header year={year} month={month} setMonth={setMonth} />
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
