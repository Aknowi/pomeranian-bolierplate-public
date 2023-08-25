import { useState } from 'react';
import './styles.css';

export const MakeToDo = ({
  setIsAddActive,
  setIsEditClicked,
  setIsRefreshNeeded,
}) => {
  const [isForm, setIsForm] = useState({ title: '', note: '', author: '' });
  const [isError, setIsError] = useState(false);

  //  UTWORZENIE NOWEGO ELEMENTU LISTY
  const createToDo = async () => {
    try {
      const response = await fetch(`http://localhost:3333/api/todo`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(isForm),
      });

      if (response.status !== 200) {
        throw new Error('Error from createToDo');
      }
      if (response.status === 200) {
        setIsRefreshNeeded(true);
      }
    } catch (error) {
      setIsError(true);
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

  const handleAddOnSubmit = (e) => {
    e.preventDefault();
    if (isForm.title !== '' && isForm.author !== '' && isForm.note !== '') {
      createToDo();
      if (!isError) {
        setIsAddActive(false);
        setIsRefreshNeeded(true);
      }
    }
  };

  return (
    <div className="mtd-wrapper">
      <p className="mtd-title">Dodawanie zadania</p>
      <form onSubmit={handleAddOnSubmit} className="mtd-form">
        <label htmlFor="text" className="mts-label">
          Tytuł
        </label>
        <input
          type="text"
          name="title"
          id="text"
          value={isForm.title}
          onChange={onChange}
          className="mtd-input-style"
          placeholder="Kupić parasol"
        ></input>
        <label htmlFor="author" className="mts-label">
          Autor
        </label>
        <input
          type="text"
          name="author"
          id="author"
          value={isForm.author}
          onChange={onChange}
          className="mtd-input-style"
          placeholder="Iwona"
        ></input>
        <label htmlFor="note" className="mts-label">
          Treść
        </label>
        <textarea
          type="text"
          name="note"
          id="note"
          value={isForm.note}
          onChange={onChange}
          className="mtd-input-style mtd-textarea"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        ></textarea>

        {isError && (
          <p className="mtd-error-note">Wystąpił błąd, spróbuj ponownie.</p>
        )}

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
