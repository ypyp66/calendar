import React from "react";
import styled from "styled-components";

function index({ children, handleClick }) {
  return <Container onClick={handleClick}>{children}</Container>;
}

export default index;

const Container = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 3px 10px;
  outline: none;
  border: none;

  & + & {
    margin-left: 10px;
  }
`;
