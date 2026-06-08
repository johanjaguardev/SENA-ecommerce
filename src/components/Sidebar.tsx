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
    <aside className="sidebar" role="complementary" aria-label="Filtros de productos">
      <h2 className="sidebar__title">Filtros</h2>

      {/* Tipo de bicicleta */}
      <div className="sidebar__group">
        <label className="sidebar__label">Tipo de bicicleta</label>
        <select
          value={localFilters.tipo}
          onChange={(e) => handleFilterChange('tipo', e.target.value)}
          className="sidebar__select"
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
      <div className="sidebar__group">
        <label className="sidebar__label">Marca de bicicleta</label>
        <select
          value={localFilters.marca}
          onChange={(e) => handleFilterChange('marca', e.target.value)}
          className="sidebar__select"
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
      <div className="sidebar__group">
        <label className="sidebar__label">Material de bicicleta</label>
        <select
          value={localFilters.material}
          onChange={(e) => handleFilterChange('material', e.target.value)}
          className="sidebar__select"
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
      <div className="sidebar__group">
        <label className="sidebar__label">Transmisión</label>
        <select
          value={localFilters.transmision}
          onChange={(e) => handleFilterChange('transmision', e.target.value)}
          className="sidebar__select"
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
      <div className="sidebar__group">
        <label className="sidebar__label">Rango de precios</label>
        <div className="sidebar__price-range">
          <input
            type="number"
            placeholder="Min"
            value={localFilters.precioMin || ''}
            onChange={(e) => handleFilterChange('precioMin', Number(e.target.value) || 0)}
            className="sidebar__price-input"
            aria-label="Precio mínimo"
          />
          <span className="sidebar__price-separator">-</span>
          <input
            type="number"
            placeholder="Max"
            value={localFilters.precioMax || ''}
            onChange={(e) =>
              handleFilterChange('precioMax', Number(e.target.value) || 10000000)
            }
            className="sidebar__price-input"
            aria-label="Precio máximo"
          />
        </div>
        <button
          onClick={handleApplyFilters}
          className="sidebar__btn sidebar__btn--apply"
          aria-label="Aplicar filtros"
        >
          Aplicar
        </button>
      </div>

      {/* Botón reset */}
      <button
        onClick={handleResetFilters}
        className="sidebar__btn sidebar__btn--reset"
        aria-label="Restablecer filtros"
      >
        Restablecer filtros
      </button>
    </aside>
  );
};

export default Sidebar;
