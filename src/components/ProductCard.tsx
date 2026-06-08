import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div className="product-card" role="group" aria-labelledby={`product-name-${product.id}`}>
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__image"
        />
      </div>
      <div className="product-card__body">
        <h3 id={`product-name-${product.id}`} className="product-card__name">
          {product.name}
        </h3>
        <p className="product-card__price" aria-label={`Precio: ${product.price}`}>
          Precio: {formatPrice(product.price)}
        </p>
        <div className="product-card__actions">
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(product)}
              className="product-card__btn product-card__btn--outline"
              aria-label={`Ver detalles de ${product.name}`}
            >
              Ver Detalles
            </button>
          )}
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product)}
              className="product-card__btn product-card__btn--primary"
              aria-label={`Añadir ${product.name} al carrito`}
            >
              Añadir al Carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
