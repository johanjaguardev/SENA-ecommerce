import React from 'react';
import type { CategoryCarouselProps } from '../../types';
import {
  Section,
  SectionTitle,
  CarouselContainer,
  CarouselTrack,
  CategoryCard,
  CategoryName,
} from './styles';

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  return (
    <Section aria-labelledby="categories-title">
      <SectionTitle id="categories-title">Categorías</SectionTitle>
      <CarouselContainer>
        <CarouselTrack role="list">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              color1={cat.color1}
              color2={cat.color2}
              role="listitem"
              tabIndex={0}
              aria-label={`Categoría ${cat.name}`}
            >
              <CategoryName>{cat.name}</CategoryName>
            </CategoryCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </Section>
  );
};

export default CategoryCarousel;
