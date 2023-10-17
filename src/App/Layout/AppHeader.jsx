import React from 'react';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import selfie from '../Images/iwona.png';
import { RoundImage } from '../Components/RoundImage/RoundImage';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-menu">
        <a href="./Settings" className="header-menu-svg">
          <SettingIcon />
        </a>
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
