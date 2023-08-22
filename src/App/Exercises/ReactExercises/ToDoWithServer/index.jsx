import { useState, useEffect } from 'react';
import { ToDoItem } from './ToDoItem';
import './styles.css';
import { MakeToDo } from './MakeToDo';

// TO DO:
// - hovery na przyciski edit, done, trash
// - css na przyciski edit, trash po kliknięciu w done
// - schowac 'data zakonczenia'
// - dodac catch error przy getToDO

export const ToDoWithServer = () => {
  const [isDoneActive, setIsDoneActive] = useState(false);
  const [isAddActive, setIsAddActive] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getToDo();
    async function getToDo() {
      const serverData = await fetch('http://localhost:3333/api/todo');
      const toDoJson = await serverData.json();
      setToDo(toDoJson);
    }
  }, []);

  console.log(toDo);

  const onClickDone = () => {
    setIsDoneActive(true);
  };

  const handleAddClick = () => {
    setIsAddActive(true);
  };

  const onClickEdit = () => {
    setIsEditClicked(true);
    setIsAddActive(true);
  };

  return (
    <div className="tdws-wrapper">
      {!isAddActive && (
        <>
          <p>Tutaj znajdziesz liste swoich zadań</p>
          <button
            onClick={handleAddClick}
            className="tdws-add-button-style tdws-plus-button"
          >
            &#43;
          </button>
          <ul className="tdws-list">
            {toDo.map((object) => (
              <li>
                <ToDoItem
                  onClickDone={onClickDone}
                  isDoneActive={isDoneActive}
                  onClickEdit={onClickEdit}
                  isEditClicked={isEditClicked}
                  title={object.title}
                  author={object.author}
                  createdAt={object.createdAt}
                  note={object.note}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={handleAddClick}
            className="tdws-add-button-style tdws-add-button"
          >
            Dodaj
          </button>
        </>
      )}
      {isAddActive && (
        <MakeToDo
          setIsAddActive={setIsAddActive}
          isEditClicked={isEditClicked}
          setIsEditClicked={setIsEditClicked}
        />
      )}
    </div>
  );
};
