import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-weight: 700;
`;

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: #ffd700 #f0f0f0;
`;

export const CategoryCard = styled.div<{ color1: string; color2: string }>`
  background: linear-gradient(135deg, ${(props) => props.color1}, ${(props) => props.color2});
  min-width: 200px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryName = styled.p`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 0 1rem;
`;
