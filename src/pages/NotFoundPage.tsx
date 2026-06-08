import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header
        onLoginClick={() => {}}
        onRegisterClick={() => {}}
        cartItemCount={0}
        onCartClick={() => {}}
      />
      <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1>404 - Página No Encontrada</h1>
        <p>La página que buscas no existe.</p>
        <Link to="/">Volver al Inicio</Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
