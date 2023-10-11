import React from 'react';

export default function Todo({ items }) {
  console.log(items);
  const { id, title, done } = items;
  return (
    <div>
      <input type="checkbox" name={`todo${id}`} id={`todo${id}`}></input>
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
}
