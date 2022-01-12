/* eslint-disable */
import React from 'react';
import { useTheme } from '../context/Providers/Themeprovider';
import PopupText from './Popup';
import ThemeToggler from './ThemeToggler/ThemeToggler';

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div className="top__nav dark__nav" style={theme === 'dark' ? { backgroundColor: 'black', color: 'white' } : {}}>
      <div className="logo__info">
        <img
          src={`${process.env.PUBLIC_URL}/assets/main-logo.png`}
          alt="site logo"
          width="50px" style={theme === 'dark' ? { backgroundColor: 'white' } : {}}
        />
        <p id="logo__name">Online Compiler</p>
      </div>
      <div className="info__section">
        <ThemeToggler />
        <a href="https://github.com/NegiAkash890/editor-backend">
          <img
            src={`${process.env.PUBLIC_URL}/assets/github.png`}
            title="Go to GitHub Repository"
            alt="GitHub Icon"
          />
        </a>
        <PopupText />
      </div>
    </div>
  );
};

export default NavBar;
