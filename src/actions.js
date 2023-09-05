export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REFRESH = 'REFRESH';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const refresh = () => ({type: REFRESH})



export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});


export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId,
});



