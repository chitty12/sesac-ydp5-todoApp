import React from 'react';

export default function Todo({ item, deleteItem }) {
  console.log(item);
  const { id, title, done } = item;

  const onDeleteButtonClick = (e) => {
    console.log(e.target.previousSibling.htmlFor);
    deleteItem(e);
  };

  return (
    <div>
      <input type="checkbox" name={`todo${id}`} id={`todo${id}`}></input>
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>Delete</button>
    </div>
  );
}
