import React from "react";
import styled from "styled-components";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

function Header() {
  return (
    <Container>
      <h3>
        {year}.{month}
      </h3>
      <Content>
        <Button>&lt;</Button>
        <Button>&gt;</Button>
        <Button>이번달</Button>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.p`
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
