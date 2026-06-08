import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div style={styles.productCard} role="group" aria-labelledby={`product-name-${product.id}`}>
      <div style={styles.imageContainer}>
        {/* CORRECCIÓN: Usar product.image */}
        <img src={product.image} alt={product.name} loading="lazy" style={styles.productImage} />
      </div>
      <div style={styles.productInfo}>
        <h3 id={`product-name-${product.id}`} style={styles.productName}>
          {product.name}
        </h3>
        {/* CORRECCIÓN: Usar product.price */}
        <p style={styles.productPrice} aria-label={`Precio: ${product.price}`}>
          Precio: {formatPrice(product.price)}
        </p>
        <div style={styles.buttonGroup}>
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(product)}
              style={styles.actionButton}
              aria-label={`Ver detalles de ${product.name}`}
            >
              Ver Detalles
            </button>
          )}
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product)}
              style={styles.addToCartButton}
              aria-label={`Añadir ${product.name} al carrito`}
            >
              Añadir al Carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  productCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.3s ease',
  },
  imageContainer: {
    width: '100%',
    paddingTop: '100%', // Aspect Ratio 1:1
    position: 'relative',
    overflow: 'hidden',
  },
  productImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '1rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: '0 0 0.5rem 0',
    flexGrow: 1,
  },
  productPrice: {
    fontSize: '1rem',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: 'auto',
  },
  actionButton: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'transparent',
    cursor: 'pointer',
  },
  addToCartButton: {
    flex: 1,
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default ProductCard;
