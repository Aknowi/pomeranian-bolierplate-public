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
  id,
  doneDate,
}) => {
  const doneClassName = isDone ? 'toDoItem--done' : '';

  const trashError = isTrashError.boolean && isTrashError.id === id;
  const doneError = isDoneError.boolean && isDoneError.id === id;

  const makeDate = (date) => {
    const convertDate = new Date(date);
    const specDate = `${convertDate.getDate()}.${
      convertDate.getMonth() + 1
    }.${convertDate.getFullYear()}, ${convertDate.getHours()}:${convertDate.getMinutes()}`;
    return specDate.replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
  };

  return (
    <div className={`toDoItem-box ${doneClassName}`}>
      <div className="toDoItem-left">
        <h4 className="toDoItem-title">{title}</h4>
        <p className="toDoItem-details">{author}</p>
        <p className="toDoItem-details">{makeDate(createdAt)}</p>
        <p className="toDoItem-text">{note}</p>
      </div>
      <div className="toDoItem-buttons">
        {!isDone && (
          <button
            onClick={onClickDone}
            className={`toDoItem-button ${
              doneError ? 'toDoItem-done--error' : ''
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
            trashError ? 'toDoItem-trash--error' : ''
          }`}
        >
          <TrashIcon />
        </button>
        {!isDone && (doneError || trashError) && (
          <p className="toDoItem-text--error">nie udało się ukończyć</p>
        )}
        <div className="toDoItem-buttons-details">
          {isDone && <DoneIcon />}
          {isDone && <p className="toDoItem-details">{makeDate(doneDate)}</p>}
        </div>
      </div>
    </div>
  );
};
