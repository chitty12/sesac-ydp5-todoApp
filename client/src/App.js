import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import './styles/app.scss';
import 'bulma/css/bulma.css';

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_DB_HOST);
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      console.log(res.data);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

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

  const addItem = async (newItem) => {
    //   console.log(newItem);

    //   // newItem id 키 값 넣고, newItem done 키 값
    //   newItem.id = todoItems.length + 1;
    //   newItem.done = false;

    //   const addTodo = {
    //     id: newItem.id,
    //     title: newItem.title,
    //     done: newItem.done,
    //   };
    //   console.log(addTodo);
    //   setTodoItems([...todoItems, addTodo]);

    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    // axios.post('url', {})

    setTodoItems([...todoItems, res.data]);
  };

  const deleteItem = async (targetItem) => {
    await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`
    );

    const newTodo = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodo);
  };

  const todoCount = todoItems.length;
  const newArray = todoItems.sort();

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <>
      <div className="container is-widescreen">
        <div className="notification is-primary title is-1 hero is-info">
          My Todo List!
        </div>
      </div>
      <div className="App">
        <AddTodo addItem={addItem} />
        <h4 class="subtitle is-4">{todoCount} todos !</h4>

        {newArray.map((item) => (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
