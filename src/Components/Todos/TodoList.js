import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ todoStates, selectedDates, removeTodo, toggleTodo }) {
  return (
    <Container>
      - 할 일 목록들
      {todoStates
        .filter((todo) => todo.dates.indexOf(selectedDates[0]) !== -1)
        .map((item, index) => (
          <TodoItem
            key={index}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            data={item}
          >
            {item.todo}
          </TodoItem>
        ))}
    </Container>
  );
}

export default React.memo(TodoList);

const Container = styled.div`
  margin-top: 10px;
`;
