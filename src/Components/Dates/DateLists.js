import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addSelectedDate,
  removeSelectedDate,
  setDate,
  setSelectedDate,
} from "Store/actions/dateActions";
import MakeAllDates from "Utils/MakeAllDates";
import { DateItem } from "Components/Dates";

import { TODAY } from "Constants/Date";

import moment from "moment";
import Loading from "Components/Loading";

function DateLists() {
  const today = useSelector((state) => state.date.date);
  const [selectedDate, setSelectedDate] = useState(null);
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);
  const [allDates, setAllDates] = useState(() => MakeAllDates(today));
  const dispatch = useDispatch();

  useEffect(() => {
    setAllDates(MakeAllDates(today, selectedDate));
  }, [today, selectedDate]);

  const handleClick = useCallback(
    (date) => {
      const thisYearMonth = date.format("YYYY-MM");
      const targetYearMonth = today.format("YYYY-MM");

      if (thisYearMonth !== targetYearMonth) {
        dispatch(setDate(moment(thisYearMonth)));
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
              const now = moment(date);
              now.isSelected = true;
              now.id = date.format("YYYYMMDD");

              return now;
            })()
          : (() => {
              const now = moment(item);
              now.isSelected = false;
              now.id = item.format("YYYYMMDD");

              return now;
            })()
      )
    );
  };

  const handleDragStart = (date) => {
    setAllDates((prev) =>
      prev.map((item) => {
        const now = moment(item);
        now.isSelected = false;
        now.id = item.format("YYYYMMDD");

        return now;
      })
    );
    setDrag(date.id);
  };

  const handleDragOver = useCallback(
    (date) => {
      if (over === date.id) return;
      else {
        setOver(date.id);
        setAllDates((prev) =>
          prev.map((item) =>
            item.id === date.id
              ? (() => {
                  const now = moment(date);
                  now.isSelected = !date.isSelected;
                  now.id = date.format("YYYYMMDD");

                  return now;
                })()
              : item
          )
        );
        addSelectedDate();
      }
    },
    [over]
  );

  const handleDragEnd = (date) => {
    const diff = moment(over).diff(moment(drag), "days");

    console.log(date, moment());

    //차이만큼 반복해서 isSelected를 true로 바꿔줘야함.
    for (let i = 0; i <= diff; i++) {
      const current = moment(date).clone().add(i, "days");
      const id = current.format("YYYYMMDD");

      setAllDates((prev) =>
        prev.map((item) =>
          item.id === id
            ? (() => {
                const now = moment(current);
                now.isSelected = !current.isSelected;
                now.id = current.format("YYYYMMDD");

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
            const id = date.format("YYYYMMDD");
            date.id = id;

            const isToday = date.isSame(
              today.format(`${TODAY.YEAR}-${TODAY.MONTH}-${TODAY.DATE}`)
            );
            const isOtherMonth =
              date.format("YYYY-MM") !== today.format("YYYY-MM");

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
