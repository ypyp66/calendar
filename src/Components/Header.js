import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Header({ increaseMonth, decreaseMonth, goToday }) {
  const today = useSelector((state) => state.date.date);

  const handleDecrease = useCallback(() => {
    decreaseMonth();
  }, [decreaseMonth]);

  const handleIncrease = useCallback(() => {
    increaseMonth();
  }, [increaseMonth]);

  return (
    <Container>
      <h3>{today.format("YYYY-MM")}</h3>
      <Content>
        <Button onClick={handleDecrease}>&lt;</Button>
        <Button onClick={handleIncrease}>&gt;</Button>
        <Button onClick={goToday}>이번달</Button>
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
