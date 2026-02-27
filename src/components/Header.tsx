import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onLoginClick?: () => void;
  onCartClick?: () => void;
  onHelpClick?: () => void;
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onCartClick,
  onHelpClick,
  cartCount = 0,
}) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Bicicletas', to: '/' },
    { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
    { label: 'Ayuda', to: '#ayuda' },
  ];

  const isActive = (to: string) => to !== '#' && location.pathname === to;

  return (
    <header style={styles.header}>
      <div style={styles.headerContent} className="header-content-responsive">
        {/* Logo */}
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>SENA-COMMERCE</h1>
        </div>

        {/* Navbar minimalista */}
        <nav
          style={{
            ...styles.nav,
            ...(isNavOpen ? styles.navOpen : {}),
          }}
          aria-label="Navegación principal"
        >
          {navItems.map((item) =>
            item.to.startsWith('#') ? (
              <a key={item.label} href={item.to} style={styles.navLink}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  ...styles.navLink,
                  ...(isActive(item.to) ? styles.navLinkActive : {}),
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Iconos de acción */}
        <div style={styles.actionsContainer}>
          <button
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
            style={styles.menuButton}
            aria-label="Abrir menú de navegación"
          >
            ☰
          </button>

          <button onClick={onHelpClick} style={styles.iconButton} aria-label="Ayuda" title="Ayuda">
            <span style={styles.icon}>?</span>
          </button>
          <button
            onClick={onCartClick}
            style={styles.iconButton}
            aria-label={`Ver carrito (${cartCount} items)`}
            title="Carrito de compras"
          >
            <span style={styles.icon}>🛒</span>
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>
          <button
            onClick={onLoginClick}
            style={styles.iconButton}
            aria-label="Iniciar sesión"
            title="Mi cuenta"
          >
            <span style={styles.icon}>👤</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    padding: '0.75rem 2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.95rem',
  },
  navOpen: {
    // Para futuros ajustes responsivos
  },
  navLink: {
    position: 'relative',
    color: '#6b7280',
    textDecoration: 'none',
    padding: '0.25rem 0',
    fontWeight: 500,
  },
  navLinkActive: {
    color: '#111827',
    fontWeight: 600,
    borderBottom: '2px solid #111827',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.25rem',
    padding: '0.25rem',
    display: 'none',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0.35rem',
    borderRadius: '999px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'background-color 0.2s',
  },
  icon: {
    fontSize: '1.3rem',
    lineHeight: 1,
  },
  cartBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    backgroundColor: '#f97316',
    color: 'white',
    borderRadius: '999px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '0 4px',
  },
};

export default Header;
