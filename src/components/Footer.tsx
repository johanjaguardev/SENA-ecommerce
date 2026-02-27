import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>BIKE SENA</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <Link to="/informacion/quienes-somos" style={styles.footerLink}>
                Quienes somos
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/nuestras-tiendas" style={styles.footerLink}>
                Nuestras tiendas
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/contactos" style={styles.footerLink}>
                Contactos
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/sobre-nosotros" style={styles.footerLink}>
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>COMPRA</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <Link to="/informacion/productos" style={styles.footerLink}>
                Productos
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/ofertas" style={styles.footerLink}>
                Ofertas
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/nuevos-productos" style={styles.footerLink}>
                Nuevos productos
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/categorias" style={styles.footerLink}>
                Categorias
              </Link>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>LEGAL</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <Link to="/informacion/terminos" style={styles.footerLink}>
                Terminos y Condiciones
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/politica-privacidad" style={styles.footerLink}>
                Politica de Privacidad
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/politica-cookies" style={styles.footerLink}>
                Politica de Cookies
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/aviso-legal" style={styles.footerLink}>
                Aviso Legal
              </Link>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>EXPERIENCIA</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <Link to="/informacion/ayuda" style={styles.footerLink}>
                Ayuda
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/preguntas-frecuentes" style={styles.footerLink}>
                Preguntas Frecuentes
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/envios" style={styles.footerLink}>
                Envios
              </Link>
            </li>
            <li style={styles.footerListItem}>
              <Link to="/informacion/devoluciones" style={styles.footerLink}>
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.socialSection}>
          <p style={styles.socialTitle}>Siguenos:</p>
          <div style={styles.socialIcons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              style={styles.socialLink}
            >
              <span style={styles.socialIcon}>f</span>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              style={styles.socialLink}
            >
              <span style={styles.socialIcon}>?</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={styles.socialLink}
            >
              <span style={styles.socialIcon}>?</span>
            </a>
          </div>
        </div>

        <div style={styles.paymentSection}>
          <p style={styles.paymentTitle}>Metodos de pago:</p>
          <div style={styles.paymentIcons}>
            <span style={styles.paymentIcon} title="Visa">
              VISA
            </span>
            <span style={styles.paymentIcon} title="Mastercard">
              MC
            </span>
            <span style={styles.paymentIcon} title="PayPal">
              PP
            </span>
            <span style={styles.paymentIcon} title="Apple Pay">
              AP
            </span>
            <span style={styles.paymentIcon} title="Samsung Pay">
              SP
            </span>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        � {new Date().getFullYear()} SENA-COMMERCE. Todos los derechos reservados.
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#f8f8f8',
    color: '#1a1a1a',
    padding: '3rem 2rem 1.5rem',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerSection: {
    lineHeight: 1.8,
  },
  footerTitle: {
    marginBottom: '1rem',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginTop: 0,
    textTransform: 'uppercase',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    marginBottom: '0.5rem',
  },
  footerLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  },
  bottomSection: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid #e0e0e0',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  socialSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  socialTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1a1a1a',
    margin: 0,
  },
  socialIcons: {
    display: 'flex',
    gap: '0.75rem',
  },
  socialLink: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#1a1a1a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  socialIcon: {
    fontSize: '1rem',
  },
  paymentSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  paymentTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1a1a1a',
    margin: 0,
  },
  paymentIcons: {
    display: 'flex',
    gap: '0.5rem',
  },
  paymentIcon: {
    padding: '0.25rem 0.5rem',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#1a1a1a',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e0e0e0',
    color: '#999',
    fontSize: '0.875rem',
  },
};

export default Footer;
