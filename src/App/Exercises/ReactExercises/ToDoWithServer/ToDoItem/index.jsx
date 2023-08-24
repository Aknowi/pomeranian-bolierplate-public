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
  isTrashError,
}) => {
  const doneClassName = isDone ? 'toDoItem--done' : '';
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
              isDoneError.boolean ? 'toDoItem-done--error' : ''
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
        <button
          onClick={onClickTrash}
          className={`toDoItem-button ${
            isTrashError.boolean ? 'toDoItem-trash--error' : ''
          }`}
        >
          <TrashIcon />
        </button>
        {(isDoneError.boolean || isTrashError.boolean) && (
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
