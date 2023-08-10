import './styles.css';
import { MemoSelectButtons } from '../MemoSelectButton';
import { MemoMenu } from '../MemoMenu';
import { MemoButton } from '../MemoButton';

export const MemoMenuView = ({
  setIsGameStarted,
  setIsGameStopped,
  setIsGameEnded,
  setTime,
  setBoardSize,
  setAmount,
  setPairValue,
}) => {
  function handleStartOnClick() {
    setIsGameStarted(true);
    setIsGameStopped(false);
    setIsGameEnded(false);
    setTime(0);
    setAmount(0);
    setPairValue(0);
  }

  return (
    <>
      <MemoMenu label="LICZBA ELEMENTÓW">
        <MemoSelectButtons
          setValue={setBoardSize}
          options={[
            { value: 8, label: '8 elementów', isActive: true },
            { value: 16, label: '16 elementów', isActive: false },
            { value: 20, label: '20 elementów', isActive: false },
          ]}
        />
      </MemoMenu>
      <MemoMenu label="PRZYCISKI STERUJĄCE">
        <MemoButton onClick={handleStartOnClick}>START</MemoButton>
      </MemoMenu>
    </>
  );
};
