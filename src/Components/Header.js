import React from "react";
import styled from "styled-components";
import TODAY from "../Constants/Date";

function Header({
  year,
  month,
  setMonth,
  setYear,
  IncreaseMonth,
  DecreaseMonth,
}) {
  const handleDecrease = () => {
    console.log("-");
    DecreaseMonth();
  };

  const handleIncrease = () => {
    console.log("+");
    IncreaseMonth();
  };

  const handleReset = () => {
    console.log("reset month");
    setYear(() => TODAY.YEAR);
    setMonth(() => TODAY.MONTH);
  };
  return (
    <Container>
      <h3>
        {year}.{month}
      </h3>
      <Content>
        <Button onClick={handleDecrease}>&lt;</Button>
        <Button onClick={handleIncrease}>&gt;</Button>
        <Button onClick={handleReset}>이번달</Button>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.span``;

const Button = styled.button`
  outline: none;
  border: none;

  & + & {
    margin-left: 10px;
  }
`;
