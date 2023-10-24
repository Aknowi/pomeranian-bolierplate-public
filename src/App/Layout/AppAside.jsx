import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { User } from '../Components/Icons/User';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { Game } from '../Components/Icons/Game';
import { BlogIcon } from '../Components/Icons/BlogIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul className="aside-list">
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercise">
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="games">
              <div className="aside-row">
                <Game />
                Gry
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="course">
              <div className="aside-row">
                <BlogIcon />O kursie
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="tech-stack">
              <div className="aside-row">
                <CodeIcon />
                Tech Stack
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="about-me">
              <div className="aside-row">
                <User />O mnie
              </div>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="settings">
              <div className="aside-row">
                <SettingIcon />
                Ustawienia
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
