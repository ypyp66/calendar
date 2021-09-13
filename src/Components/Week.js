import React from "react";
import styled from "styled-components";
import { DAYS } from "../Constants/Day";
function Week() {
  return (
    <>
      {DAYS.map((day) => (
        <th>{day}</th>
      ))}
    </>
  );
}

export default Week;

const Container = styled.th`
  width: 100%;
`;
