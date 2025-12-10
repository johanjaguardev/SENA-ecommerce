import React from 'react';
import {
  HeaderCartButton,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
} from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>Mi Tienda</HeaderLogo>
        <HeaderNav role="navigation" aria-label="Navegación principal">
          <HeaderNavLink href="#inicio">Inicio</HeaderNavLink>
          <HeaderNavLink href="#productos">Productos</HeaderNavLink>
          <HeaderNavLink href="#categorias">Categorías</HeaderNavLink>
          <HeaderNavLink href="#contacto">Contacto</HeaderNavLink>
          <HeaderCartButton aria-label="Ver carrito de compras">🛒 Carrito (0)</HeaderCartButton>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
