import { DoneIcon } from '../ToDoIcons/DoneIcon';
import { EditIcon } from '../ToDoIcons/EditIcon';
import { TrashIcon } from '../ToDoIcons/TrashIcon';
import './styles.css';

export const ToDoItem = ({
  isDoneActive,
  onClickDone,
  onClickEdit,
  isEditClicked,
  title,
  author,
  createdAt,
  note,
}) => {
  const doneClassName = isDoneActive ? 'toDoItem--done' : '';
  return (
    <div className={`toDoItem-box ${doneClassName}`}>
      <div className="toDoItem-left">
        <h4 className="toDoItem-title">{title}</h4>
        <p className="toDoItem-details">{author}</p>
        <p className="toDoItem-details">{createdAt}</p>
        <p className="toDoItem-text">{note}</p>
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
        <button
          onClick={onClickEdit}
          isEditClicked={isEditClicked}
          className="toDoItem-button"
        >
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
