import { useEffect, useState } from 'react';
import './styles.css';

export const SavedInput = () => {
  const [nickList, setNickList] = useState(
    JSON.parse(localStorage.getItem('list-nicki')) || []
  );
  const [idCounter, setIdCounter] = useState(
    parseInt(localStorage.getItem('idCounter')) || 0
  );
  const [nick, setNick] = useState('');

  const handleTextOnChange = (e) => {
    const inputTarget = e.target.value;
    setNick(inputTarget);
  };

  const addOnClick = (e) => {
    e.preventDefault();
    if (nick.trim() === '') return;
    const newIdCounter = idCounter + 1;
    setIdCounter(newIdCounter);
    const newNickList = {
      nick: nick,
      id: idCounter,
    };
    setNickList([...nickList, newNickList]);
    setNick('');
  };
  localStorage.setItem('list-nicki', JSON.stringify(nickList));
  localStorage.setItem('idCounter', idCounter);

  return (
    <div className="nickList-wrapper">
      <form className="nickList-form">
        <label>NICK</label>
        <input
          type="text"
          value={nick}
          onChange={handleTextOnChange}
          placeholder="Ania_96"
        ></input>
        <button onClick={addOnClick}>DODAJ</button>
      </form>
      <div className="nick-display-container">
        <ul id="nick-display">
          {nickList.map((objectInArray) => {
            return <li key={objectInArray.id}>{objectInArray.nick}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
