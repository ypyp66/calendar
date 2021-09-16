import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TodoArea() {
  const selectedDates = useSelector((state) => state.date.selectedDates);

  useEffect(() => {
    console.log(selectedDates, selectedDates?.length);
  }, [selectedDates]);

  if (selectedDates === null || selectedDates.length <= 1) {
    return <Container>선택일 : {selectedDates}</Container>;
  } else {
    return (
      <Container>
        선택일 :{selectedDates[0]} ~ {selectedDates[selectedDates.length - 1]}
      </Container>
    );
  }
}

export default TodoArea;

const Container = styled.section`
  width: 430px;
  height: 200px;

  margin-top: 10px;
  border: 1px solid black;
`;
