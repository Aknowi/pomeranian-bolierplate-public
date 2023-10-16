import { MemoGameView } from './MemoGameView';
import { MemoMenuView } from './MemoMenuView';
import { MemoPlayground } from './MemoPlayground';
import { useState } from 'react';
import './styles.css';

export const MemoryGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [IsGameEnded, setIsGameEnded] = useState(false);

  const [time, setTime] = useState(0);
  const [myTime, setMyTime] = useState(0);
  const [amount, setAmount] = useState(0);
  const [boardSize, setBoardSize] = useState(8);
  const [pairValue, setPairValue] = useState(0);

  return (
    <div className="mg-wrapper">
      <h4 className="mg-title">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>
      {isGameStopped && (
        <p>{`Niestety, zakończyłeś grę przed jej ukończeniem.Odkryłeś ${pairValue} par w czasie ${time} sekund oraz ${amount} ruchach.`}</p>
      )}

      {IsGameEnded && (
        <p>{`Gratulacje! Odkryłeś ${pairValue} par w czasie ${time} sekund oraz ${amount} ruchach.`}</p>
      )}
      <div className="mg-game-div">
        {!isGameStarted && (
          <MemoMenuView
            setIsGameStarted={setIsGameStarted}
            setTime={setTime}
            setBoardSize={setBoardSize}
            setIsGameStopped={setIsGameStopped}
            setIsGameEnded={setIsGameEnded}
            setAmount={setAmount}
            setPairValue={setPairValue}
          />
        )}
        {isGameStarted && (
          <MemoGameView
            setIsGameStarted={setIsGameStarted}
            time={time}
            setTime={setTime}
            setIsGameStopped={setIsGameStopped}
            amount={amount}
          />
        )}
        {isGameStarted && (
          <MemoPlayground
            setIsGameEnded={setIsGameEnded}
            boardSize={boardSize}
            setMyTime={setMyTime}
            setIsGameStarted={setIsGameStarted}
            time={time}
            setAmount={setAmount}
            amount={amount}
            pairValue={pairValue}
            setPairValue={setPairValue}
          />
        )}
      </div>
    </div>
  );
};
