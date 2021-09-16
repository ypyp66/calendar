export const getNextId = (todoStates) =>
  todoStates.reduce((acc, cur) => {
    if (cur.id >= acc) {
      return cur.id;
    }
    return acc;
  }, 0);
