import { useState } from 'react';

export const Input = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <input
        data-testid="textInput"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p>Wpisany tekst: {text}</p>
    </div>
  );
};
