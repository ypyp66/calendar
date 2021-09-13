import React from "react";
import MakeAllDates from "../Utils/MakeAllDates";
import DateItem from "./DateItem";
import styled from "styled-components";
import { TODAY } from "../Constants/Date";

function DateLists({ today }) {
  const allDates = MakeAllDates(today);

  return (
    <Container>
      {allDates.map((date) => {
        console.log(date, today);
        const selected =
          date.format("YYYY-M-DD") === today.format(`YYYY-${TODAY.MONTH}-DD`);
        const otherMonth = date.format("YYYY-MM") !== today.format("YYYY-MM");
        return (
          <DateItem selected={selected} otherMonth={otherMonth}>
            {date.format("D")}
          </DateItem>
        );
      })}
    </Container>
  );
}

export default DateLists;
const Container = styled.article`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
