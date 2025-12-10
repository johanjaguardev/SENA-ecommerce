import React from 'react';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">Mi Tienda</h1>
        <nav className="header__nav" role="navigation" aria-label="Navegación principal">
          <a href="#inicio" className="header__nav-link">
            Inicio
          </a>
          <a href="#productos" className="header__nav-link">
            Productos
          </a>
          <a href="#categorias" className="header__nav-link">
            Categorías
          </a>
          <a href="#contacto" className="header__nav-link">
            Contacto
          </a>
          <button className="header__cart-button" aria-label="Ver carrito de compras">
            🛒 Carrito (0)
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
