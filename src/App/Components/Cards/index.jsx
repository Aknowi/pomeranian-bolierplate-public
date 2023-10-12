import './styles.css';

export const Cards = (props) => {
  return (
    <a className="card-link" href={props.href}>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={props.src} alt={props.alt} />
        </div>
        <h3 className="card-title">{props.title}</h3>
      </div>
    </a>
  );
};
