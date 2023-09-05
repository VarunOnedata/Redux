// App.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './actions';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import './App.css';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const RemoveText = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
      <br /><br />
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Test"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => {
          if (text.trim() !== '') {
            dispatch(addTodo({
              id: Date.now(), // Assign a unique ID
              text,
            }));
            setText('');
          }
        }}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => RemoveText(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}

export default App;
