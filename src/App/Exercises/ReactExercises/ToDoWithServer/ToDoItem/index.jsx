import { DoneIcon } from '../ToDoIcons/DoneIcon';
import { EditIcon } from '../ToDoIcons/EditIcon';
import { TrashIcon } from '../ToDoIcons/TrashIcon';
import './styles.css';

export const ToDoItem = ({ isDoneActive, onClickDone }) => {
  const doneClassName = isDoneActive ? 'toDoItem--done' : '';
  return (
    <div className={`toDoItem-box ${doneClassName}`}>
      <div>
        <h4 className="toDoItem-title">tytuł</h4>
        <p className="toDoItem-details">autor</p>
        <p className="toDoItem-details">data</p>
        <p className="toDoItem-text">treść zadania</p>
      </div>
      <div className="toDoItem-buttons">
        {!isDoneActive && (
          <button
            onClick={onClickDone}
            isDoneActive={isDoneActive}
            className="toDoItem-button"
          >
            <DoneIcon />
          </button>
        )}
        <button className="toDoItem-button">
          <EditIcon />
        </button>
        <button className="toDoItem-button">
          <TrashIcon />
        </button>
        <div className="toDoItem-buttons-details">
          {isDoneActive && <DoneIcon />}
          <p className="toDoItem-details">data zakonczenia</p>
        </div>
      </div>
    </div>
  );
};
