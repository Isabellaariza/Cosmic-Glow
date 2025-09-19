# Tienda Online - E-commerce

Una aplicación de tienda online desarrollada con React que consume la API de FakeStore para mostrar productos.

## 🚀 Características

- ✅ Productos desde API externa (https://fakestoreapi.com/products)
- ✅ Estados de carga y manejo de errores
- ✅ Filtros por categoría
- ✅ Carrito de compras funcional
- ✅ Formulario de contacto con EmailJS
- ✅ Diseño responsive (móvil y escritorio)
- ✅ Navegación completa

## 📋 Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd Tienda
```

### 2. Navegar al directorio del proyecto
```bash
cd tiendita
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 5. Abrir en el navegador
La aplicación estará disponible en: `http://localhost:5173`

## 📁 Estructura del proyecto

```
tiendita/
├── src/
│   ├── api/
│   │   └── products_api.js          # Conexión con FakeStore API
│   ├── features/
│   │   ├── products/
│   │   │   └── pages/
│   │   │       ├── ProductsPage.jsx # Página de productos
│   │   │       └── ProductsPage.css
│   │   ├── car/
│   │   │   └── pages/
│   │   │       ├── CarPage.jsx      # Página del carrito
│   │   │       └── CarPage.css
│   │   ├── contact/
│   │   │   ├── Contact.jsx          # Página de contacto
│   │   │   └── Contact.css
│   │   └── shared/
│   │       └── components/
│   │           └── Header/          # Navegación
│   └── App.jsx                      # Componente principal
```

## 🌐 API utilizada

- **FakeStore API**: https://fakestoreapi.com/products
- Proporciona productos con categorías, precios, imágenes y descripciones

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (480px y menos)
- 📱 Tablets (768px)
- 💻 Escritorio (1115px+)

## 🛒 Funcionalidades

### Productos
- Carga desde API externa
- Estado de "Cargando productos..."
- Manejo de errores visible
- Filtros por categoría
- Descripciones expandibles

### Carrito
- Agregar/quitar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia durante la sesión

### Contacto
- Formulario funcional con EmailJS
- Validación de campos
- Mensajes de éxito/error

## 🎨 Tecnologías utilizadas

- React 18
- React Router DOM
- Axios (para API calls)
- EmailJS (para formulario de contacto)
- CSS personalizado
- Vite (build tool)

## 👥 Autor

Isabella - Proyecto de E-commerce