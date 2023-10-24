import './styles.css';
import { useEffect, useState } from 'react';

const elementsShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
  }
  return array;
};

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

const generatedBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);

  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return elementsShuffle(
    mergedLetters.map((obj, index) => {
      return {
        ...obj,
        id: index + 1,
      };
    })
  );
};

console.log(generatedBoard(8));

export const MemoPlayground = ({
  boardSize,
  setIsGameEnded,
  setIsGameStarted,
  setMyTime,
  time,
  setAmount,
  amount,
  setPairValue,
  pairValue,
}) => {
  const [board, setBoard] = useState(generatedBoard(boardSize));
  const [firstClickedFieldId, setFirstClickedFieldId] = useState(null);
  const [secondClickedFieldId, setSecondClickedFieldId] = useState(null);

  const handleClick = (object) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId !== object.id;

    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(object.id);
      resetClick(setSecondClickedFieldId);
    } else {
      setFirstClickedFieldId(object.id);
      resetClick(setFirstClickedFieldId);
    }
  };

  const resetClick = (callback) => {
    setTimeout(() => callback(undefined), 1000);
  };

  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {
      setAmount(amount + 1);
      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      ).value;
      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      ).value;
      if (firstClickedFieldValue === secondClickedFieldValue) {
        setPairValue(pairValue + 1);
        setBoard(
          board.map((field) => {
            return {
              ...field,
              isPaired: field.isPaired
                ? true
                : firstClickedFieldId === field.id ||
                  secondClickedFieldId === field.id,
            };
          })
        );
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId]);

  useEffect(() => {
    if (board.find((item) => item.isPaired === false)) {
      setIsGameEnded(false);
    } else {
      setIsGameStarted(false);
      setIsGameEnded(true);
      setMyTime(time);
    }
  }, [board]);

  return (
    <div className="mg-board">
      {board.map((element) => {
        const isClicked =
          firstClickedFieldId === element.id ||
          secondClickedFieldId === element.id;
        const canShowValue = isClicked || element.isPaired;
        const clickFieldClassName = isClicked ? 'mg-board-cell-clicked' : '';
        const pairedFieldClassName = element.isPaired
          ? 'mg-board-cell-paired'
          : '';
        return (
          <div
            key={element.id}
            className={`mg-board-cell ${clickFieldClassName} ${pairedFieldClassName}`}
            onClick={() => handleClick(element)}
          >
            {canShowValue && element.value}
          </div>
        );
      })}
    </div>
  );
};
