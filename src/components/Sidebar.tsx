import React, { useState } from 'react';
import type { FilterState } from '../types';

interface SidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const tiposBicicleta = ['Todas', 'Montaña', 'Ruta', 'Urbana', 'Eléctrica', 'BMX', 'Plegable'];
  const marcasBicicleta = [
    'Todas',
    'Trek',
    'Specialized',
    'Giant',
    'Cannondale',
    'Scott',
    'Merida',
  ];
  const materiales = ['Todos', 'Aluminio', 'Carbono', 'Acero', 'Titanio'];
  const transmisiones = ['Todas', 'Shimano', 'SRAM', 'Campagnolo', 'Microshift'];

  const handleFilterChange = (key: keyof FilterState, value: string | number) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    const resetFilters: FilterState = {
      tipo: 'Todas',
      marca: 'Todas',
      material: 'Todos',
      transmision: 'Todas',
      precioMin: 0,
      precioMax: 10000000,
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <aside style={styles.sidebar} role="complementary" aria-label="Filtros de productos">
      <h2 style={styles.sidebarTitle}>Filtros</h2>

      {/* Tipo de bicicleta */}
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Tipo de bicicleta</label>
        <select
          value={localFilters.tipo}
          onChange={(e) => handleFilterChange('tipo', e.target.value)}
          style={styles.select}
          aria-label="Filtrar por tipo de bicicleta"
        >
          {tiposBicicleta.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      {/* Marca de bicicleta */}
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Marca de bicicleta</label>
        <select
          value={localFilters.marca}
          onChange={(e) => handleFilterChange('marca', e.target.value)}
          style={styles.select}
          aria-label="Filtrar por marca"
        >
          {marcasBicicleta.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>

      {/* Material de bicicleta */}
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Material de bicicleta</label>
        <select
          value={localFilters.material}
          onChange={(e) => handleFilterChange('material', e.target.value)}
          style={styles.select}
          aria-label="Filtrar por material"
        >
          {materiales.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      </div>

      {/* Transmisión */}
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Transmisión</label>
        <select
          value={localFilters.transmision}
          onChange={(e) => handleFilterChange('transmision', e.target.value)}
          style={styles.select}
          aria-label="Filtrar por transmisión"
        >
          {transmisiones.map((transmision) => (
            <option key={transmision} value={transmision}>
              {transmision}
            </option>
          ))}
        </select>
      </div>

      {/* Rango de precios */}
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Rango de precios</label>
        <div style={styles.priceRange}>
          <input
            type="number"
            placeholder="Min"
            value={localFilters.precioMin || ''}
            onChange={(e) => handleFilterChange('precioMin', Number(e.target.value) || 0)}
            style={styles.priceInput}
            aria-label="Precio mínimo"
          />
          <span style={styles.priceSeparator}>-</span>
          <input
            type="number"
            placeholder="Max"
            value={localFilters.precioMax || ''}
            onChange={(e) => handleFilterChange('precioMax', Number(e.target.value) || 10000000)}
            style={styles.priceInput}
            aria-label="Precio máximo"
          />
        </div>
        <button
          onClick={handleApplyFilters}
          style={styles.applyButton}
          aria-label="Aplicar filtros"
        >
          Aplicar
        </button>
      </div>

      {/* Botón reset */}
      <button
        onClick={handleResetFilters}
        style={styles.resetButton}
        aria-label="Restablecer filtros"
      >
        Restablecer filtros
      </button>
    </aside>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    backgroundColor: '#f8f8f8',
    padding: '1.5rem',
    borderRadius: '8px',
    minWidth: '250px',
    maxWidth: '300px',
    width: '100%',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  sidebarTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#1a1a1a',
  },
  filterGroup: {
    marginBottom: '1.5rem',
  },
  filterLabel: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#333',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '0.875rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  priceRange: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    width: '100%',
  },
  priceInput: {
    width: '100%',
    minWidth: 0,
    padding: '0.5rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '0.875rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  priceSeparator: {
    color: '#666',
    fontWeight: 500,
  },
  applyButton: {
    width: '100%',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  resetButton: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#666',
    border: '1px solid #e0e0e0',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.2s',
  },
};

export default Sidebar;
