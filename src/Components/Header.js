import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "Components/CalendarButton";

function Header({ increaseMonth, decreaseMonth, goToday }) {
  const today = useSelector((state) => state.date.date);

  const handleDecrease = useCallback(() => {
    decreaseMonth();
  }, [decreaseMonth]);

  const handleIncrease = useCallback(() => {
    increaseMonth();
  }, [increaseMonth]);

  const resetDate = useCallback(() => {
    goToday();
  }, [goToday]);

  return (
    <Container>
      <h3>{today.clone().format("YYYY-MM")}</h3>
      <Content>
        <Button handleClick={handleDecrease}>
          <i className="fas fa-chevron-left"></i>
        </Button>
        <Button handleClick={handleIncrease}>
          <i className="fas fa-chevron-right"></i>
        </Button>
        <Button handleClick={resetDate}>이번달</Button>
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

const Content = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
