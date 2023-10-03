import './styles.css';
import { useSelector } from 'react-redux';

export const Redux = () => {
  const testValue = useSelector((state) => {
    console.log(state, 'state w useSelector');

    return state.test.value;
  });

  const counterValue = useSelector((state) => state.counter.value);

  return (
    <div>
      To jest wartość ze store {testValue}, dodatkowo stan z countera{' '}
      {counterValue}
    </div>
  );
};
