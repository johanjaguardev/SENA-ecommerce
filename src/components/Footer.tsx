import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Acerca de Nosotros</h4>
          <p style={styles.footerText}>
            Tu tienda online de confianza con los mejores productos y precios.
          </p>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Enlaces Rápidos</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <a href="#productos" style={styles.footerLink}>
                Productos
              </a>
            </li>
            <li style={styles.footerListItem}>
              <a href="#ofertas" style={styles.footerLink}>
                Ofertas
              </a>
            </li>
            <li style={styles.footerListItem}>
              <a href="#ayuda" style={styles.footerLink}>
                Ayuda
              </a>
            </li>
            <li style={styles.footerListItem}>
              <a href="#terminos" style={styles.footerLink}>
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Contacto</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>Email: info@mitienda.com</li>
            <li style={styles.footerListItem}>Teléfono: +57 300 123 4567</li>
            <li style={styles.footerListItem}>Dirección: Bogotá, Colombia</li>
          </ul>
        </div>
      </div>

      <div style={styles.copyright}>
        © {new Date().getFullYear()} SENA eCommerce. Todos los derechos reservados.
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '2rem',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  footerSection: {
    lineHeight: 1.6,
  },
  footerTitle: {
    marginBottom: '1rem',
    fontSize: '1.125rem',
    color: '#ffd700',
    marginTop: 0,
  },
  footerText: {
    color: 'white',
    margin: 0,
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    marginBottom: '0.5rem',
    color: 'white',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #333',
    color: '#999',
  },
};

export default Footer;
