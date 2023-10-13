import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
  console.log(item);
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = item;

  const onDeleteButtonClick = (id) => {
    console.log(id);
    deleteItem(todoItem);
  };

  return (
    <div>
      <input type="checkbox" name={`todo${id}`} id={`todo${id}`}></input>
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={() => onDeleteButtonClick(id)}>Delete</button>
    </div>
  );
}
