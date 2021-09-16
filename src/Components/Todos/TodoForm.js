import React from "react";
import styled from "styled-components";
import Button from "Components/CalendarButton";

function TodoForm({ todo, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        name="todo"
        onChange={handleChange}
        value={todo}
      />
      <Button type="submit">추가</Button>
    </form>
  );
}

export default React.memo(TodoForm);

const Input = styled.input`
  margin-right: 10px;
`;
