import React, { useState, useEffect } from 'react';
import type { Product, CartItem, FilterState, ShopifyProduct } from '../types';
import { getProducts } from '../services/shopify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import ProductDetailModal from '../components/ProductDetailModal';
import CartModal from '../components/CartModal';
import Herobanner from '../components/Herobanner';

const CART_STORAGE_KEY = 'sena_ecommerce_cart';
const CHECKOUT_STORAGE_KEY = 'sena_ecommerce_checkout_payload';

const HomePage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterState>({
    tipo: 'Todas',
    marca: 'Todas',
    material: 'Todos',
    transmision: 'Todas',
    precioMin: 0,
    precioMax: 10000000,
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  useEffect(() => {
    const fetchProductsFromShopify = async () => {
      setLoading(true);
      const shopifyProducts: ShopifyProduct[] = await getProducts();

      const formattedProducts: Product[] = shopifyProducts.map((p: ShopifyProduct) => ({
        id: p.id,
        name: p.title,
        description: p.description,
        price: parseFloat(p.priceRange.minVariantPrice.amount),
        image: p.images.edges[0]?.node.url || '',
        tipo: 'Shopify',
        marca: 'Shopify',
        material: 'N/A',
        transmision: 'N/A',
        color: 'N/A',
        tamaño: 'N/A',
      }));

      setFilteredProducts(formattedProducts);
      setLoading(false);
    };

    fetchProductsFromShopify();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      let newCart;
      if (itemInCart) {
        newCart = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...prevItems, { ...product, quantity: 1 }];
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId: number | string) => {
    setCartItems((prevItems) => {
      const newCart = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleUpdateQuantity = (productId: number | string, quantity: number) => {
    setCartItems((prevItems) => {
      const newCart = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleCheckout = () => {
    setIsCheckoutLoading(true);
    const payload = {
      reference: `SENA-ECOMM-${Date.now()}`,
      amount: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      currency: 'COP',
      items: JSON.stringify(
        cartItems.map((item) => ({ name: item.name, quantity: item.quantity }))
      ),
      returnUrl: `${window.location.origin}/checkout/result`,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(payload));
    setTimeout(() => {
      window.location.href = '/checkout-mvp';
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
        cartItemCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Herobanner />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />
        <main style={{ flex: 1, padding: '2rem' }}>
          {loading ? (
            <p>Cargando productos desde Shopify...</p>
          ) : (
            <ProductGrid
              products={filteredProducts}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
            />
          )}
        </main>
      </div>
      <Footer />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      {selectedProduct && (
        <ProductDetailModal
          isOpen={isProductDetailOpen}
          onClose={() => setIsProductDetailOpen(false)}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
        isCheckoutLoading={isCheckoutLoading}
      />
    </div>
  );
};

export default HomePage;
