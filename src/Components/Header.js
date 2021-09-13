import React from "react";
import styled from "styled-components";
import TODAY from "../Constants/Date";

function Header({ year, month, setMonth }) {
  const handleDecrease = () => {
    console.log("-");
    setMonth((prevMonth) => prevMonth - 1);
  };

  const handleIncrease = () => {
    console.log("+");
    setMonth((prevMonth) => prevMonth + 1);
  };

  const handleResetMonth = () => {
    console.log("reset month");
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
        <Button onClick={handleResetMonth}>이번달</Button>
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
