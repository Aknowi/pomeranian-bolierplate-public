import './styles.css';

// TO DO:
// - hovery na przyciski edit, done, trash
// - css na przyciski edit, trash po kliknięciu w done
// - schowac 'data zakonczenia'

export const MakeToDo = ({
  setIsAddActive,
  isEditClicked,
  setIsEditClicked,
}) => {
  const handleBackClick = () => {
    setIsAddActive(false);
    setIsEditClicked(false);
  };

  const handleAddToDoClick = () => {};

  return (
    <div className="mtd-wrapper">
      <p className="mtd-title">Dodawanie zadania</p>
      <label className="mts-label">Tytuł</label>
      <input className="mtd-input-style" Placeholder="Kupić parasol"></input>
      {!isEditClicked && (
        <>
          <label className="mts-label">Autor</label>
          <input className="mtd-input-style" Placeholder="Iwona"></input>
        </>
      )}
      <label className="mts-label">Treść</label>
      <textarea
        className="mtd-input-style mtd-textarea"
        Placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
      ></textarea>
      <button onClick={handleBackClick} className="mtd-back mtd-button-style">
        cofnij
      </button>
      <button onClick={handleAddToDoClick} className="mtd-add mtd-button-style">
        dodaj
      </button>
    </div>
  );
};
