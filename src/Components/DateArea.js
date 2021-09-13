import React from "react";
import Week from "./Week";
import styled from "styled-components";
import DateLists from "./DateLists";

function DateArea({ today }) {
  return (
    <Container>
      <Week />
      <DateLists today={today} />
    </Container>
  );
}

export default DateArea;

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
