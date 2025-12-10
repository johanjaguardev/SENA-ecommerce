import React from 'react';
import type { ProductGridProps } from '../../types';
import ProductCard from '../ProductCard';
import { Section, SectionTitle, ProductGridContainer } from './styles';

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Section aria-labelledby="products-title">
      <SectionTitle id="products-title">Productos Destacados</SectionTitle>
      <ProductGridContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGridContainer>
    </Section>
  );
};

export default ProductGrid;
