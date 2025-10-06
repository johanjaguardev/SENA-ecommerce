import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>Mi Tienda</h1>
        <nav role="navigation" aria-label="Navegación principal" style={styles.nav}>
          <a href="#inicio" style={styles.navLink}>
            Inicio
          </a>
          <a href="#productos" style={styles.navLink}>
            Productos
          </a>
          <a href="#categorias" style={styles.navLink}>
            Categorías
          </a>
          <a href="#contacto" style={styles.navLink}>
            Contacto
          </a>
          <button style={styles.cartButton} aria-label="Ver carrito de compras">
            🛒 Carrito (0)
          </button>
        </nav>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
  },
  cartButton: {
    backgroundColor: '#ffd700',
    color: '#1a1a1a',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Header;
