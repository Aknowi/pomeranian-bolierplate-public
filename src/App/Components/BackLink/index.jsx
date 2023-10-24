import { NavLink } from 'react-router-dom';
import './styles.css';

export const BackLink = ({ link, title, className }) => {
  return (
    <nav>
      <NavLink to={link} className={`back-link ${className}`}>
        &#60; {title}
      </NavLink>
    </nav>
  );
};
