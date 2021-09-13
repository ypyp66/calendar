import React from "react";
import styled from "styled-components";

function DateItem({ children }) {
  return <Span>{children}</Span>;
}

export default DateItem;

const Span = styled.span`
  width: 40px;
  height: 40px;
  padding: 0;
  box-shadow: 0px 2px 2px 1px lightgray;

  :hover {
    transform: scale(1.1);
  }
`;
