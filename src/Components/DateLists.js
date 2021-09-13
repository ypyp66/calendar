import React from "react";
import MakeAllDates from "../Utils/MakeAllDates";
import DateItem from "./DateItem";
import styled from "styled-components";

function DateLists({ today }) {
  const allDates = MakeAllDates(today);
  console.log(allDates);
  return <Tbody></Tbody>;
}

export default DateLists;

const Tbody = styled.tbody`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tr = styled.tr`
  text-align: center;
  margin-top: 10px;
`;
