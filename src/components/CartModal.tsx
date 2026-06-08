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
        <p className="cart-modal__empty">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-modal__body">
          <ul className="cart-modal__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-modal__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-modal__item-image"
                />
                <div className="cart-modal__item-details">
                  <span className="cart-modal__item-name">{item.name}</span>
                  <span className="cart-modal__item-price">{formatPrice(item.price)}</span>
                </div>
                <div className="cart-modal__item-controls">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                    className="cart-modal__quantity-input"
                    aria-label={`Cantidad de ${item.name}`}
                  />
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="cart-modal__remove-btn"
                    aria-label={`Eliminar ${item.name} del carrito`}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-modal__summary">
            <p className="cart-modal__total">Total: {formatPrice(total)}</p>
            <button
              onClick={onCheckout}
              className="cart-modal__checkout-btn"
              disabled={isCheckoutLoading}
            >
              {isCheckoutLoading ? 'Procesando...' : 'Finalizar Compra'}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CartModal;
