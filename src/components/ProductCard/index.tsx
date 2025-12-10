import React from 'react';
import type { ProductCardProps } from '../../types';
import './styles.scss';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito:', product.name);
    // Aquí irá la lógica del carrito en futuras versiones
  };

  return (
    <article className="product-card" role="article" aria-labelledby={`product-${product.id}`}>
      <img src={product.image} alt={product.name} loading="lazy" className="product-card__image" />
      <div className="product-card__info">
        <h3 className="product-card__title" id={`product-${product.id}`}>
          {product.name}
        </h3>
        <p className="product-card__price" aria-label={`Precio: ${product.price}`}>
          ${product.price.toFixed(2)}
        </p>
        <p className="product-card__description">{product.description}</p>
        <button
          className="product-card__button"
          onClick={handleAddToCart}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
