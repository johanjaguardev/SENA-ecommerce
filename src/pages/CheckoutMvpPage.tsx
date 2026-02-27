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
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>Checkout MVP</h1>
        <p style={styles.subtitle}>Simulacion interna de pasarela para demo.</p>

        {!payload ? (
          <p style={styles.empty}>No hay informacion de checkout disponible.</p>
        ) : (
          <div style={styles.summary}>
            <p style={styles.row}>
              <strong>Referencia:</strong> {payload.reference}
            </p>
            <p style={styles.row}>
              <strong>Total:</strong> {formatPrice(payload.amount)}
            </p>
            <p style={styles.row}>
              <strong>Items:</strong> {payload.items}
            </p>
          </div>
        )}

        {paid ? (
          <p style={styles.success}>Pago simulado exitoso.</p>
        ) : (
          <button type="button" style={styles.payButton} onClick={() => setPaid(true)}>
            Pagar (Demo)
          </button>
        )}

        <Link to="/" style={styles.link}>
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    background: '#0f172a',
  },
  card: {
    width: '100%',
    maxWidth: '560px',
    background: '#ffffff',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.25)',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  subtitle: {
    marginTop: '0.5rem',
    color: '#475569',
  },
  summary: {
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: '8px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
  },
  row: {
    margin: '0.25rem 0',
  },
  empty: {
    marginTop: '1rem',
    color: '#64748b',
  },
  payButton: {
    marginTop: '1rem',
    width: '100%',
    border: 'none',
    background: '#ea580c',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '0.75rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  success: {
    marginTop: '1rem',
    color: '#166534',
    fontWeight: 600,
  },
  link: {
    marginTop: '1rem',
    display: 'inline-block',
    color: '#0f172a',
    textDecoration: 'underline',
  },
};

export default CheckoutMvpPage;
