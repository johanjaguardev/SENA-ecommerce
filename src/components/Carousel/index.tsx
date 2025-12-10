import React from 'react';
import type { CategoryCarouselProps } from '../../types';
import './styles.scss';

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  return (
    <section className="carousel" aria-labelledby="categories-title">
      <h2 className="carousel__title" id="categories-title">
        Categorías
      </h2>
      <div className="carousel__container">
        <div className="carousel__track" role="list">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="carousel__card"
              style={{
                background: `linear-gradient(135deg, ${cat.color1}, ${cat.color2})`,
              }}
              role="listitem"
              tabIndex={0}
              aria-label={`Categoría ${cat.name}`}
            >
              <p className="carousel__card-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
