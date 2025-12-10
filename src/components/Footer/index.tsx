import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterSection,
  FooterText,
  FooterTitle,
} from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterSection>
          <FooterTitle>Acerca de Nosotros</FooterTitle>
          <FooterText>
            Tu tienda online de confianza con los mejores productos y precios.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#productos">Productos</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#ofertas">Ofertas</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#ayuda">Ayuda</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#terminos">Términos y Condiciones</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterList>
            <FooterListItem>Email: info@mitienda.com</FooterListItem>
            <FooterListItem>Teléfono: +57 300 123 4567</FooterListItem>
            <FooterListItem>Dirección: Bogotá, Colombia</FooterListItem>
          </FooterList>
        </FooterSection>
        FooterListItem{' '}
      </FooterContent>

      <FooterCopyright>
        © {new Date().getFullYear()} SENA eCommerce. Todos los derechos reservados.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
