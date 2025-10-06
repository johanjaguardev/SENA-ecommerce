import React from 'react';
import type { CategoryCarouselProps } from '../types';

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  return (
    <section style={styles.section} aria-labelledby="categories-title">
      <h2 style={styles.sectionTitle} id="categories-title">
        Categorías
      </h2>
      <div style={styles.carouselContainer}>
        <div style={styles.carouselTrack} role="list">
          {categories.map((cat) => (
            <article
              key={cat.id}
              style={{
                ...styles.categoryCard,
                background: `linear-gradient(135deg, ${cat.color1}, ${cat.color2})`,
              }}
              role="listitem"
              tabIndex={0}
              aria-label={`Categoría ${cat.name}`}
            >
              <h3 style={styles.categoryName}>{cat.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    color: '#1a1a1a',
    fontWeight: 700,
  },
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  carouselTrack: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    padding: '1rem 0',
    scrollbarWidth: 'thin',
    scrollbarColor: '#ffd700 #f0f0f0',
  },
  categoryCard: {
    minWidth: '200px',
    height: '150px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    flexShrink: 0,
    transition: 'transform 0.3s',
  },
  categoryName: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 600,
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    margin: 0,
    padding: '0 1rem',
  },
};

export default CategoryCarousel;
