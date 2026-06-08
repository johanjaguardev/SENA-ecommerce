import React from 'react';
import Modal from './Modal';
import type { Product } from '../types';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
}) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img src={product.image} alt={product.name} style={styles.productImage} />
        </div>
        <div style={styles.detailsContainer}>
          <div style={styles.info}>
            <p style={styles.description}>{product.description}</p>
            {/* Aquí puedes añadir más detalles como marca, material, etc. */}
          </div>
          <div style={styles.actions}>
            <div style={styles.priceContainer}>
              <span style={styles.price}>{formatPrice(product.price)}</span>
            </div>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose(); // Cierra el modal después de añadir al carrito
              }}
              style={styles.addToCartButton}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    display: 'flex',
    gap: '2rem',
    padding: '1rem',
  },
  imageContainer: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
  },
  priceContainer: {
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
  },
};

export default ProductDetailModal;
