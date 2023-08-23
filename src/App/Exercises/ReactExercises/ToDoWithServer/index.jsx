import { useState, useEffect } from 'react';
import { ToDoItem } from './ToDoItem';
import './styles.css';
import { MakeToDo } from './MakeToDo';
import { ToDoExeptions } from './ToDoExeptions';

// TO DO:
// - hovery na przyciski edit, done, trash
// - css na przyciski edit, trash po kliknięciu w done
// - schowac 'data zakonczenia'
// - dodac catch error przy getToDO
// - dodac wyglądy jak lista jest pusta oraz obsługa błędów

// Pytanie - czemu 2x renderuje sie na poczatku tablica z todo

export const ToDoWithServer = () => {
  const [isAddActive, setIsAddActive] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDoneError, setIsDoneError] = useState(false);

  const [toDo, setToDo] = useState([]);

  //  POBRANIE LISTY Z SERVERA
  async function getToDo() {
    try {
      const response = await fetch('http://localhost:3333/api/todo');
      if (response.status !== 200) {
        throw new Error('Error from getToDo');
      }
      const toDoJson = await response.json();
      setToDo(toDoJson);
      setIsRefreshNeeded(false);
    } catch (error) {
      setIsError(true);
    }
  }

  //  USUNIĘCIE ELEMENTU LISTY Z SERVERA PER ID
  const deleteToDoPerId = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/api/todo/${id}`, {
        method: 'DELETE',
      });
      const toDoJsonDelete = await response.json();
    } catch (error) {
      alert('backend when delete');
    }
  };

  //  ZAZNACZENIE ELEMENTU LISTY PER ID NA DONE
  const markToDoAsDone = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/todo/${id}/markAsDone`,
        {
          method: 'PUT',
        }
      );
      if (response.status !== 200) {
        throw new Error('Error from markToDoAsDone');
      }
    } catch (error) {
      setIsDoneError(true);
    }
  };

  const onClickDone = (object) => {
    markToDoAsDone(object.id);
    setIsRefreshNeeded(true);
  };

  const handleAddClick = () => {
    setIsAddActive(true);
  };

  const onClickEdit = () => {
    setIsEditClicked(true);
    setIsAddActive(true);
  };

  const onClickTrash = (object) => {
    deleteToDoPerId(object.id);
    setIsRefreshNeeded(true);
  };

  const handleRefreshClick = () => {
    setIsRefreshNeeded(true);
    setIsError(false);
  };

  useEffect(() => {
    getToDo();
  }, [isRefreshNeeded, setIsRefreshNeeded]);
  console.log(toDo);

  return (
    <div className="tdws-wrapper">
      {isError && (
        <ToDoExeptions
          info="Przepraszamy. Nie udało się pobrać listy zadań."
          title="odśwież widok"
          onClick={handleRefreshClick}
        />
      )}
      {!isAddActive && !isError && toDo.length === 0 && (
        <ToDoExeptions
          info="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania."
          title="dodaj zadanie"
          onClick={handleAddClick}
        />
      )}
      {!isAddActive && !isError && toDo.length !== 0 && (
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
                  onClickDone={() => onClickDone(object)}
                  onClickEdit={onClickEdit}
                  isEditClicked={isEditClicked}
                  title={object.title}
                  author={object.author}
                  createdAt={object.createdAt}
                  note={object.note}
                  isDone={object.isDone}
                  id={object.id}
                  onClickTrash={() => onClickTrash(object)}
                  isDoneError={isDoneError}
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
          setIsRefreshNeeded={setIsRefreshNeeded}
        />
      )}
    </div>
  );
};
