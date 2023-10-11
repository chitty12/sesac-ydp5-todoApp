import React, { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);

  const addItem = (newItem) => {
    console.log(newItem);

    // newItem id 키 값 넣고, newItem done 키 값
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    const addTodo = {
      id: newItem.id,
      title: newItem.title,
      done: newItem.done,
    };
    console.log(addTodo);
    setTodoItems([...todoItems, addTodo]);
  };

  const deleteItem = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />

      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
