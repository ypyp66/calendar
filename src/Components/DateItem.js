import React from "react";
import styled from "styled-components";

function DateItem({ children, selected, otherMonth }) {
  return (
    <Div selected={selected} otherMonth={otherMonth}>
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

  :hover {
    transform: scale(1.1);
  }

  background-color: ${(props) => (props.selected ? "skyblue" : "transparent")};
  color: ${(props) => (props.otherMonth ? "#e3e3e3" : "black")};
`;
