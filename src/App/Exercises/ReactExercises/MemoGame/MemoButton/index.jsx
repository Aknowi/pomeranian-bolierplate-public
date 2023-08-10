import './styles.css';

export const MemoButton = ({
  disabled,
  children,
  onClick,
  isActive,
  isPass,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`memobutton-custom ${
        isActive ? 'memobutton-custom--active' : ''
      } ${isPass ? 'memobutton--pass' : ''} ${
        disabled ? 'memobutton-custom-disabled' : ''
      }`}
    >
      {children}
    </button>
  );
};
