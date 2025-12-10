import React from 'react';
import type { ProductCardProps } from '../../types';
import {
  AddToCartButton,
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  ProductCardPrice,
  ProductCardTitle,
  ProductCartDescription,
} from './styles';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Producto agregado al carrito:', product.name);
    // Aquí irá la lógica del carrito en futuras versiones
  };

  return (
    <ProductCardContainer role="article" aria-labelledby={`product-${product.id}`}>
      <ProductCardImage src={product.image} alt={product.name} loading="lazy" />
      <ProductCardInfo>
        <ProductCardTitle id={`product-${product.id}`}>{product.name}</ProductCardTitle>
        <ProductCardPrice aria-label={`Precio: ${product.price}`}>
          ${product.price.toFixed(2)}
        </ProductCardPrice>
        <ProductCartDescription>{product.description}</ProductCartDescription>
        <AddToCartButton
          onClick={handleAddToCart}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar al Carrito
        </AddToCartButton>
      </ProductCardInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
