export interface Category {
  id: number;
  name: string;
  color1: string;
  color2: string;
}

// Interfaz unificada para todos los productos
export interface Product {
  id: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  tipo?: string;
  marca?: string;
  material?: string;
  transmision?: string;
  color?: string;
  tamaño?: string;
}

// Bicycle ahora es un alias para Product para mantener compatibilidad
export type Bicycle = Product;

export interface CartItem extends Product {
  quantity: number;
}

export interface CategoryCarouselProps {
  categories: Category[];
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductGridProps {
  products: Product[];
}

export interface FilterState {
  tipo: string;
  marca: string;
  material: string;
  transmision: string;
  precioMin: number;
  precioMax: number;
}

export interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  cartItemCount: number;
  onCartClick: () => void;
}

// Tipos de Shopify
export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
}

export interface ShopifyResponse {
  data: {
    products: {
      edges: {
        node: ShopifyProduct;
      }[];
    };
  };
  errors?: any; // Permitir que existan errores
}
