import React from 'react';
import type { ProductCardProps } from '../types';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito:', product.name);
    // Aquí irá la lógica del carrito en futuras versiones
  };

  return (
    <article style={styles.productCard} role="article" aria-labelledby={`product-${product.id}`}>
      <img src={product.image} alt={product.name} loading="lazy" style={styles.productImage} />
      <div style={styles.productInfo}>
        <h3 style={styles.productTitle} id={`product-${product.id}`}>
          {product.name}
        </h3>
        <p style={styles.productPrice} aria-label={`Precio: ${product.price}`}>
          ${product.price.toFixed(2)}
        </p>
        <p style={styles.productDescription}>{product.description}</p>
        <button
          style={styles.addToCartButton}
          onClick={handleAddToCart}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  productCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
  },
  productInfo: {
    padding: '1rem',
  },
  productTitle: {
    fontSize: '1rem',
    margin: '0 0 0.5rem 0',
    color: '#1a1a1a',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  productPrice: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#ffd700',
    margin: '0.5rem 0',
  },
  productDescription: {
    fontSize: '0.875rem',
    color: '#666',
    margin: '0.5rem 0',
    lineHeight: 1.4,
  },
  addToCartButton: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '1rem',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
};

export default ProductCard;
