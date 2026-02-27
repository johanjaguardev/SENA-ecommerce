import React, { useState } from 'react';
import Modal from './Modal';

interface CardRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CardRegisterModal: React.FC<CardRegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombreTitular: '',
    numeroTarjeta: '',
    fechaVencimiento: { mes: '', ano: '' },
    cvv: '',
    pais: '+52',
    aceptaTerminos: false,
  });

  const meses = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const anos = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() + i);
  const paises = ['+52', '+57', '+1', '+34', '+54'];

  const handleChange = (field: string, value: string | boolean) => {
    if (field.startsWith('fechaVencimiento.')) {
      const child = field.split('.')[1] as 'mes' | 'ano';
      setFormData((prev) => ({
        ...prev,
        fechaVencimiento: {
          ...prev.fechaVencimiento,
          [child]: String(value),
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g) || [];
    return groups.join(' ').substring(0, 19);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData((prev) => ({ ...prev, numeroTarjeta: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los terminos y condiciones');
      return;
    }
    console.log('Registro de tarjeta:', formData);
    onClose();
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Registro con ${provider}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Registro Tarjeta" size="medium">
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="nombreTitular" style={styles.label}>
              Nombre titular de la tarjeta
            </label>
            <input
              id="nombreTitular"
              type="text"
              value={formData.nombreTitular}
              onChange={(e) => handleChange('nombreTitular', e.target.value)}
              required
              style={styles.input}
              placeholder="Nombre completo"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="numeroTarjeta" style={styles.label}>
              Numero de tarjeta de credito o debito
            </label>
            <input
              id="numeroTarjeta"
              type="text"
              value={formData.numeroTarjeta}
              onChange={handleCardNumberChange}
              required
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Fecha de vencimiento</label>
            <div style={styles.dateContainer}>
              <select
                value={formData.fechaVencimiento.mes}
                onChange={(e) => handleChange('fechaVencimiento.mes', e.target.value)}
                style={styles.select}
                required
              >
                <option value="">Mes</option>
                {meses.map((mes) => (
                  <option key={mes} value={mes}>
                    {mes}
                  </option>
                ))}
              </select>
              <select
                value={formData.fechaVencimiento.ano}
                onChange={(e) => handleChange('fechaVencimiento.ano', e.target.value)}
                style={styles.select}
                required
              >
                <option value="">Ano</option>
                {anos.map((ano) => (
                  <option key={ano} value={ano.toString()}>
                    {ano}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="cvv" style={styles.label}>
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              value={formData.cvv}
              onChange={(e) =>
                handleChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))
              }
              required
              style={styles.input}
              placeholder="123"
              maxLength={4}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="pais" style={styles.label}>
              Pais
            </label>
            <select
              id="pais"
              value={formData.pais}
              onChange={(e) => handleChange('pais', e.target.value)}
              style={styles.select}
            >
              {paises.map((pais) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.aceptaTerminos}
              onChange={(e) => handleChange('aceptaTerminos', e.target.checked)}
              style={styles.checkbox}
            />
            Al registrarme, acepto los Terminos de Servicio y la Politica de Privacidad.
          </label>

          <div style={styles.socialContainer}>
            <p style={styles.socialText}>O registrate con:</p>
            <div style={styles.socialButtons}>
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                style={styles.socialButton}
              >
                G
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                style={styles.socialButton}
              >
                f
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                style={styles.socialButton}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('Microsoft')}
                style={styles.socialButton}
              >
                M
              </button>
            </div>
          </div>

          <button type="submit" style={styles.submitButton}>
            Registrarme
          </button>
        </form>
      </div>
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#333',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
  },
  dateContainer: {
    display: 'flex',
    gap: '0.5rem',
  },
  select: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  checkbox: {
    marginTop: '0.25rem',
    cursor: 'pointer',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e0e0e0',
  },
  socialText: {
    fontSize: '0.875rem',
    color: '#666',
    margin: 0,
  },
  socialButtons: {
    display: 'flex',
    gap: '1rem',
  },
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #e0e0e0',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1.25rem',
  },
  submitButton: {
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
};

export default CardRegisterModal;
