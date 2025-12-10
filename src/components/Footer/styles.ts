import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 2rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FooterSection = styled.div`
  line-height: 1.6;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: #ffd700;
  margin-top: 0;
`;

export const FooterText = styled.p`
  color: white;
  margin: 0;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
  color: white;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
`;
