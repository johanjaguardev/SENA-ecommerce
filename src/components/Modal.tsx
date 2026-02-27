import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'medium' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    small: { maxWidth: '400px' },
    medium: { maxWidth: '600px' },
    large: { maxWidth: '900px' },
  };

  return (
    <div
      style={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div style={{ ...styles.modal, ...sizeStyles[size] }} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div style={styles.modalHeader}>
            <h2 id="modal-title" style={styles.modalTitle}>
              {title}
            </h2>
            <button onClick={onClose} style={styles.closeButton} aria-label="Cerrar modal">
              ×
            </button>
          </div>
        )}
        <div style={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '1rem',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '1px solid #e0e0e0',
  },
  modalTitle: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a1a',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#666',
    lineHeight: 1,
    padding: 0,
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: '1.5rem',
  },
};

export default Modal;
