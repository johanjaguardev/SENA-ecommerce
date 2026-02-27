export interface Category {
  id: number;
  name: string;
  color1: string;
  color2: string;
}

export interface Bicycle {
  id: number;
  name: string;
  tipo: string; // Tipo de bicicleta (Montaña, Ruta, Urbana, etc.)
  marca: string; // Marca de la bicicleta
  material: string; // Material del cuadro (Aluminio, Carbono, Acero, etc.)
  transmision: string; // Tipo de transmisión
  color: string;
  tamaño?: string; // Tamaño de la bicicleta
  precio: number;
  descripcion: string;
  imagen: string;
}

// Mantener Product para compatibilidad, pero usar Bicycle como principal
export interface Product {
  id: number;
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

export interface CartItem extends Bicycle {
  quantity: number;
}

export interface CategoryCarouselProps {
  categories: Category[];
}

export interface ProductCardProps {
  product: Bicycle;
}

export interface ProductGridProps {
  products: Bicycle[];
}

export interface FilterState {
  tipo: string;
  marca: string;
  material: string;
  transmision: string;
  precioMin: number;
  precioMax: number;
}

export interface HamburguerMenuProps {
  items: Array<{ label: string; href: string }>;
}

export interface HamburguerMenuProps {
  items: Array<{ label: string; href: string }>;
}
