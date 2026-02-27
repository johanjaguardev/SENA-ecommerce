import React from 'react';
import type { ProductGridProps } from '../types';
import ProductCard from './ProductCard';

interface ProductGridExtendedProps extends ProductGridProps {
  onViewDetails?: (product: ProductGridProps['products'][0]) => void;
  onAddToCart?: (product: ProductGridProps['products'][0]) => void;
}

const ProductGrid: React.FC<ProductGridExtendedProps> = ({
  products,
  onViewDetails,
  onAddToCart,
}) => {
  return (
    <div style={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
};

export default ProductGrid;
