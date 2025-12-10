import styled from 'styled-components';

export const ProductCardContainer = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const ProductCardInfo = styled.div`
  padding: 1rem;
`;

export const ProductCardTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-weight: 600;
  line-height: 1.4;
`;

export const ProductCardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: lime;
  margin: 0.5rem 0;
`;

export const ProductCartDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.4;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;
  transition: background-color 0.2s;
`;
