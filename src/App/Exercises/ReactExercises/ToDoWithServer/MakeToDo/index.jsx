import { useState } from 'react';
import './styles.css';

export const MakeToDo = ({
  setIsAddActive,
  isEditClicked,
  setIsEditClicked,
  setIsRefreshNeeded,
}) => {
  const [isForm, setIsForm] = useState({ title: '', note: '', author: '' });
  const [isAddError, setIsAddError] = useState(false);

  //  UTWORZENIE NOWEGO ELEMENTU LISTY
  const createToDo = async () => {
    try {
      const response = await fetch(`http://localhost:3333/api/todo`, {
        method: 'POST',
        body: JSON.stringify(isForm),
      });
      console.log(isForm);
      if (response.status !== 200) {
        throw new Error('Error from createToDo');
      }
    } catch (error) {
      setIsAddError(true);
    }
  };

  const handleBackClick = () => {
    setIsAddActive(false);
    setIsEditClicked(false);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setIsForm({ ...isForm, [e.target.name]: value });
  };
  console.log(isForm);
  const handleAddOnSubmit = (e) => {
    e.preventDefault();
    createToDo();
    setIsRefreshNeeded(true);
  };

  return (
    <div className="mtd-wrapper">
      <p className="mtd-title">Dodawanie zadania</p>
      <form onSubmit={handleAddOnSubmit}>
        <label className="mts-label">
          Tytuł
          <input
            type="text"
            name="title"
            value={isForm.title}
            onChange={onChange}
            className="mtd-input-style"
            Placeholder="Kupić parasol"
          ></input>
        </label>

        {!isEditClicked && (
          <>
            <label className="mts-label">
              Autor
              <input
                type="text"
                name="author"
                value={isForm.author}
                onChange={onChange}
                className="mtd-input-style"
                Placeholder="Iwona"
              ></input>
            </label>
          </>
        )}
        <label className="mts-label">
          Treść
          <textarea
            type="text"
            name="note"
            value={isForm.note}
            onChange={onChange}
            className="mtd-input-style mtd-textarea"
            Placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
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
          dodaj
        </button>
      </form>
    </div>
  );
};
