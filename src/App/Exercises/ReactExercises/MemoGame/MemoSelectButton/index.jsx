import { MemoButton } from '../MemoButton';
import { useState } from 'react';
import './styles.css';

export const MemoSelectButtons = (props) => {
  const { options, setValue } = props;
  const [modifiedElOptions, setModifiedElOptions] = useState(options);

  function handleClick(value) {
    setValue(value);
    setModifiedElOptions(
      modifiedElOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  }
  return (
    <>
      {modifiedElOptions.map(({ isActive, label, value }) => (
        <MemoButton
          onClick={() => {
            handleClick(value);
          }}
          key={value}
          isActive={isActive}
        >
          {label}
        </MemoButton>
      ))}
    </>
  );
};
