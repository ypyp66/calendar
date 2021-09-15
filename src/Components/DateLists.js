import React, { useCallback, useEffect } from "react";
import MakeAllDates from "Utils/MakeAllDates";
import DateItem from "./DateItem";
import styled from "styled-components";
import { TODAY } from "Constants/Date";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setSelectedDate } from "Store/actions/dateActions";
import moment from "moment";
import Loading from "./Loading";

function DateLists() {
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const today = useSelector((state) => state.date.date);
  const allDates = MakeAllDates(today);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selectedDate?.format());
  }, [selectedDate]);

  const handleClick = useCallback(
    (date) => {
      const thisYearMonth = date.format("YYYY-MM");
      const targetYearMonth = today.format("YYYY-MM");

      if (selectedDate?.format("YYYY-MM-DD") !== date.format("YYYY-MM-DD")) {
        dispatch(setSelectedDate(moment(date.format())));
      }

      if (thisYearMonth !== targetYearMonth) {
        dispatch(setDate(moment(thisYearMonth)));
      }
    },
    [dispatch, selectedDate, today]
  );

  if (allDates) {
    return (
      <Container>
        {allDates &&
          allDates.map((date) => {
            const key = date.format("YYYYMMDD");
            const isToday = date.isSame(
              today.format(`${TODAY.YEAR}-${TODAY.MONTH}-${TODAY.DATE}`)
            );
            const otherMonth =
              date.format("YYYY-MM") !== today.format("YYYY-MM");

            return (
              <DateItem
                key={key}
                isToday={isToday}
                otherMonth={otherMonth}
                isSelected={
                  date.format("YYYY-MM-DD") ===
                  selectedDate?.format("YYYY-MM-DD")
                }
                handleClick={() => {
                  handleClick(date);
                }}
              >
                {date.format("D")}
              </DateItem>
            );
          })}
      </Container>
    );
  } else {
    return (
      <Animation>
        <Loading />
      </Animation>
    );
  }
}

export default DateLists;

const Container = styled.article`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Animation = styled.article`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
