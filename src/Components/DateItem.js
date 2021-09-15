import React from "react";
import styled, { css } from "styled-components";

function DateItem({ children, otherMonth, isToday, isSelected, handleClick }) {
  return (
    <Div
      isToday={isToday}
      otherMonth={otherMonth}
      onClick={handleClick}
      isSelected={isSelected}
    >
      {children}
    </Div>
  );
}

export default React.memo(DateItem);

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
    props.isSelected &&
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
