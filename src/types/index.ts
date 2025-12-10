export interface Category {
  id: number;
  name: string;
  color1: string;
  color2: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

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

export interface HamburguerMenuProps {
  items: Array<{ label: string; href: string }>;
}
