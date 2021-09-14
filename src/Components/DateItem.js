import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { setDate, setSelectedDate } from "Store/actions/dateActions";

function DateItem({ children, otherMonth, date, isToday, today, selected }) {
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const dispatch = useDispatch();

  const handleClick = () => {
    const thisDate = date.format("YYYY-MM");
    const targetDate = today.format("YYYY-MM");

    if (selectedDate?.format("YYYY-MM-DD") === date.format("YYYY-MM-DD")) {
      console.log("qweqe");
      return;
    }

    dispatch(setSelectedDate(moment(date)));

    if (thisDate === targetDate) {
      return;
    }

    dispatch(setDate(moment(thisDate)));
  };
  return (
    <Div
      isToday={isToday}
      otherMonth={otherMonth}
      onClick={handleClick}
      selected={selected}
    >
      {children}
    </Div>
  );
}

export default DateItem;

const Div = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  color: ${(props) => (props.otherMonth ? "#e3e3e3" : "black")};

  ${(props) =>
    props.isToday &&
    css`
      display: flex;
      line-height: 13px;
      flex-direction: column;
      background-color: skyblue;
      border-radius: 40px;
      ::before {
        top: -30px;
        content: "today!";
        font-size: 10px;
      }
    `};

  ${(props) =>
    props.selected &&
    css`
      display: flex;
      justify-self: center;
      align-self: center;

      width: 50%;
      height: 50%;

      background-color: #ff6c6c;
      border-radius: 60px;
    `}

  :hover {
    transform: scale(1.1);
  }
`;
