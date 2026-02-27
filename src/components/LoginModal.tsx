import React, { useState } from 'react';
import Modal from './Modal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
  onForgotPassword?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToRegister,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Aquí irá la lógica de login
    onClose();
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login con ${provider}`);
    // Aquí irá la lógica de login social
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Inicia Sesión" size="medium">
      <div style={styles.container}>
        <p style={styles.description}>
          Ingresa a tu cuenta para disfrutar de los servicios de S.commerce en un solo click!
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              placeholder="tu@email.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              placeholder="••••••••"
            />
          </div>

          <button type="button" onClick={onForgotPassword} style={styles.forgotLink}>
            Olvidaste tu contraseña?
          </button>

          <button type="submit" style={styles.submitButton}>
            Iniciar Sesión
          </button>
        </form>

        <div style={styles.socialContainer}>
          <p style={styles.socialText}>O inicia sesión con:</p>
          <div style={styles.socialButtons}>
            <button
              onClick={() => handleSocialLogin('Google')}
              style={styles.socialButton}
              aria-label="Login con Google"
            >
              <span style={styles.socialIcon}>G</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Facebook')}
              style={styles.socialButton}
              aria-label="Login con Facebook"
            >
              <span style={styles.socialIcon}>f</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Apple')}
              style={styles.socialButton}
              aria-label="Login con Apple"
            >
              <span style={styles.socialIcon}>🍎</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Microsoft')}
              style={styles.socialButton}
              aria-label="Login con Microsoft"
            >
              <span style={styles.socialIcon}>M</span>
            </button>
          </div>
        </div>

        <p style={styles.registerLink}>
          Aún no eres miembro?{' '}
          <button onClick={onSwitchToRegister} style={styles.linkButton}>
            Regístrate
          </button>
        </p>
      </div>
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  description: {
    color: '#666',
    fontSize: '0.875rem',
    margin: 0,
    textAlign: 'center',
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
    transition: 'border-color 0.2s',
  },
  forgotLink: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff6600',
    cursor: 'pointer',
    textAlign: 'right',
    fontSize: '0.875rem',
    padding: 0,
    alignSelf: 'flex-end',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
  },
  socialIcon: {
    fontSize: '1.25rem',
  },
  registerLink: {
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#666',
    margin: 0,
  },
  linkButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff6600',
    cursor: 'pointer',
    fontWeight: 600,
    padding: 0,
  },
};

export default LoginModal;
