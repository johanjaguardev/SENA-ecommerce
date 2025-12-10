import React from 'react';
import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">Acerca de Nosotros</h3>
          <p className="footer__text">
            Tu tienda online de confianza con los mejores productos y precios.
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Enlaces Rápidos</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#productos" className="footer__link">
                Productos
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#ofertas" className="footer__link">
                Ofertas
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#ayuda" className="footer__link">
                Ayuda
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#terminos" className="footer__link">
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__list">
            <li className="footer__list-item">Email: info@mitienda.com</li>
            <li className="footer__list-item">Teléfono: +57 300 123 4567</li>
            <li className="footer__list-item">Dirección: Bogotá, Colombia</li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        © {new Date().getFullYear()} SENA eCommerce. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
