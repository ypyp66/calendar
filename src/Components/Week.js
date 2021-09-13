import React from "react";
import styled from "styled-components";
import { DAYS } from "../Constants/Day";
function Week() {
  return (
    <>
      {DAYS.map((day, index) => (
        <Span holiday={index === 0} semiHoliday={index === 6} key={index}>
          {day}
        </Span>
      ))}
    </>
  );
}

export default React.memo(Week);

const Span = styled.span`
  text-align: center;
`;
