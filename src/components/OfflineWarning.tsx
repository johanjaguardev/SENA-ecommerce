import React from 'react';

interface OfflineWarningProps {
  isOffline: boolean;
}

const OfflineWarning: React.FC<OfflineWarningProps> = ({ isOffline }) => {
  if (!isOffline) return null;

  return (
    <div style={styles.overlay} role="alert" aria-live="assertive">
      <div style={styles.card}>
        <div style={styles.icon}>⚠️</div>
        <div style={styles.content}>
          <h2 style={styles.title}>Sin conexión a internet</h2>
          <p style={styles.text}>
            Revisa tu red. Algunas funciones pueden no estar disponibles mientras no tengas
            conexión.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    bottom: '1.5rem',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1200,
    pointerEvents: 'none',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: '#111827',
    color: 'white',
    padding: '0.9rem 1.4rem',
    borderRadius: '999px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
    maxWidth: '520px',
    width: '100%',
    margin: '0 1.5rem',
    pointerEvents: 'auto',
  },
  icon: {
    fontSize: '1.3rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
  },
  title: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  text: {
    margin: 0,
    fontSize: '0.8rem',
    color: '#d1d5db',
  },
};

export default OfflineWarning;
