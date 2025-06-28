import React, { useReducer, useState } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      if (action.text.trim() === '') return state;
      return [...state, { id: Date.now(), text: action.text }];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <h2>Todo List with useReducer</h2>

      <input
        type='text'
        placeholder='Enter a task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '70%', padding: '8px', borderRadius: '20px' }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'ADD_TODO', text: input });
          setInput('');
        }}
        style={{
          padding: '8px 12px',
          marginLeft: '10px',
          borderRadius: '8px',
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.text}
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
              style={{ marginLeft: '10px', padding: '4px 8px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
