import React, { useState } from 'react';

export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const { id, title, done } = item;

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  //title 클릭하면 readonly를 false로 변경
  const offReadOnlyMode = () => {
    const newReadOnly = false;
    setReadOnly(newReadOnly);
  };

  const editEventHandler = (e) => {
    const { title, id, done } = todoItem;
    // const {title, ...rest}
    setTodoItem({
      title: e.target.value,
      id,
      done,
    });

    // setTodoItem({
    //   title: e.target.value,
    //   ...rest
    // })
    console.log(todoItem);
  };

  // enter키 누르면 readOnly true 로 변경
  const editKeyHandler = (e) => {
    if (e.keyCode === 13) {
      setReadOnly(true);
      updateItem(todoItem);
    }
  };

  const checkboxEventHandler = (e) => {
    const updatedItem = {
      ...todoItem,
      done: e.target.checked,
    };

    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  const isCheck = () => {};

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        onChange={checkboxEventHandler}
        defaultChecked={done}
      ></input>
      {/* <label htmlFor={`todo${id}`}>{title}</label>
       */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyHandler}
      ></input>
      <button onClick={onDeleteButtonClick}>Delete</button>
    </div>
  );
}
