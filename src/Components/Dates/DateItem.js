import React from "react";
import styled, { css } from "styled-components";

function DateItem({ children, ...props }) {
  const {
    isOtherMonth,
    isToday,
    isSelected,
    isHoliday,
    handleClick,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  } = props;

  return (
    <Div
      isToday={isToday}
      isOtherMonth={isOtherMonth}
      onClick={handleClick}
      isSelected={isSelected}
      isHoliday={isHoliday}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      draggable
    >
      {children}
    </Div>
  );
}

export default React.memo(DateItem);

const Div = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  color: black;

  ${(props) =>
    props.isHoliday &&
    css`
      color: red;
    `}

  ${(props) =>
    props.isOtherMonth &&
    css`
      color: #e3e3e3;
    `};

  ${(props) =>
    props.isToday &&
    css`
      display: flex;
      line-height: 15px;
      flex-direction: column;
      background-color: #eee;
      border-radius: 50px;
      ::before {
        content: "today!";
        font-size: 10px;
      }
    `};

  ${(props) =>
    props.isSelected &&
    css`
      color: white;
      background-color: #2478ff;
      border-radius: 60px;
    `}

  :hover {
    transform: scale(1.1);
  }
`;
