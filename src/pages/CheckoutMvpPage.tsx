import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const CHECKOUT_STORAGE_KEY = 'sena_ecommerce_checkout_payload';

interface CheckoutPayload {
  reference: string;
  amount: number;
  currency: string;
  items: string;
  returnUrl: string;
  createdAt: string;
}

const CheckoutMvpPage: React.FC = () => {
  const [paid, setPaid] = useState(false);

  const payload = useMemo<CheckoutPayload | null>(() => {
    try {
      const stored = localStorage.getItem(CHECKOUT_STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CheckoutPayload) : null;
    } catch {
      return null;
    }
  }, []);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: payload?.currency ?? 'COP',
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <main className="checkout-page">
      <section className="checkout-page__card">
        <h1 className="checkout-page__title">Checkout MVP</h1>
        <p className="checkout-page__subtitle">Simulacion interna de pasarela para demo.</p>

        {!payload ? (
          <p className="checkout-page__empty">No hay informacion de checkout disponible.</p>
        ) : (
          <div className="checkout-page__summary">
            <p className="checkout-page__row">
              <strong>Referencia:</strong> {payload.reference}
            </p>
            <p className="checkout-page__row">
              <strong>Total:</strong> {formatPrice(payload.amount)}
            </p>
            <p className="checkout-page__row">
              <strong>Items:</strong> {payload.items}
            </p>
          </div>
        )}

        {paid ? (
          <p className="checkout-page__success">Pago simulado exitoso.</p>
        ) : (
          <button
            type="button"
            className="checkout-page__btn checkout-page__btn--pay"
            onClick={() => setPaid(true)}
          >
            Pagar (Demo)
          </button>
        )}

        <Link to="/" className="checkout-page__link">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default CheckoutMvpPage;
