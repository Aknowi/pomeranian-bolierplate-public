import { DoneIcon } from '../ToDoIcons/DoneIcon';
import { EditIcon } from '../ToDoIcons/EditIcon';
import { TrashIcon } from '../ToDoIcons/TrashIcon';
import './styles.css';

export const ToDoItem = ({
  onClickDone,
  onClickEdit,
  isEditClicked,
  title,
  author,
  createdAt,
  note,
  isDone,
  onClickTrash,
  isDoneError,
}) => {
  const doneClassName = isDone ? 'toDoItem--done' : '';
  console.log(isDoneError);
  return (
    <div className={`toDoItem-box ${doneClassName}`}>
      <div className="toDoItem-left">
        <h4 className="toDoItem-title">{title}</h4>
        <p className="toDoItem-details">{author}</p>
        <p className="toDoItem-details">{createdAt}</p>
        <p className="toDoItem-text">{note}</p>
      </div>
      <div className="toDoItem-buttons">
        {!isDone && (
          <button
            onClick={onClickDone}
            className={`toDoItem-button ${
              isDoneError ? 'toDoItem-button--error' : ''
            }`}
          >
            <DoneIcon />
          </button>
        )}
        <button
          onClick={onClickEdit}
          isEditClicked={isEditClicked}
          className="toDoItem-button"
        >
          <EditIcon />
        </button>
        <button onClick={onClickTrash} className="toDoItem-button">
          <TrashIcon />
        </button>
        {isDoneError && !isDone && (
          <p className="toDoItem-text--error">nie udało się ukończyć</p>
        )}
        <div className="toDoItem-buttons-details">
          {isDone && <DoneIcon />}
          {isDone && <p className="toDoItem-details">data zakonczenia</p>}
        </div>
      </div>
    </div>
  );
};
