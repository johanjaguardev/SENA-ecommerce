# SENA eCommerce 🛒

Plataforma de comercio electrónico moderna desarrollada con React, TypeScript y Vite.

## 🚀 Demo en Vivo

[Ver aplicación en GitHub Pages](https://TU-USUARIO.github.io/sena_ecommerce)

## 📋 Características

- ✅ Arquitectura modular de componentes
- ✅ TypeScript para type safety
- ✅ Responsive design
- ✅ HTML semántico y accesible (ARIA)
- ✅ Preparado para i18n y RTL
- ✅ Carrusel de categorías
- ✅ Grid adaptable de productos
- ✅ Mock data para desarrollo

## 🛠️ Stack Tecnológico

- **React 19** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS-in-JS** - Estilos inline
- **GitHub Pages** - Hosting

## 📦 Versiones

### v1.0.0 - HomePage Inicial (2024-01-XX)

- ✅ Componente HomePage con layout completo
- ✅ Header con navegación global
- ✅ Footer informativo
- ✅ Carrusel de categorías
- ✅ Grid de productos destacados
- ✅ ProductCard reutilizable
- ✅ Mock data para categorías y productos

### v1.1.0 - Próxima versión

- 🔄 Sistema de enrutamiento
- 🔄 Página de detalle de producto
- 🔄 Funcionalidad de carrito

## 💻 Instalación y Desarrollo Local

### Prerrequisitos

- Node.js >= 18
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/sena_ecommerce.git
cd sena_ecommerce

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 🏗️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Genera build de producción en /dist
npm run preview      # Preview del build de producción

# Despliegue
npm run deploy       # Despliega a GitHub Pages

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos
├── components/      # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CategoryCarousel.tsx
│   ├── ProductCard.tsx
│   └── ProductGrid.tsx
├── pages/           # Páginas/vistas
│   └── HomePage.tsx
├── types/           # Definiciones TypeScript
│   └── index.ts
├── App.tsx          # Componente principal
└── main.tsx         # Entry point
```

## 🚀 Despliegue a GitHub Pages

### Primera vez

1. **Configurar vite.config.ts**

   ```typescript
   base: '/sena_ecommerce/', // Nombre de tu repo
   ```

2. **Crear repositorio en GitHub**

   ```bash
   git init
   git add .
   git commit -m "v1.0.0 - Initial release"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/sena_ecommerce.git
   git push -u origin main
   ```

3. **Desplegar**

   ```bash
   npm run deploy
   ```

4. **Configurar GitHub Pages**
   - Ve a Settings → Pages
   - Source: gh-pages branch
   - Guarda y espera 1-2 minutos

### Nuevas versiones

```bash
# Hacer cambios en el código
git add .
git commit -m "v1.1.0 - Descripción del cambio"
git tag -a v1.1.0 -m "Versión 1.1.0"
git push origin main --tags
npm run deploy
```

## 🎨 Características de Diseño

- **Responsive**: Grid adaptable y flexbox
- **Semántico**: Tags HTML5 apropiados
- **Accesible**: ARIA labels y roles
- **i18n Ready**: Atributos lang y dir configurables
- **Modular**: Componentes reutilizables y desacoplados

## 📝 Convenciones de Código

- Componentes en PascalCase
- Archivos .tsx para componentes React
- Tipos e interfaces en src/types/
- Estilos inline con tipado React.CSSProperties
- Props tipadas con interfaces

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre**

- GitHub: [@TU-USUARIO](https://github.com/TU-USUARIO)
- Proyecto: SENA - Desarrollo de Software

## 🙏 Agradecimientos

- SENA Colombia
- Comunidad de React
- Vite Team

---

⭐️ Si te gusta este proyecto, dale una estrella en GitHub!
