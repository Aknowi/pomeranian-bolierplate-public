import { NavLink } from 'react-router-dom';
import './styles.css';
import { BackLink } from '../Components/BackLink';

export const Exercise = () => {
  return (
    <div className="exercise-wrapper">
      <BackLink link="/dashboard" title="Ćwiczenia" />
      <div>
        <ul className="exercise-list">
          <li>
            <NavLink to="/order-form" className="exercise-list-link">
              Formularz zamówienia
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="exercise-list-link">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="exercise-list-link">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercises" className="exercise-list-link">
              Nieobrobione materiały z ćwiczeń
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
