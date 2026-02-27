import React from 'react';
import Modal from './Modal';
import type { Bicycle } from '../types';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Bicycle | null;
  onAddToCart?: (product: Bicycle) => void;
  onBuyNow?: (product: Bicycle) => void;
  onViewCart?: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onBuyNow,
  onViewCart,
}) => {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name} size="large">
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={product.imagen} alt={product.name} style={styles.productImage} />
        </div>

        <div style={styles.detailsContainer}>
          <div style={styles.descriptionSection}>
            <h3 style={styles.sectionTitle}>Descripción:</h3>
            <p style={styles.description}>{product.descripcion}</p>
          </div>

          <div style={styles.detailsSection}>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Tipo:</span>
              <span style={styles.detailValue}>{product.tipo}</span>
            </div>
            {product.tamaño && (
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Tamaño:</span>
                <span style={styles.detailValue}>{product.tamaño}</span>
              </div>
            )}
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Marca:</span>
              <span style={styles.detailValue}>{product.marca}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Color:</span>
              <span style={styles.detailValue}>{product.color}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Precio:</span>
              <span style={styles.price}>{formatPrice(product.precio)}</span>
            </div>
          </div>

          <div style={styles.actionsContainer}>
            <button onClick={onViewCart} style={styles.viewCartButton}>
              Ver Carrito
            </button>
            <button onClick={() => onBuyNow && onBuyNow(product)} style={styles.buyNowButton}>
              Comprar ahora
            </button>
            <button
              onClick={() => onAddToCart && onAddToCart(product)}
              style={styles.addToCartButton}
            >
              Añadir Carrito
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  descriptionSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: '#1a1a1a',
    margin: 0,
  },
  description: {
    fontSize: '0.875rem',
    color: '#666',
    lineHeight: 1.6,
    margin: 0,
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },
  detailLabel: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#666',
  },
  detailValue: {
    fontSize: '0.875rem',
    color: '#1a1a1a',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: 'auto',
  },
  viewCartButton: {
    backgroundColor: '#f0f0f0',
    color: '#1a1a1a',
    border: '1px solid #e0e0e0',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  buyNowButton: {
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  addToCartButton: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default ProductDetailModal;
