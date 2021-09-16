import React, { useCallback } from "react";
import Button from "Components/CalendarButton";
import styled, { css } from "styled-components";

function TodoItem({ children, removeTodo, toggleTodo, data }) {
  const handleDelete = useCallback(() => {
    removeTodo(children);
  }, [children, removeTodo]);

  const handleToggle = useCallback(() => {
    toggleTodo(children);
  }, [children, toggleTodo]);

  return (
    <div>
      <P onClick={handleToggle} isChecked={data.isChecked}>
        {children}
      </P>
      <Button type="button" handleClick={handleDelete}>
        ❌
      </Button>
    </div>
  );
}

export default React.memo(TodoItem);

const P = styled.p`
  display: inline-block;

  margin-right: 10px;

  ${(props) =>
    props.isChecked &&
    css`
      text-decoration: line-through;
      color: lightgray;
    `}
`;
