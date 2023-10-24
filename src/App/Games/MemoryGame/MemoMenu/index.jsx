import './styles.css';

export const MemoMenu = ({ label, children }) => {
  return (
    <div className="mg-menu-div">
      <p>{label}</p>
      {children}
    </div>
  );
};
