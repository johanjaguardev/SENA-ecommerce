import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const infoContent: Record<string, { title: string; body: string }> = {
  'quienes-somos': {
    title: 'Quienes Somos',
    body: 'Somos SENA-COMMERCE, una tienda enfocada en ciclismo y movilidad sostenible.',
  },
  'nuestras-tiendas': {
    title: 'Nuestras Tiendas',
    body: 'Proximamente publicaremos nuestras sedes fisicas y horarios de atencion.',
  },
  contactos: {
    title: 'Contactos',
    body: 'Puedes escribirnos por correo a soporte@sena-commerce.com para atencion.',
  },
  productos: {
    title: 'Productos',
    body: 'Encuentra bicicletas urbanas, de ruta, montana, plegables y electricas.',
  },
  ofertas: {
    title: 'Ofertas',
    body: 'Estamos preparando descuentos especiales para temporada y lanzamientos.',
  },
  'nuevos-productos': {
    title: 'Nuevos Productos',
    body: 'Descubre aqui los mas recientes ingresos de nuestro catalogo.',
  },
  categorias: {
    title: 'Categorias',
    body: 'Explora por tipo de bicicleta, marca, material y transmision.',
  },
  terminos: {
    title: 'Terminos y Condiciones',
    body: 'Estos terminos regulan el uso del sitio y el proceso de compra.',
  },
  'politica-privacidad': {
    title: 'Politica de Privacidad',
    body: 'Tratamos tus datos con fines operativos y de mejora del servicio.',
  },
  'politica-cookies': {
    title: 'Politica de Cookies',
    body: 'Usamos cookies para mejorar navegacion, analitica y personalizacion.',
  },
  'aviso-legal': {
    title: 'Aviso Legal',
    body: 'Informacion legal del proyecto y alcance del servicio ofrecido.',
  },
  ayuda: {
    title: 'Ayuda',
    body: 'Te acompanamos en el proceso de compra y configuracion de pedidos.',
  },
  'preguntas-frecuentes': {
    title: 'Preguntas Frecuentes',
    body: 'Aqui resolveremos dudas frecuentes sobre pagos, envios y garantias.',
  },
  envios: {
    title: 'Envios',
    body: 'Manejamos cobertura nacional con tiempos estimados por ciudad.',
  },
  devoluciones: {
    title: 'Devoluciones',
    body: 'Puedes solicitar devoluciones bajo condiciones de garantia y estado.',
  },
};

const InfoPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const info = slug ? infoContent[slug] : undefined;

  return (
    <div style={styles.pageContainer} dir="ltr" lang="es">
      <Header onLoginClick={() => console.log('Login')} />
      <main style={styles.mainContent}>
        <section style={styles.card}>
          <h1 style={styles.title}>{info?.title ?? 'Informacion'}</h1>
          <p style={styles.body}>{info?.body ?? 'No encontramos informacion para este enlace.'}</p>
        </section>
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
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    padding: '2rem',
  },
  title: {
    margin: 0,
    marginBottom: '1rem',
    fontSize: '2rem',
  },
  body: {
    margin: 0,
    color: '#4b5563',
    lineHeight: 1.6,
  },
};

export default InfoPage;
