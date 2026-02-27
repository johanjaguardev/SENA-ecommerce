import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage: React.FC = () => {
  return (
    <div style={styles.pageContainer} dir="ltr" lang="es">
      <Header onLoginClick={() => console.log('Login')} />

      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>Sobre Nosotros</h1>
      </div>

      <main style={styles.mainContent}>
        <div style={styles.teamContainer}>
          {/* Programador */}
          <div style={styles.teamMember}>
            <div style={styles.memberImage}>
              <div style={styles.imagePlaceholder}>👨‍💻</div>
            </div>
            <h2 style={styles.memberName}>Programador: Pedro Juan Vargas</h2>
            <div style={styles.contactSection}>
              <p style={styles.contactTitle}>Contacto</p>
              <div style={styles.socialIcons}>
                <a href="#instagram" aria-label="Instagram" style={styles.socialIcon}>
                  📷
                </a>
                <a href="#facebook" aria-label="Facebook" style={styles.socialIcon}>
                  f
                </a>
                <a href="#twitter" aria-label="Twitter" style={styles.socialIcon}>
                  🐦
                </a>
              </div>
            </div>
          </div>

          {/* Diseñadora */}
          <div style={styles.teamMember}>
            <div style={styles.memberImage}>
              <div style={styles.imagePlaceholder}>👩‍🎨</div>
            </div>
            <h2 style={styles.memberName}>Diseñadora: Andrea Mesa</h2>
            <div style={styles.contactSection}>
              <p style={styles.contactTitle}>Contacto</p>
              <div style={styles.socialIcons}>
                <a href="#instagram" aria-label="Instagram" style={styles.socialIcon}>
                  📷
                </a>
                <a href="#facebook" aria-label="Facebook" style={styles.socialIcon}>
                  f
                </a>
                <a href="#twitter" aria-label="Twitter" style={styles.socialIcon}>
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ventas */}
        <div style={styles.salesMember}>
          <div style={styles.memberImage}>
            <div style={styles.imagePlaceholder}>👩‍💼</div>
          </div>
          <h2 style={styles.memberName}>Ventas: Paula Rojas</h2>
          <div style={styles.contactSection}>
            <p style={styles.contactTitle}>Contacto</p>
            <div style={styles.socialIcons}>
              <a href="#instagram" aria-label="Instagram" style={styles.socialIcon}>
                📷
              </a>
              <a href="#facebook" aria-label="Facebook" style={styles.socialIcon}>
                f
              </a>
              <a href="#twitter" aria-label="Twitter" style={styles.socialIcon}>
                🐦
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    backgroundColor: '#ffffff',
  },
  heroBanner: {
    width: '100%',
    height: '200px',
    backgroundColor: '#ff6600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    color: 'white',
    margin: 0,
  },
  mainContent: {
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  teamContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  teamMember: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    textAlign: 'center',
  },
  salesMember: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  imagePlaceholder: {
    fontSize: '4rem',
  },
  memberName: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '1rem',
  },
  contactSection: {
    marginTop: '1rem',
  },
  contactTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#666',
    marginBottom: '0.75rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1a1a1a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'transform 0.2s',
  },
};

export default AboutUsPage;
