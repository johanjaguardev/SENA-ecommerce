import React, { useEffect } from 'react';

interface SuccessMessageProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  isVisible,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div style={styles.container} role="alert" aria-live="polite">
      <div style={styles.content}>
        <span style={styles.checkmark}>✓</span>
        <span style={styles.message}>{message}</span>
        <button onClick={onClose} style={styles.closeButton} aria-label="Cerrar mensaje">
          ×
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 3000,
    animation: 'slideIn 0.3s ease-out',
  },
  content: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minWidth: '300px',
  },
  checkmark: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  message: {
    flex: 1,
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: 0,
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  },
};

export default SuccessMessage;
