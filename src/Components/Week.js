import React from "react";
import styled from "styled-components";
import { DAYS } from "../Constants/Day";
function Week() {
  return (
    <Container>
      {DAYS.map((day, index) => (
        <P key={index} holiday={index === 0} semiHoliday={index === 6}>
          {day}
        </P>
      ))}
    </Container>
  );
}

export default React.memo(Week);

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const P = styled.p`
  width: 100%;
  height: 20px;
  text-align: center;
  color: ${(props) =>
    props.holiday ? "red" : props.semiHoliday ? "blue" : "black"};
`;
