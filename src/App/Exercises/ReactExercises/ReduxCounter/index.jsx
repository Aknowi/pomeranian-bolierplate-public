import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  incrementByAmount,
} from '../../../../store/features/counterSlice';

export const ReduxCounter = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector((state) => state.counter.value);

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleDelete = () => {
    dispatch(decrement());
  };

  const handleAddByAmount = () => {
    dispatch(
      incrementByAmount({
        amount: 5,
      })
    );
  };

  return (
    <div>
      <h1>Redux Counter</h1>

      <div>
        <h2>Counter:</h2>
        <div>{counterValue}</div>
        <button onClick={handleAdd}>Dodaj 1</button>
        <button onClick={handleDelete}>Odejmij 1</button>
        <button onClick={handleAddByAmount}>Dodaj 5</button>
      </div>
    </div>
  );
};
