import { useState } from 'react';
import './styles.css';

export const EditToDo = ({
  setIsEditClicked,
  setIsRefreshNeeded,
  toDoObject,
  setToDoObject,
}) => {
  const [isError, setIsError] = useState(false);

  //  EDYTOWANIE ELEMENTU LISTY
  const editToDo = async () => {
    console.log(JSON.stringify(toDoObject));
    try {
      const response = await fetch(
        `http://localhost:3333/api/todo/${toDoObject.id}`,
        {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(toDoObject),
        }
      );
      console.log('status edit ' + response.status);
      if (response.status !== 200) {
        throw new Error('Error from editToDo');
      }
      if (response.message === 'Server error') {
        throw new Error('Error from editToDo server error');
      }
      if (response.status === 200 && response.message !== 'Server error') {
        setIsRefreshNeeded(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleBackClick = () => {
    setIsEditClicked(false);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setToDoObject({ ...toDoObject, [e.target.name]: value });
  };
  const handleEditOnSubmit = (e) => {
    e.preventDefault();
    editToDo();
    if (!isError) {
      setIsEditClicked(false);
      setIsRefreshNeeded(true);
    }
  };
  console.log(toDoObject);
  return (
    <div className="etd-wrapper">
      <p className="etd-title">Dodawanie zadania</p>
      <form onSubmit={handleEditOnSubmit} className="etd-form">
        <label tmlFor="title" className="etd-label">
          Tytuł
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={toDoObject.title}
          onChange={onChange}
          className="etd-input-style"
          placeholder="Kupić parasol"
        ></input>
        <input type="hidden" name="isDone" id="isDone" value="0"></input>
        <label tmlFor="note" className="etd-label">
          Treść
        </label>
        <textarea
          type="text"
          name="note"
          id="note"
          value={toDoObject.note}
          onChange={onChange}
          className="etd-input-style etd-textarea"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        ></textarea>

        {isError && (
          <p className="etd-error-note">Wystąpił błąd, spróbuj ponownie.</p>
        )}

        <button onClick={handleBackClick} className="etd-back mtd-button-style">
          cofnij
        </button>
        <button
          type="submit"
          value="submit"
          className="etd-add etd-button-style"
        >
          zapisz
        </button>
      </form>
    </div>
  );
};
