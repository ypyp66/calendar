import { STORAGE } from "Constants/Storage";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNextId } from "./getNextId";

const TodoService = () => {
  const selectedDates = useSelector((state) => state.date.selectedDates);
  const [todoStates, setTodoStates] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const saveTodos = useCallback(() => {
    localStorage.setItem(STORAGE.KEY, JSON.stringify(todoStates));
  }, [todoStates]);

  useEffect(() => {
    saveTodos();
  }, [todoStates, saveTodos]);

  const loadTodos = useCallback(() => {
    const result = localStorage.getItem(STORAGE.KEY) ?? "[]";
    setTodoStates(JSON.parse(result));
  }, []);

  const changeTodo = useCallback((e) => {
    const { value } = e.target;
    setTodo(value);
  }, []);

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();

      if (todo === "" || selectedDates.length === 0) {
        alert("error");
        setTodo("");
        return;
      }

      const state = {
        todo,
        dates: selectedDates,
        isChecked: false,
      };

      setTodoStates((prev) =>
        prev.concat({ ...state, id: getNextId(todoStates) + 1 })
      );

      setTodo("");
    },
    [selectedDates, todoStates, todo]
  );

  const removeTodo = useCallback((text) => {
    //모든 todoState에서 todo가 text와 같으면 해당 객체를 삭제, 여러 일자에 같은 text가 들어가므로
    setTodoStates((prev) => prev.filter((item) => item.todo !== text));
  }, []);

  const toggleTodo = useCallback((text) => {
    setTodoStates((prev) =>
      prev.map((item) =>
        item.todo === text ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }, []);

  return {
    todoStates,
    selectedDates,
    todo,
    changeTodo,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export default TodoService;
