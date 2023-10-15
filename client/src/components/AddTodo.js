import React, { useState } from 'react';
import '../styles/addTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    //input 초기화
    setTodoItem({
      title: '',
    });
  };

  return (
    <div className="AddTodo">
      <input
        class="input is-primary"
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onChange={(e) => {
          setTodoItem({ title: e.target.value });
        }}
      ></input>
      <button onClick={onButtonClick}>
        ADD
        <FontAwesomeIcon
          icon={faSquarePlus}
          beat
          style={{ marginLeft: '5px' }}
        />
      </button>
    </div>
  );
}
