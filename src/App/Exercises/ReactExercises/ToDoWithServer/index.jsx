import { useState } from 'react';
import { ToDoItem } from './ToDoItem';
import './styles.css';

export const ToDoWithServer = () => {
  const [isDoneActive, setIsDoneActive] = useState(true);

  const onClickDone = () => {
    setIsDoneActive(true);
  };
  return (
    <div>
      <p>Tutaj znajdziesz liste swoich zadań</p>
      <button>Dodanie kolejnego zadania</button>
      <ul>
        <li>
          <ToDoItem onClickDone={onClickDone} isDoneActive={isDoneActive} />
        </li>
        <li>
          <ToDoItem isDoneActive={isDoneActive} />
        </li>
        <li>
          <ToDoItem isDoneActive={isDoneActive} />
        </li>
      </ul>
    </div>
  );
};
