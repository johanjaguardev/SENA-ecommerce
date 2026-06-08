import React from 'react';
import Modal from './Modal';
import type { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number | string) => void;
  onUpdateQuantity: (productId: number | string, quantity: number) => void;
  onCheckout: () => void;
  isCheckoutLoading: boolean;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems = [],
  onRemoveFromCart,
  onUpdateQuantity,
  onCheckout,
  isCheckoutLoading,
}) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Carrito de Compras">
      {cartItems.length === 0 ? (
        <p style={styles.emptyMessage}>Tu carrito está vacío.</p>
      ) : (
        <div style={styles.cartContent}>
          <ul style={styles.itemList}>
            {cartItems.map((item) => (
              <li key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <span style={styles.itemName}>{item.name}</span>
                  <span style={styles.itemPrice}>{formatPrice(item.price)}</span>
                </div>
                <div style={styles.itemControls}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                    style={styles.quantityInput}
                  />
                  <button onClick={() => onRemoveFromCart(item.id)} style={styles.removeButton}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.summary}>
            <p style={styles.total}>Total: {formatPrice(total)}</p>
            <button onClick={onCheckout} style={styles.checkoutButton} disabled={isCheckoutLoading}>
              {isCheckoutLoading ? 'Procesando...' : 'Finalizar Compra'}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cartContent: { padding: '1rem' },
  emptyMessage: { textAlign: 'center', padding: '2rem', color: '#666' },
  itemList: { listStyle: 'none', padding: 0, margin: 0 },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '1rem',
  },
  itemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '1rem',
    borderRadius: '4px',
  },
  itemDetails: { flex: 1, display: 'flex', flexDirection: 'column' },
  itemName: { fontWeight: 'bold', marginBottom: '0.25rem' },
  itemPrice: { color: '#888' },
  itemControls: { display: 'flex', alignItems: 'center' },
  quantityInput: { width: '50px', textAlign: 'center', marginRight: '0.5rem' },
  removeButton: {
    background: 'none',
    border: '1px solid #ccc',
    color: '#f00',
    cursor: 'pointer',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
  },
  summary: {
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '2px solid #333',
    textAlign: 'right',
  },
  total: { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' },
  checkoutButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default CartModal;
