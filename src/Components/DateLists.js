import React, { useState } from "react";
import MakeAllDates from "../Utils/MakeAllDates";
import DateItem from "./DateItem";
import styled from "styled-components";
import { TODAY } from "../Constants/Date";
import { useSelector } from "react-redux";

function DateLists() {
  const [selected, setSelected] = useState(false);
  const today = useSelector((state) => state.date.date);
  const allDates = MakeAllDates(today);

  return (
    <Container>
      {allDates.map((date) => {
        const isToday = date.isSame(
          today.format(`${TODAY.YEAR}-${TODAY.MONTH}-${TODAY.DATE}`)
        );
        const otherMonth = date.format("YYYY-MM") !== today.format("YYYY-MM");

        return (
          <DateItem
            key={date.format("YYYYMMDD")}
            isToday={isToday}
            otherMonth={otherMonth}
            date={date}
            today={today}
            selected={selected}
            setSelected={setSelected}
          >
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
