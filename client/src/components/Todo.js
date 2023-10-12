import React from 'react';

export default function Todo({ item, deleteItem }) {
  console.log(item);
  const { id, title, done } = item;

  const onDeleteButtonClick = (id) => {
    console.log(id);
    deleteItem(id);
  };

  return (
    <div>
      <input type="checkbox" name={`todo${id}`} id={`todo${id}`}></input>
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={() => onDeleteButtonClick(id)}>Delete</button>
    </div>
  );
}
