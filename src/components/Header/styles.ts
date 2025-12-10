import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const HeaderLogo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeaderNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

export const HeaderCartButton = styled.button`
  background-color: #00ff2aff;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
`;
