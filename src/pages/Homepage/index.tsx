import React, { useState, useEffect } from 'react';
import type { Category, Product } from '../../types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductGrid from '../../components/ProductsGrid';
import CategoryCarousel from '../../components/CategorySlide';
import { mockCategories } from '../../mock/categories';
import { HomepageContainer, HomepageInnerBox, HomepageMainContent } from './styles';
import { mockProducts } from '../../mock/products';

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
      <HomepageContainer dir="ltr" lang="es">
        <Header />
        <HomepageMainContent>
          <HomepageInnerBox>
            <h2>Cargando...</h2>
          </HomepageInnerBox>
        </HomepageMainContent>
        <Footer />
      </HomepageContainer>
    );
  }

  return (
    <HomepageContainer dir="ltr" lang="es">
      <Header />
      <HomepageMainContent>
        <CategoryCarousel categories={categories} />
        <ProductGrid products={products} />
      </HomepageMainContent>
      <Footer />
    </HomepageContainer>
  );
};

export default HomePage;
