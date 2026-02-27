import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/bici_montana.jpg`,
    title: 'SENA',
    subtitle: 'Encuentra tu bicicleta perfecta',
    tag: 'Montaña',
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/bici_ruta.jpg`,
    title: 'SENA',
    subtitle: 'Velocidad sin límites',
    tag: 'Ruta',
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/bici_urban.jpg`,
    title: 'SENA',
    subtitle: 'Urban riders, estilo propio',
    tag: 'Urbana',
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/bici_aventura.jpg`,
    title: 'SENA',
    subtitle: 'Aventura en cada pedalada',
    tag: 'Aventura',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-wrap {
          position: relative;
          width: 100%;
          height: 90vh;
          min-height: 520px;
          overflow: hidden;
          background: #0a0a0a;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.6s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-bg.entering {
          opacity: 1;
          transform: scale(1);
        }

        .hero-bg.leaving {
          opacity: 0;
          transform: scale(1.04);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.35) 55%,
            rgba(0,0,0,0.15) 100%
          );
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
        }

        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 5vw 6vh;
        }

        .hero-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 5px 14px;
          border-radius: 2px;
          margin-bottom: 18px;
          width: fit-content;
          backdrop-filter: blur(8px);
          animation: fadeUp 0.7s ease forwards;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 14vw, 160px);
          color: #fff;
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0 0 16px;
          animation: fadeUp 0.7s 0.1s ease both;
        }

        .hero-title span {
          display: block;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.5);
        }

        .hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(16px, 2.2vw, 24px);
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.04em;
          margin: 0 0 40px;
          animation: fadeUp 0.7s 0.2s ease both;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #fff;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          animation: fadeUp 0.7s 0.3s ease both;
          transition: background 0.2s, color 0.2s, gap 0.2s;
          width: fit-content;
          text-decoration: none;
        }

        .hero-cta:hover {
          background: #e8ff00;
          gap: 20px;
        }

        .hero-cta svg {
          transition: transform 0.2s;
        }

        .hero-cta:hover svg {
          transform: translateX(4px);
        }

        /* Controls */
        .hero-controls {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }

        .hero-arrow {
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.08);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.2s, border-color 0.2s;
        }

        .hero-arrow:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.6);
        }

        /* Dots */
        .hero-dots {
          position: absolute;
          bottom: 6vh;
          right: 5vw;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }

        .hero-dot {
          width: 3px;
          height: 28px;
          background: rgba(255,255,255,0.25);
          cursor: pointer;
          transition: background 0.3s, height 0.3s;
          border: none;
          padding: 0;
        }

        .hero-dot.active {
          background: #fff;
          height: 44px;
        }

        /* Progress bar */
        .hero-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: #e8ff00;
          animation: progress 5s linear infinite;
          z-index: 10;
        }

        .hero-slide-counter {
          position: absolute;
          top: 32px;
          right: 5vw;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          z-index: 10;
        }

        .hero-slide-counter span {
          color: #fff;
          font-size: 18px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="hero-wrap">
        {/* Background image */}
        <div
          key={current}
          className={`hero-bg ${animating ? 'leaving' : 'entering'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        <div className="hero-overlay" />
        <div className="hero-grain" />

        {/* Slide counter */}
        <div className="hero-slide-counter">
          <span>0{current + 1}</span> / 0{slides.length}
        </div>

        {/* Content */}
        <div className="hero-content" key={`content-${current}`}>
          <div className="hero-tag">{slide.tag}</div>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <a className="hero-cta" href="#">
            Explorar catálogo
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Arrows */}
        <div className="hero-controls">
          <button className="hero-arrow" onClick={prev} aria-label="Anterior">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          <button className="hero-arrow" onClick={next} aria-label="Siguiente">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div key={`progress-${current}`} className="hero-progress" />
      </div>
    </>
  );
}
