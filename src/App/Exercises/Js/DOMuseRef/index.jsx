import './styles.css';

export const DOMuseRef = () => {
  return (
    <div>
      <div onClick={(e) => console.log(e)} id="domElement">
        To jest konkretny div z danym id: domElement
      </div>
      DOM use Ref
    </div>
  );
};
