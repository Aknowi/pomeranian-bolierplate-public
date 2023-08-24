import { useState } from 'react';
import './styles.css';

export const EditToDo = ({
  setIsEditClicked,
  setIsRefreshNeeded,
  toDoObject,
  setToDoObject,
}) => {
  const [isAddError, setIsAddError] = useState(false);

  console.log(toDoObject);

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

      if (response.status !== 200) {
        throw new Error('Error from editToDo');
      }
      if (response.status === 200) {
        setIsRefreshNeeded(true);
      }
    } catch (error) {
      setIsAddError(true);
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
    if (!isAddError) {
      setIsEditClicked(false);
      setIsRefreshNeeded(true);
    }
  };

  return (
    <div className="mtd-wrapper">
      <p className="mtd-title">Dodawanie zadania</p>
      <form onSubmit={handleEditOnSubmit}>
        <label className="mts-label">
          Tytuł
          <input
            type="text"
            name="title"
            value={toDoObject.title}
            onChange={onChange}
            className="mtd-input-style"
            placeholder="Kupić parasol"
          ></input>
        </label>
        <label className="mts-label">
          Treść
          <textarea
            type="text"
            name="note"
            value={toDoObject.note}
            onChange={onChange}
            className="mtd-input-style mtd-textarea"
            placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
          ></textarea>
        </label>

        {isAddError && <p>Wystąpił błąd, spróbuj ponownie.</p>}

        <button onClick={handleBackClick} className="mtd-back mtd-button-style">
          cofnij
        </button>
        <button
          type="submit"
          value="submit"
          className="mtd-add mtd-button-style"
        >
          zapisz
        </button>
      </form>
    </div>
  );
};
