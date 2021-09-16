import React, { useCallback } from "react";
import styled from "styled-components";
import TodoService from "Utils/TodoService";
import TodoDates from "./Todos/TodoDates";
import TodoForm from "./Todos/TodoForm";
import TodoList from "./Todos/TodoList";

function TodoArea() {
  const {
    todoStates,
    selectedDates,
    todo,
    changeTodo,
    addTodo,
    removeTodo,
    toggleTodo,
  } = TodoService();

  const handleSubmit = useCallback(
    (e) => {
      addTodo(e, selectedDates);
    },
    [addTodo, selectedDates]
  );

  const handleChange = useCallback(
    (e) => {
      changeTodo(e);
    },
    [changeTodo]
  );

  return (
    <Container>
      <TodoDates selectedDates={selectedDates} />
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todoStates={todoStates}
        selectedDates={selectedDates}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </Container>
  );
}

export default React.memo(TodoArea);

const Container = styled.section`
  width: 430px;

  padding: 10px;
  margin-top: 10px;
  border: 1px solid black;
`;
