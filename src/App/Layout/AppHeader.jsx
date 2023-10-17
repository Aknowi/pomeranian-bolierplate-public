import React from 'react';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import selfie from '../Images/iwona.png';
import { RoundImage } from '../Components/RoundImage/RoundImage';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { NavLink } from 'react-router-dom';

export function AppHeader() {
  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-menu">
        <nav>
          <NavLink to="/Settings" className="header-menu-svg">
            <SettingIcon />
          </NavLink>
        </nav>
        <div>
          <RoundImage src={selfie} size="50px" />
        </div>
        <div>
          <p>Iwona</p>
          <p>Kursantka</p>
        </div>
      </div>
    </header>
  );
}
