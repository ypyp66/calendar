import React from "react";
import Week from "./Week";
import styled from "styled-components";
import DateLists from "./DateLists";

function DateArea() {
  return (
    <Container>
      <Week />
      <DateLists />
    </Container>
  );
}

export default DateArea;

const Container = styled.section`
  width: 100%;
  height: 85%;

  margin-top: 30px;
`;
