import React from 'react';
import type { ProductCardProps } from '../types';

interface ProductCardExtendedProps extends ProductCardProps {
  onViewDetails?: (product: ProductCardProps['product']) => void;
  onAddToCart?: (product: ProductCardProps['product']) => void;
}

const ProductCard: React.FC<ProductCardExtendedProps> = ({
  product,
  onViewDetails,
  onAddToCart,
}) => {
  const handleViewCart = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  const handleBuy = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <article style={styles.productCard} role="article" aria-labelledby={`product-${product.id}`}>
      <img src={product.imagen} alt={product.name} loading="lazy" style={styles.productImage} />
      <div style={styles.productInfo}>
        <h3 style={styles.productTitle} id={`product-${product.id}`}>
          {product.name}
        </h3>

        <div style={styles.productDetails}>
          <p style={styles.detailItem}>
            <span style={styles.detailLabel}>Tipo:</span> {product.tipo}
          </p>
          <p style={styles.detailItem}>
            <span style={styles.detailLabel}>Marca:</span> {product.marca}
          </p>
          <p style={styles.detailItem}>
            <span style={styles.detailLabel}>Color:</span> {product.color}
          </p>
        </div>

        <p style={styles.productPrice} aria-label={`Precio: ${product.precio}`}>
          Precio: {formatPrice(product.precio)}
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={styles.viewCartButton}
            onClick={handleViewCart}
            aria-label={`Ver detalles de ${product.name}`}
          >
            Ver Detalles
          </button>
          <button
            style={styles.buyButton}
            onClick={handleBuy}
            aria-label={`Comprar ${product.name}`}
          >
            Comprar
          </button>
        </div>
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
    display: 'flex',
    flexDirection: 'column',
  },
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    display: 'block',
  },
  productInfo: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  productTitle: {
    fontSize: '1.125rem',
    margin: '0 0 1rem 0',
    color: '#1a1a1a',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  productDetails: {
    marginBottom: '1rem',
    fontSize: '0.875rem',
  },
  detailItem: {
    margin: '0.25rem 0',
    color: '#666',
    lineHeight: 1.5,
  },
  detailLabel: {
    fontWeight: 600,
    color: '#333',
  },
  productPrice: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: '0.5rem 0 1rem 0',
  },
  buttonContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: 'auto',
  },
  viewCartButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    color: '#1a1a1a',
    border: '1px solid #e0e0e0',
    padding: '0.75rem',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'background-color 0.2s',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'background-color 0.2s',
  },
};

export default ProductCard;
