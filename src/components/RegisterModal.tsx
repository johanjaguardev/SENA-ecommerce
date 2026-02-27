import React, { useState } from 'react';
import Modal from './Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const paises = [
  { codigo: '+57', nombre: 'Colombia' },
  { codigo: '+52', nombre: 'México' },
  { codigo: '+1', nombre: 'Estados Unidos' },
  { codigo: '+34', nombre: 'España' },
  { codigo: '+51', nombre: 'Perú' },
];

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    apellidos: '',
    tipoDocumento: 'CC',
    numeroDocumento: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    pais: '',
    aceptaTerminos: false,
  });

  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    console.log('Registro:', formData);
    // Aquí irá la lógica de registro real
    onClose();
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Registro con ${provider}`);
  };

  const codigoPaisSeleccionado = paises.find((p) => p.nombre === formData.pais)?.codigo ?? '+57';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Registro" size="large">
      <div style={styles.container}>
        {/* Panel izquierdo con imagen y texto */}
        <div style={styles.leftPanel}>
          <div style={styles.leftOverlay}>
            <h2 style={styles.leftTitle}>¡Regístrate y conéctate</h2>
            <p style={styles.leftText}>a todos los servicios de Ecommerce en un sólo clic!</p>
          </div>
        </div>

        {/* Panel derecho con formulario */}
        <div style={styles.rightPanel}>
          <h2 style={styles.formTitle}>Registro</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Nombres */}
            <div style={styles.row}>
              <div style={styles.inputGroupHalf}>
                <label htmlFor="primerNombre" style={styles.label}>
                  Primer Nombre
                </label>
                <input
                  id="primerNombre"
                  type="text"
                  value={formData.primerNombre}
                  onChange={(e) => handleChange('primerNombre', e.target.value)}
                  required
                  style={styles.input}
                  placeholder="Primer Nombre"
                />
              </div>
              <div style={styles.inputGroupHalf}>
                <label htmlFor="segundoNombre" style={styles.label}>
                  Segundo Nombre
                </label>
                <input
                  id="segundoNombre"
                  type="text"
                  value={formData.segundoNombre}
                  onChange={(e) => handleChange('segundoNombre', e.target.value)}
                  style={styles.input}
                  placeholder="Segundo Nombre"
                />
              </div>
            </div>

            {/* Apellidos */}
            <div style={styles.inputGroup}>
              <label htmlFor="apellidos" style={styles.label}>
                Apellidos
              </label>
              <input
                id="apellidos"
                type="text"
                value={formData.apellidos}
                onChange={(e) => handleChange('apellidos', e.target.value)}
                required
                style={styles.input}
                placeholder="Apellidos"
              />
            </div>

            {/* Documento */}
            <div style={styles.row}>
              <div style={styles.inputGroupDocType}>
                <label htmlFor="tipoDocumento" style={styles.label}>
                  Tipo
                </label>
                <select
                  id="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={(e) => handleChange('tipoDocumento', e.target.value)}
                  style={styles.select}
                >
                  <option value="CC">CC</option>
                  <option value="TI">TI</option>
                  <option value="CE">CE</option>
                  <option value="PAS">PAS</option>
                </select>
              </div>
              <div style={styles.inputGroupDocNumber}>
                <label htmlFor="numeroDocumento" style={styles.label}>
                  Número Documento
                </label>
                <input
                  id="numeroDocumento"
                  type="text"
                  value={formData.numeroDocumento}
                  onChange={(e) => handleChange('numeroDocumento', e.target.value)}
                  required
                  style={styles.input}
                  placeholder="Número Documento"
                />
              </div>
            </div>

            {/* Fecha de nacimiento */}
            <div style={styles.inputGroup}>
              <label htmlFor="fechaNacimiento" style={styles.label}>
                Fecha de Nacimiento
              </label>
              <input
                id="fechaNacimiento"
                type="date"
                value={formData.fechaNacimiento}
                onChange={(e) => handleChange('fechaNacimiento', e.target.value)}
                required
                style={styles.input}
              />
            </div>

            {/* Correo electrónico */}
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Dirección de correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                style={styles.input}
                placeholder="Direccion de correo electrónico"
              />
            </div>

            {/* Contraseña con toggle de visibilidad */}
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Contraseña
              </label>
              <div style={styles.passwordWrapper}>
                <input
                  id="password"
                  type={mostrarPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  required
                  style={{ ...styles.input, ...styles.passwordInput }}
                  placeholder="Contraseña"
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword((prev) => !prev)}
                  style={styles.passwordToggle}
                  aria-label={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {mostrarPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* País */}
            <div style={styles.inputGroup}>
              <label htmlFor="pais" style={styles.label}>
                Selecciona tu país
              </label>
              <select
                id="pais"
                value={formData.pais}
                onChange={(e) => handleChange('pais', e.target.value)}
                required
                style={styles.select}
              >
                <option value="">Selecciona tu país</option>
                {paises.map((pais) => (
                  <option key={pais.codigo} value={pais.nombre}>
                    {pais.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Código de país */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Código de país</label>
              <input
                type="text"
                value={`(${codigoPaisSeleccionado})`}
                readOnly
                style={{ ...styles.input, ...styles.readonlyInput }}
              />
            </div>

            {/* Términos y condiciones */}
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.aceptaTerminos}
                onChange={(e) => handleChange('aceptaTerminos', e.target.checked)}
                style={styles.checkbox}
              />
              <span>
                Al registrarme, acepto las{' '}
                <span style={styles.linkText}>Condiciones de servicio</span> y{' '}
                <span style={styles.linkText}>política de privacidad</span>
              </span>
            </label>

            {/* Social login */}
            <div style={styles.socialContainer}>
              <div style={styles.socialButtons}>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  style={{ ...styles.socialButton, ...styles.socialFacebook }}
                  aria-label="Registrarme con Facebook"
                >
                  f
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  style={{ ...styles.socialButton, ...styles.socialGoogle }}
                  aria-label="Registrarme con Google"
                >
                  G
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Apple')}
                  style={{ ...styles.socialButton, ...styles.socialApple }}
                  aria-label="Registrarme con Apple"
                >
                  
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Microsoft')}
                  style={{ ...styles.socialButton, ...styles.socialMicrosoft }}
                  aria-label="Registrarme con Microsoft"
                >
                  ⊞
                </button>
              </div>
            </div>

            {/* Botón principal */}
            <button type="submit" style={styles.submitButton}>
              Registrarme
            </button>
          </form>

          <p style={styles.loginLink}>
            ¿Ya tienes cuenta?{' '}
            <button type="button" onClick={onSwitchToLogin} style={styles.linkButton}>
              Iniciar sesión
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    minHeight: '520px',
  },
  leftPanel: {
    flex: 1,
    backgroundImage:
      'url(https://images.unsplash.com/photo-1494599948593-3dafe8338d71?w=800&h=800&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2rem 1.5rem',
  },
  leftOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '260px',
  },
  leftTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'white',
    margin: 0,
  },
  leftText: {
    marginTop: '0.75rem',
    fontSize: '1rem',
    color: 'white',
    lineHeight: 1.4,
  },
  rightPanel: {
    flex: 1.3,
    padding: '2rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.875rem',
  },
  row: {
    display: 'flex',
    gap: '0.75rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  inputGroupHalf: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  inputGroupDocType: {
    width: '120px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  inputGroupDocNumber: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#333',
  },
  input: {
    padding: '0.65rem 0.75rem',
    border: '1px solid #d0d0d0',
    borderRadius: '6px',
    fontSize: '0.9rem',
    outline: 'none',
  },
  readonlyInput: {
    backgroundColor: '#f5f5f5',
    cursor: 'default',
  },
  select: {
    padding: '0.65rem 0.75rem',
    border: '1px solid #d0d0d0',
    borderRadius: '6px',
    fontSize: '0.9rem',
    outline: 'none',
    backgroundColor: 'white',
  },
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordInput: {
    paddingRight: '2.5rem',
  },
  passwordToggle: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
  },
  checkbox: {
    marginTop: '0.2rem',
    cursor: 'pointer',
  },
  linkText: {
    color: '#4a4ad8',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  socialContainer: {
    marginTop: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
  },
  socialButtons: {
    display: 'flex',
    gap: '0.75rem',
  },
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    border: 'none',
    color: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialFacebook: {
    backgroundColor: '#1877f2',
  },
  socialGoogle: {
    backgroundColor: '#db4437',
  },
  socialApple: {
    backgroundColor: '#000000',
  },
  socialMicrosoft: {
    backgroundColor: '#2f7de1',
  },
  submitButton: {
    backgroundColor: '#ff9b2a',
    color: '#000000',
    border: 'none',
    padding: '0.85rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '0.75rem',
  },
  loginLink: {
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#444',
    marginTop: '0.75rem',
  },
  linkButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#0066cc',
    cursor: 'pointer',
    fontWeight: 600,
    padding: 0,
    textDecoration: 'underline',
  },
};

export default RegisterModal;
