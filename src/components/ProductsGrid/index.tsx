import React from 'react';
import type { ProductGridProps } from '../../types';
import ProductCard from '../ProductCard';
import './styles.scss';

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="products-section" aria-labelledby="products-title">
      <h2 className="products-section__title" id="products-title">
        Productos Destacados
      </h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
