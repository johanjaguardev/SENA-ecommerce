import React, { useState, useEffect } from 'react';
import type { Category, Product } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCarousel from '../components/CategoryCarousel';
import ProductGrid from '../components/ProductGrid';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Datos mock de categorías
      const mockCategories: Category[] = [
        { id: 1, name: 'Electrónica', color1: '#667eea', color2: '#764ba2' },
        { id: 2, name: 'Ropa', color1: '#f093fb', color2: '#f5576c' },
        { id: 3, name: 'Hogar', color1: '#4facfe', color2: '#00f2fe' },
        { id: 4, name: 'Deportes', color1: '#43e97b', color2: '#38f9d7' },
        { id: 5, name: 'Juguetes', color1: '#fa709a', color2: '#fee140' },
        { id: 6, name: 'Libros', color1: '#30cfd0', color2: '#330867' },
      ];

      // Datos mock de productos
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Auriculares Bluetooth',
          price: 79.99,
          description: 'Sonido de alta calidad con cancelación de ruido',
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        },
        {
          id: 2,
          name: 'Camiseta Premium',
          price: 29.99,
          description: '100% algodón orgánico, diseño moderno',
          image:
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        },
        {
          id: 3,
          name: 'Lámpara LED',
          price: 45.0,
          description: 'Iluminación ajustable con control remoto',
          image:
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop',
        },
        {
          id: 4,
          name: 'Pelota de Yoga',
          price: 24.99,
          description: 'Material anti-burst, incluye bomba',
          image:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
        },
        {
          id: 5,
          name: 'Laptop Gamer',
          price: 1299.99,
          description: 'Procesador de última generación, 16GB RAM',
          image:
            'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
        },
        {
          id: 6,
          name: 'Mochila Ejecutiva',
          price: 59.99,
          description: 'Compartimento para laptop, diseño ergonómico',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        },
      ];

      setCategories(mockCategories);
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={styles.pageContainer} dir="ltr" lang="es">
        <Header />
        <main style={styles.mainContent}>
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h2>Cargando...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={styles.pageContainer} dir="ltr" lang="es">
      <Header />

      <main style={styles.mainContent}>
        <CategoryCarousel categories={categories} />
        <ProductGrid products={products} />
      </main>

      <Footer />
    </div>
  );
};

// Estilos
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    margin: 0,
    padding: 0,
  },
  mainContent: {
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
};

export default HomePage;
