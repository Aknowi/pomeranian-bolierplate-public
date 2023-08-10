import { useEffect } from 'react';
import { MemoButton } from '../MemoButton';
import { MemoMenu } from '../MemoMenu';
import './styles.css';

export const MemoGameView = ({
  setIsGameStarted,
  time,
  setTime,
  setIsGameStopped,
  amount,
}) => {
  function handlePassOnClick() {
    setIsGameStarted(false);
    setIsGameStopped(true);
  }

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (time >= 0) setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timeoutID);
  }, [time, setTime]);
  return (
    <div>
      {/* dodac disabled do przycisków, zeby nie były do przyciskania */}
      <MemoMenu label="CZAS GRY">
        <MemoButton disabled={true}>{time}</MemoButton>
      </MemoMenu>
      <MemoMenu label="LICZBA RUCHÓW">
        <MemoButton disabled={true}>{amount}</MemoButton>
      </MemoMenu>
      <MemoMenu label="PRZYCISKI STERUJĄCE">
        <MemoButton isPass={true} onClick={handlePassOnClick}>
          PASS
        </MemoButton>
      </MemoMenu>
    </div>
  );
};
