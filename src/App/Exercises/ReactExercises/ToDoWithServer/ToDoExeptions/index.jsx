import './styles.css';

export const ToDoExeptions = ({ info, onClick, title }) => {
  return (
    <div className="tdr-wrapper">
      <p>{info}</p>
      <button onClick={onClick} className="tdr-button">
        {title}
      </button>
    </div>
  );
};
