import React from "react";
import styled, { keyframes } from "styled-components";

function Loading() {
  return <Container />;
}

export default Loading;

const spin = keyframes`
    to { transform: rotate(360deg); }
  `;

const Container = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid lightblue;
  border-radius: 50%;
  border-top-color: gray;
  animation: ${spin} 1s ease-in-out infinite;
`;
