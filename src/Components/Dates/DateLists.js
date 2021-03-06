import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DateItem } from "Components/Dates";

import { TODAY } from "Constants/Date";

import moment from "moment";
import Loading from "Components/Loading";
import MOMENT from "Constants/Moment";
import DateService from "Utils/DateService";

function DateLists() {
  const { today, allDates, resetAllDates, clickDate, toggleAllDate } =
    DateService();
  const [dragStart, setDragStart] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const handleClick = useCallback(
    (date) => {
      clickDate(date);
    },
    [clickDate]
  );

  const handleReset = useCallback(() => {
    resetAllDates();
  }, [resetAllDates]);

  const handleDragStart = useCallback(
    (date) => {
      handleReset();
      setDragStart(date.id);
    },
    [handleReset]
  );

  const handleDragOver = useCallback(
    (date) => {
      //over이벤트 지속 방지
      if (dragOver === date.id) return;
      else {
        setDragOver(date.id);
        toggleAllDate(date);
      }
    },
    [dragOver, toggleAllDate]
  );

  const handleDragEnd = (date) => {
    const diff = moment(dragOver).diff(moment(dragStart), "days");

    //end와 start의 차이만큼 반복해서 isSelected를 true로 바꿔줘야함.
    for (let i = 0; i <= diff; i++) {
      const currentMoment = moment(date).clone().add(i, "days");
      const id = currentMoment.format(MOMENT.FULLDATE);
      currentMoment.id = id;

      toggleAllDate(currentMoment);
    }
  };

  if (allDates) {
    return (
      <>
        <Container>
          {allDates &&
            allDates.map((date) => {
              const id = date.format(MOMENT.FULLDATE);
              date.id = id;

              const isToday = date.isSame(
                today.format(`${TODAY.YEAR}-${TODAY.MONTH}-${TODAY.DATE}`)
              );
              const isOtherMonth =
                date.format(MOMENT.YEARMONTH) !==
                today.format(MOMENT.YEARMONTH);

              const isHoliday = date.weekday();

              return (
                <DateItem
                  key={id}
                  isToday={isToday}
                  isOtherMonth={isOtherMonth}
                  isSelected={date.isSelected}
                  isHoliday={isHoliday === 0}
                  handleClick={() => handleClick(date)}
                  handleDragStart={() => handleDragStart(date)}
                  handleDragOver={() => handleDragOver(date)}
                  handleDragEnd={() => handleDragEnd(date)}
                >
                  {date.format("D")}
                </DateItem>
              );
            })}
        </Container>
      </>
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
  height: 90%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Animation = styled.article`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
