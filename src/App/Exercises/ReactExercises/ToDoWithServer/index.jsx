import { useState, useEffect } from 'react';
import { ToDoItem } from './ToDoItem';
import './styles.css';
import { MakeToDo } from './MakeToDo';
import { ToDoExeptions } from './ToDoExeptions';
import { EditToDo } from './EditToDo';

export const ToDoWithServer = () => {
  const [isAddActive, setIsAddActive] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDoneError, setIsDoneError] = useState({ boolean: false, id: '' });
  const [isTrashError, setIsTrashError] = useState({ boolean: false, id: '' });

  const [toDoObject, setToDoObject] = useState({});
  const [toDo, setToDo] = useState([]);

  //  POBRANIE LISTY Z SERVERA
  async function getToDo() {
    console.log('to jest gettodo');
    try {
      const response = await fetch('http://localhost:3333/api/todo');
      console.log('status get ' + response.status);
      if (response.status !== 200) {
        throw new Error('Error from getToDo');
      }

      const toDoJson = await response.json();
      setToDo(toDoJson);
      setIsRefreshNeeded(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  //  USUNIĘCIE ELEMENTU LISTY Z SERVERA PER ID
  const deleteToDoPerId = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/api/todo/${id}`, {
        method: 'DELETE',
      });
      console.log('status delete ' + response.status);
      if (response.status !== 200) {
        throw new Error('Error from markToDoAsDone');
      }
      if (response.status === 200) {
        setIsRefreshNeeded(true);
      }
    } catch (error) {
      console.log(error);
      setIsTrashError({ boolean: true, id });
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
      console.log('status mark ' + response.status);
      if (response.status !== 200) {
        throw new Error('Error from markToDoAsDone');
      }
      if (response.status === 200) {
        setIsRefreshNeeded(true);
      }
    } catch (error) {
      console.log(error);
      setIsDoneError({ boolean: true, id });
    }
  };

  const onClickDone = (object) => {
    markToDoAsDone(object.id);
  };

  const handleAddClick = () => {
    setIsAddActive(true);
  };

  const onClickEdit = (object) => {
    setToDoObject(object);
    setIsEditClicked(true);
  };

  const onClickTrash = (object) => {
    deleteToDoPerId(object.id);
  };

  const handleRefreshClick = () => {
    getToDo()
      .then(() => {
        setIsRefreshNeeded(true);
      })
      .then(() => {
        setIsError(false);
      });
  };

  useEffect(() => {
    getToDo().then(() => {
      setIsFirstLoad(false);
    });
  }, []);

  useEffect(() => {
    if (isRefreshNeeded) {
      getToDo();
      console.log('odswiezylo');
    }
  }, [isRefreshNeeded, setIsRefreshNeeded]);

  return (
    <div className="tdws-wrapper">
      {isError && (
        <ToDoExeptions
          info="Przepraszamy. Nie udało się pobrać listy zadań."
          title="odśwież widok"
          onClick={handleRefreshClick}
        />
      )}
      {!isAddActive &&
        !isError &&
        toDo.length === 0 &&
        !isEditClicked &&
        !isFirstLoad && (
          <ToDoExeptions
            info="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania."
            title="dodaj zadanie"
            onClick={handleAddClick}
          />
        )}
      {!isAddActive && !isError && toDo.length !== 0 && !isEditClicked && (
        <>
          <p>Tutaj znajdziesz liste swoich zadań</p>
          <button
            onClick={handleAddClick}
            className="tdws-add-button-style tdws-plus-button"
          >
            &#43;
          </button>

          {toDo.map((object) => (
            <div key={object.id}>
              <ToDoItem
                onClickDone={() => onClickDone(object)}
                onClickEdit={() => onClickEdit(object)}
                isEditClicked={isEditClicked}
                title={object.title}
                author={object.author}
                createdAt={object.createdAt}
                doneDate={object.doneDate}
                note={object.note}
                isDone={object.isDone}
                id={object.id}
                onClickTrash={() => onClickTrash(object)}
                isDoneError={isDoneError}
                isTrashError={isTrashError}
              />
            </div>
          ))}
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
          setIsEditClicked={setIsEditClicked}
          setIsRefreshNeeded={setIsRefreshNeeded}
        />
      )}
      {isEditClicked && !isAddActive && !isError && toDo.length !== 0 && (
        <EditToDo
          setToDoObject={setToDoObject}
          toDoObject={toDoObject}
          setIsEditClicked={setIsEditClicked}
          setIsRefreshNeeded={setIsRefreshNeeded}
        />
      )}
    </div>
  );
};
