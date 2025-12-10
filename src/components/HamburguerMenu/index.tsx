import React, { useState } from 'react';
import './styles.scss';
import type { HamburguerMenuProps } from '../../types';

const HamburguerMenu: React.FC<HamburguerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button
        className={`hamburger-menu__button ${isOpen ? 'hamburger-menu__button--open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
      </button>

      <nav className={`hamburger-menu__nav ${isOpen ? 'hamburger-menu__nav--open' : ''}`}>
        <ul className="hamburger-menu__list">
          {items.map((item, index) => (
            <li key={index} className="hamburger-menu__item">
              <a href={item.href} onClick={toggleMenu} className="hamburger-menu__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
