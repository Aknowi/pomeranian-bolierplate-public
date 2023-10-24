import './styles.css';
import { useState } from 'react';

export const LocalDevAndFetch = () => {
  const [todo, setTodo] = useState([]);
  const handleClickToDo = () => {
    getToDoFromLServer();
  };

  async function getToDoFromLServer() {
    const serverData = await fetch('http://localhost:3333/api/todo');
    const toDoJson = await serverData.json();
    setTodo(toDoJson);
  }

  console.log(todo);
  return (
    <div>
      <h3>fetch todo from local server </h3>
      <button onClick={() => handleClickToDo()}>GET DATA</button>
      {todo.map((object) => (
        <div>
          <p>id:{object.id}</p>
          <p>title:{object.title}</p>
          <p>createdAt:{object.createdAt}</p>
        </div>
      ))}
    </div>
  );
};
