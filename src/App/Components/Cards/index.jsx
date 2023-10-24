import './styles.css';
import { NavLink } from 'react-router-dom';

export const Cards = (props) => {
  return (
    <NavLink className="card-link" to={props.navlink}>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={props.src} alt={props.alt} />
        </div>
        <h3 className="card-title">{props.title}</h3>
      </div>
    </NavLink>
  );
};
