import React, { useState, useEffect } from 'react';
import type { Category, Product } from '../../types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductGrid from '../../components/ProductsGrid';
import CategoryCarousel from '../../components/Carousel';
import { mockCategories } from '../../mock/categories';
import { mockProducts } from '../../mock/products';
import './styles.scss';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCategories(mockCategories);
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="homepage" dir="ltr" lang="es">
        <Header />
        <main className="homepage__main-content">
          <div className="homepage__inner-box">
            <h2>Cargando...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="homepage" dir="ltr" lang="es">
      <Header />
      <main className="homepage__main-content">
        <CategoryCarousel categories={categories} />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
