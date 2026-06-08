import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header
        onLoginClick={() => {}}
        onRegisterClick={() => {}}
        cartItemCount={0}
        onCartClick={() => {}}
      />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Sobre Nosotros</h1>
        <p>Somos una tienda apasionada por el ciclismo...</p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
