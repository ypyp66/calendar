import React from "react";
import styled from "styled-components";

function TodoDates({ selectedDates }) {
  return (
    <Container>
      선택일 :
      {selectedDates.length <= 1
        ? `${selectedDates}`
        : `${selectedDates[0]} ~ ${selectedDates[selectedDates.length - 1]}`}
    </Container>
  );
}

export default React.memo(TodoDates);

const Container = styled.div`
  width: 100%;

  margin-top: 10px;
`;
