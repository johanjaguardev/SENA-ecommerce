import React from 'react';
import type { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onRegisterClick,
  cartItemCount,
  onCartClick,
}) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <a href="/" style={styles.logoLink}>
          DistriBikes
        </a>
      </div>
      <nav style={styles.nav}>
        <a href="/#about" style={styles.navLink}>
          Nosotros
        </a>
        <a href="/#products" style={styles.navLink}>
          Productos
        </a>
        <a href="/#contact" style={styles.navLink}>
          Contacto
        </a>
      </nav>
      <div style={styles.actions}>
        <button onClick={onLoginClick} style={styles.actionButton}>
          Login
        </button>
        <button onClick={onRegisterClick} style={styles.actionButton}>
          Registro
        </button>
        <button onClick={onCartClick} style={styles.cartButton}>
          🛒
          {cartItemCount > 0 && <span style={styles.cartCount}>{cartItemCount}</span>}
        </button>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '1rem',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  actionButton: {
    background: 'none',
    border: '1px solid #ccc',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  cartButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '0.2rem 0.4rem',
    fontSize: '0.75rem',
  },
};

export default Header;
