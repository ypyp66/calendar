import moment from "moment";
import React from "react";
import styled, { css } from "styled-components";
import { TODAY } from "../Constants/Date";

function DateItem({
  children,
  otherMonth,
  date,
  isToday,
  setCurrent,
  today,
  selected,
  setSelected,
}) {
  const handleClick = () => {
    const thisDate = date.format("YYYY-MM");
    const targetDate = today.format("YYYY-MM");
    //setCurrent((prev) => prev.clone().format("YYYY-MM"));
    console.log(thisDate, targetDate);
    console.log(TODAY.DATE);

    if (thisDate === targetDate) {
      return;
    }
    setSelected((prev) => !prev);
    setCurrent(() => moment(thisDate));
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
