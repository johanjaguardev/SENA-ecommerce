import React from 'react';
import Modal from './Modal';
import type { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemoveItem?: (id: number) => void;
  onCheckout?: () => void;
  isCheckoutLoading?: boolean;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  isCheckoutLoading = false,
}) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);

  const total = items.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Tu carrito" size="large">
      {items.length === 0 ? (
        <div style={styles.emptyState}>
          <p style={styles.emptyTitle}>Tu carrito está vacío</p>
          <p style={styles.emptyText}>Explora nuestras bicicletas y agrega tus favoritas.</p>
        </div>
      ) : (
        <div style={styles.container}>
          <div style={styles.list}>
            {items.map((item) => (
              <div key={item.id} style={styles.itemRow}>
                <img src={item.imagen} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemInfo}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemMeta}>
                    {item.marca} • {item.tipo} • {item.color}
                  </p>
                  <p style={styles.itemPrice}>{formatPrice(item.precio)}</p>
                </div>
                <div style={styles.itemActions}>
                  <div style={styles.quantityWrapper}>
                    <button
                      type="button"
                      style={styles.qtyButton}
                      onClick={() =>
                        onUpdateQuantity &&
                        onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button
                      type="button"
                      style={styles.qtyButton}
                      onClick={() =>
                        onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    style={styles.removeButton}
                    onClick={() => onRemoveItem && onRemoveItem(item.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Subtotal</span>
              <span style={styles.summaryValue}>{formatPrice(total)}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Envío estimado</span>
              <span style={styles.summaryValue}>Incluido</span>
            </div>
            <div style={styles.summaryRowTotal}>
              <span style={styles.summaryTotalLabel}>Total</span>
              <span style={styles.summaryTotalValue}>{formatPrice(total)}</span>
            </div>
            <button
              type="button"
              style={styles.checkoutButton}
              onClick={onCheckout}
              disabled={items.length === 0 || isCheckoutLoading}
            >
              {isCheckoutLoading ? 'Redirigiendo...' : 'Proceder al pago'}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxHeight: '60vh',
    overflowY: 'auto',
    paddingRight: '0.5rem',
  },
  itemRow: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr auto',
    gap: '1rem',
    padding: '0.75rem 0',
    borderBottom: '1px solid #e5e7eb',
    alignItems: 'center',
  },
  itemImage: {
    width: '100px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  itemName: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 600,
  },
  itemMeta: {
    margin: 0,
    fontSize: '0.8rem',
    color: '#6b7280',
  },
  itemPrice: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  itemActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.5rem',
  },
  quantityWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  qtyButton: {
    width: '28px',
    height: '28px',
    borderRadius: '999px',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontWeight: 600,
  },
  quantity: {
    minWidth: '24px',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ef4444',
    fontSize: '0.8rem',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  summary: {
    borderLeft: '1px solid #e5e7eb',
    paddingLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    color: '#4b5563',
  },
  summaryRowTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
  },
  summaryLabel: {
    fontWeight: 500,
  },
  summaryValue: {
    fontWeight: 500,
  },
  summaryTotalLabel: {
    fontWeight: 700,
    fontSize: '1rem',
  },
  summaryTotalValue: {
    fontWeight: 700,
    fontSize: '1.05rem',
  },
  checkoutButton: {
    marginTop: '0.75rem',
    width: '100%',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  emptyState: {
    textAlign: 'center',
    padding: '2.5rem 1rem',
  },
  emptyTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  emptyText: {
    fontSize: '0.9rem',
    color: '#6b7280',
  },
};

export default CartModal;
