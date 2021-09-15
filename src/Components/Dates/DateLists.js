import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDate } from "Store/actions/dateActions";
import MakeAllDates from "Utils/MakeAllDates";
import { DateItem } from "Components/Dates";

import { TODAY } from "Constants/Date";

import moment from "moment";
import Loading from "Components/Loading";
import MOMENT from "Constants/Moment";

function DateLists() {
  const today = useSelector((state) => state.date.date);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const [dragOver, setDragOver] = useState(null);
  const [allDates, setAllDates] = useState(() => MakeAllDates(today));
  const dispatch = useDispatch();

  useEffect(() => {
    setAllDates(MakeAllDates(today, selectedDate));
  }, [today, selectedDate]);

  const handleClick = useCallback(
    (date) => {
      const currentYearMonth = date.format(MOMENT.YEARMONTH);
      const targetYearMonth = today.format(MOMENT.YEARMONTH);

      if (currentYearMonth !== targetYearMonth) {
        dispatch(setDate(moment(currentYearMonth)));
      }
      toggleSelected(date);
      setSelectedDate(date.id);
    },
    [dispatch, today]
  );

  const toggleSelected = (date) => {
    setAllDates((prev) =>
      prev.map((item) =>
        item.id === date.id
          ? (() => {
              const currentMoment = moment(date);
              currentMoment.isSelected = true;
              currentMoment.id = date.format(MOMENT.FULLDATE);

              return currentMoment;
            })()
          : (() => {
              const currentMoment = moment(item);
              currentMoment.isSelected = false;
              currentMoment.id = item.format(MOMENT.FULLDATE);

              return currentMoment;
            })()
      )
    );
  };

  const handleDragStart = (date) => {
    setAllDates((prev) =>
      prev.map((item) => {
        const currentMoment = moment(item);
        currentMoment.isSelected = false;
        currentMoment.id = item.format(MOMENT.FULLDATE);

        return currentMoment;
      })
    );
    setDragStart(date.id);
  };

  const handleDragOver = useCallback(
    (date) => {
      if (dragOver === date.id) return;
      //over이벤트 지속 방지
      else {
        setDragOver(date.id);
        setAllDates((prev) =>
          prev.map((item) =>
            item.id === date.id
              ? (() => {
                  const now = moment(date);
                  now.isSelected = !date.isSelected;
                  now.id = date.format(MOMENT.FULLDATE);

                  return now;
                })()
              : item
          )
        );
      }
    },
    [dragOver]
  );

  const handleDragEnd = (date) => {
    const diff = moment(dragOver).diff(moment(dragStart), "days");

    console.log(date, moment());

    //end와 start의 차이만큼 반복해서 isSelected를 true로 바꿔줘야함.
    for (let i = 0; i <= diff; i++) {
      const currentMoment = moment(date).clone().add(i, "days");
      const id = currentMoment.format(MOMENT.FULLDATE);

      setAllDates((prev) =>
        prev.map((item) =>
          item.id === id
            ? (() => {
                const now = moment(currentMoment);
                now.isSelected = !currentMoment.isSelected;
                now.id = currentMoment.format(MOMENT.FULLDATE);

                return now;
              })()
            : item
        )
      );
    }
  };

  if (allDates) {
    return (
      <Container>
        {allDates &&
          allDates.map((date) => {
            const id = date.format(MOMENT.FULLDATE);
            date.id = id;

            const isToday = date.isSame(
              today.format(`${TODAY.YEAR}-${TODAY.MONTH}-${TODAY.DATE}`)
            );
            const isOtherMonth =
              date.format(MOMENT.YEARMONTH) !== today.format(MOMENT.YEARMONTH);

            const isHoliday = date.weekday();

            return (
              <DateItem
                key={id}
                isToday={isToday}
                isOtherMonth={isOtherMonth}
                //isSelected={selectedDate.includes(date.format("YYYY-MM-DD"))}
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
