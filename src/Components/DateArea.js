import React from "react";
import Week from "./Week";
import styled from "styled-components";
import DateLists from "./DateLists";

function DateArea({ today, setCurrent }) {
  return (
    <Container>
      <Week />
      <DateLists today={today} setCurrent={setCurrent} />
    </Container>
  );
}

export default DateArea;

const Container = styled.section`
  width: 100%;
  height: 85%;

  margin-top: 50px;
`;
