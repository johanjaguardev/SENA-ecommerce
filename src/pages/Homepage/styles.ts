import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
`;

export const HomepageMainContent = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const HomepageInnerBox = styled.div`
  textalign: 'center';
  padding: '4rem';
`;
