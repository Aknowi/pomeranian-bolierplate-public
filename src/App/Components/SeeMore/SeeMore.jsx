import './styles.css';
import { NavLink } from 'react-router-dom';

export const SeeMore = (props) => {
  return (
    <nav>
      <div className="see-more-block">
        <h3>{props.title}</h3>
        {props.icon}
        <p>{props.description}</p>
        <NavLink to={props.navlink}>zobacz więcej &#62;</NavLink>
      </div>
    </nav>
  );
};
