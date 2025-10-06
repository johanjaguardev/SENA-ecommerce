import React from 'react';
import type { ProductGridProps } from '../types';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section style={styles.section} aria-labelledby="products-title">
      <h2 style={styles.sectionTitle} id="products-title">
        Productos Destacados
      </h2>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    color: '#1a1a1a',
    fontWeight: 700,
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
  },
};

export default ProductGrid;
