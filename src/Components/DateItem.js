import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { TODAY } from "../Constants/Date";
import { setDate } from "../Store/actions/dateActions";

function DateItem({
  children,
  otherMonth,
  date,
  isToday,
  today,
  selected,
  setSelected,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    const thisDate = date.format("YYYY-MM");
    const targetDate = today.format("YYYY-MM");

    if (thisDate === targetDate) {
      return;
    }

    setSelected((prev) => !prev);
    dispatch(setDate(moment(thisDate)));
  };
  return (
    <Div isToday={isToday} otherMonth={otherMonth} onClick={handleClick}>
      {children}
      {selected}
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

  :hover {
    transform: scale(1.1);
  }
`;
