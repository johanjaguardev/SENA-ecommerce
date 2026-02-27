import React, { useState, useEffect } from 'react';
import type { Bicycle, CartItem, FilterState } from '../types';
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
const catalogImage = (fileName: string) => `${import.meta.env.BASE_URL}images/catalogo/${fileName}`;
const HomePage: React.FC = () => {
  const [bicycles, setBicycles] = useState<Bicycle[]>([]);
  const [filteredBicycles, setFilteredBicycles] = useState<Bicycle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterState>({
    tipo: 'Todas',
    marca: 'Todas',
    material: 'Todos',
    transmision: 'Todas',
    precioMin: 0,
    precioMax: 10000000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Bicycle | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockBicycles: Bicycle[] = [
        {
          id: 1,
          name: 'Bicicleta de Montana Trek',
          tipo: 'Montana',
          marca: 'Trek',
          material: 'Aluminio',
          transmision: 'Shimano',
          color: 'Gris',
          tamaño: 'M',
          precio: 2500000,
          descripcion:
            'Bicicleta de montana ideal para terrenos dificiles. Cuadro de aluminio resistente y transmision Shimano de 21 velocidades.',
          imagen: catalogImage('BicicletadeMontañaTrek.jpg'),
        },
        {
          id: 2,
          name: 'Bicicleta de Ruta Specialized',
          tipo: 'Ruta',
          marca: 'Specialized',
          material: 'Carbono',
          transmision: 'SRAM',
          color: 'Negro',
          tamaño: 'L',
          precio: 4500000,
          descripcion:
            'Bicicleta de ruta profesional con cuadro de carbono ultraligero. Perfecta para competencias y entrenamientos de alto rendimiento.',
          imagen: catalogImage('BicicletadeRutaSpecialized.jpg'),
        },
        {
          id: 3,
          name: 'Bicicleta Urbana Giant',
          tipo: 'Urbana',
          marca: 'Giant',
          material: 'Acero',
          transmision: 'Shimano',
          color: 'Negra',
          tamaño: 'M',
          precio: 1200000,
          descripcion:
            'Bicicleta urbana comoda y practica para la ciudad. Ideal para desplazamientos diarios y paseos relajados.',
          imagen: catalogImage('BicicletaUrbanaGiant.jpg'),
        },
        {
          id: 4,
          name: 'Bicicleta Electrica Cannondale',
          tipo: 'Electrica',
          marca: 'Cannondale',
          material: 'Aluminio',
          transmision: 'Shimano',
          color: 'Azul',
          tamaño: 'L',
          precio: 3500000,
          descripcion:
            'Bicicleta electrica con motor de asistencia. Perfecta para recorridos largos sin esfuerzo excesivo.',
          imagen: catalogImage('BicicletaEléctricaCannondale.jpg'),
        },
        {
          id: 5,
          name: 'Bicicleta BMX Scott',
          tipo: 'BMX',
          marca: 'Scott',
          material: 'Acero',
          transmision: 'Shimano',
          color: 'Naranja',
          tamaño: 'S',
          precio: 1800000,
          descripcion:
            'Bicicleta BMX resistente para acrobacias y trucos. Cuadro reforzado y componentes de alta calidad.',
          imagen: catalogImage('BicicletaBMXScott.jpg'),
        },
        {
          id: 6,
          name: 'Bicicleta Plegable Merida',
          tipo: 'Plegable',
          marca: 'Merida',
          material: 'Aluminio',
          transmision: 'Microshift',
          color: 'Gris',
          tamaño: 'Unico',
          precio: 1500000,
          descripcion:
            'Bicicleta plegable compacta y ligera. Perfecta para espacios pequenos y transporte facil.',
          imagen: catalogImage('BicicletaPlegableMerida.jpg'),
        },
        {
          id: 7,
          name: 'Bicicleta de Montaña Giant',
          tipo: 'Montaña',
          marca: 'Giant',
          material: 'Carbono',
          transmision: 'SRAM',
          color: 'Verde',
          tamaño: 'M',
          precio: 3800000,
          descripcion:
            'Bicicleta de montaña de alta gama con suspensión delantera y cuadro de carbono.',
          imagen: catalogImage('BicicletadeMontañaGiant.jpg'),
        },
        {
          id: 8,
          name: 'Bicicleta de Ruta Trek',
          tipo: 'Ruta',
          marca: 'Trek',
          material: 'Aluminio',
          transmision: 'Campagnolo',
          color: 'Amarillo',
          tamaño: 'L',
          precio: 3200000,
          descripcion:
            'Bicicleta de ruta con transmisión Campagnolo de 22 velocidades. Ideal para ciclistas exigentes.',
          imagen: catalogImage('BicicletadeRutaTrek.jpg'),
        },
        {
          id: 9,
          name: 'Bicicleta Urbana Specialized',
          tipo: 'Urbana',
          marca: 'Specialized',
          material: 'Aluminio',
          transmision: 'Shimano',
          color: 'Negro',
          tamaño: 'M',
          precio: 2200000,
          descripcion:
            'Bicicleta urbana elegante y funcional. Diseño moderno con componentes de calidad.',
          imagen: catalogImage('BicicletaUrbanaSpecialized.jpg'),
        },
      ];

      setBicycles(mockBicycles);
      setFilteredBicycles(mockBicycles);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (!storedCart) return;

      const parsedCart: CartItem[] = JSON.parse(storedCart);
      if (!Array.isArray(parsedCart)) return;

      setCartItems(parsedCart.filter((item) => item.quantity > 0));
    } catch (error) {
      console.error('No fue posible cargar el carrito guardado:', error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    let filtered = bicycles;

    if (filters.tipo !== 'Todas') {
      filtered = filtered.filter((b) => b.tipo === filters.tipo);
    }
    if (filters.marca !== 'Todas') {
      filtered = filtered.filter((b) => b.marca === filters.marca);
    }
    if (filters.material !== 'Todos') {
      filtered = filtered.filter((b) => b.material === filters.material);
    }
    if (filters.transmision !== 'Todas') {
      filtered = filtered.filter((b) => b.transmision === filters.transmision);
    }
    filtered = filtered.filter(
      (b) => b.precio >= filters.precioMin && b.precio <= filters.precioMax
    );

    setFilteredBicycles(filtered);
    setCurrentPage(1);
  }, [filters, bicycles]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleViewDetails = (product: Bicycle) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleAddToCart = (product: Bicycle) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    console.log('Producto agregado al carrito:', product.name);
  };

  const handleUpdateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    setIsCheckoutLoading(true);

    const paymentGatewayUrl = import.meta.env.VITE_PAYMENT_GATEWAY_URL?.trim();
    const total = cartItems.reduce((sum, item) => sum + item.precio * item.quantity, 0);
    const productSummary = cartItems
      .map((item) => `${item.name} x${item.quantity}`)
      .join(', ')
      .slice(0, 200);
    const checkoutReference = `SENA-${Date.now()}`;
    const checkoutPayload = {
      reference: checkoutReference,
      amount: total,
      currency: 'COP',
      items: productSummary || 'Sin items',
      returnUrl: `${window.location.origin}${import.meta.env.BASE_URL}`,
      createdAt: new Date().toISOString(),
    };
    const openMvpCheckout = () => {
      localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(checkoutPayload));
      window.location.assign(`${import.meta.env.BASE_URL}checkout-mvp`);
    };

    try {
      if (!paymentGatewayUrl) {
        openMvpCheckout();
        return;
      }

      const checkoutUrl = new URL(paymentGatewayUrl);

      const isWompiDomain = checkoutUrl.hostname.endsWith('wompi.co');
      const isWompiPaymentLink =
        checkoutUrl.hostname === 'checkout.wompi.co' && checkoutUrl.pathname.startsWith('/l/');

      if (isWompiDomain && !isWompiPaymentLink) {
        openMvpCheckout();
        return;
      }

      if (!isWompiDomain) {
        checkoutUrl.searchParams.set('reference', checkoutReference);
        checkoutUrl.searchParams.set('amount', total.toString());
        checkoutUrl.searchParams.set('currency', 'COP');
        checkoutUrl.searchParams.set('items', productSummary || 'Sin items');
        checkoutUrl.searchParams.set(
          'return_url',
          `${window.location.origin}${import.meta.env.BASE_URL}`
        );
      }

      window.location.assign(checkoutUrl.toString());
    } catch (error) {
      console.error('No fue posible redirigir a la pasarela de pago:', error);
      setIsCheckoutLoading(false);
    }
  };

  const handleBuyNow = (product: Bicycle) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
    setIsProductDetailOpen(false);
    setIsCartOpen(true);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPages = Math.ceil(filteredBicycles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBicycles = filteredBicycles.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div style={styles.pageContainer} dir="ltr" lang="es">
        <Header cartCount={cartCount} onLoginClick={() => setIsLoginOpen(true)} />
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
      <Header
        cartCount={cartCount}
        onLoginClick={() => setIsLoginOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        onHelpClick={() => console.log('Ayuda')}
      />

      <Herobanner />

      <main style={styles.mainContent}>
        <div style={styles.contentLayout} className="content-layout-responsive">
          {/* Sidebar */}
          <div className="sidebar-responsive">
            <Sidebar filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Products Section */}
          <div style={styles.productsSection}>
            <ProductGrid
              products={currentBicycles}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={styles.pagination}>
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  style={styles.paginationButton}
                  aria-label="Pagina anterior"
                >
                  {'<'}
                </button>
                <span style={styles.paginationInfo}>
                  Pagina {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  style={styles.paginationButton}
                  aria-label="Pagina siguiente"
                >
                  {'>'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <ProductDetailModal
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onViewCart={() => setIsCartOpen(true)}
      />
      <CartModal
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isCheckoutLoading={isCheckoutLoading}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
  },
  heroBanner: {
    width: '100%',
    height: '400px',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=400&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 700,
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    margin: '1rem 0 0 0',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
  mainContent: {
    flex: 1,
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  contentLayout: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '2rem',
    alignItems: 'start',
  },
  productsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  paginationButton: {
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 600,
  },
  paginationInfo: {
    fontSize: '0.875rem',
    color: '#666',
  },
};

export default HomePage;
