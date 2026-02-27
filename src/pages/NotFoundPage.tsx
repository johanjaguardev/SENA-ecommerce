import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.pageContainer} dir="ltr" lang="es">
      <Header onLoginClick={() => console.log('Login')} />

      <main style={styles.mainContent}>
        <div style={styles.notFoundContainer}>
          <h1 style={styles.notFoundTitle}>404 NOT FOUND</h1>
          <div style={styles.emoji}>:(</div>
          <p style={styles.message}>Lo sentimos, la pagina que buscas no existe.</p>
          <Link to="/" style={styles.homeLink}>
            Volver al inicio
          </Link>
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
  mainContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  notFoundContainer: {
    textAlign: 'center',
  },
  notFoundTitle: {
    fontSize: '4rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '1rem',
  },
  emoji: {
    fontSize: '5rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    color: '#666',
    marginBottom: '2rem',
  },
  homeLink: {
    display: 'inline-block',
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
};

export default NotFoundPage;
