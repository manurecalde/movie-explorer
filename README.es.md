# 🎬 Movie Explorer

[Read in English 🇺🇸](./README.md)

Movie Explorer es una Single Page Application (SPA) desarrollada con React que consume la API de TMDB. Más que un simple catálogo de películas, este proyecto se centra en una arquitectura limpia, gestión de estado predecible, navegación orientada a la URL y optimización de la experiencia de usuario (UX).

### 🏗️ Una Base Evolutiva

Este MVP es una base técnica sólida y escalable. He diseñado el proyecto de forma modular para facilitar su evolución constante. En las próximas etapas, el enfoque estará en optimizar el rendimiento, implementar tests y aplicar patrones de interfaz avanzados, simulando el ciclo de vida y el crecimiento de una aplicación real en producción.

## 🚀 Aspectos Técnicos Destacados

### 🔗 Estado Basado en la URL (Enfoque "Search Params First")

La aplicación confía plenamente en los `searchParams` de React Router para persistir las consultas de búsqueda y los filtros directamente en la URL.

Flujo del estado:

> Input → URL (Search Params) → Fetch de Datos → UI

Esto permite:

- Búsquedas compartibles y guardables en marcadores.
- Navegación predecible (botón atrás/adelante del navegador).
- Separación clara entre el estado de la interfaz y el estado de la aplicación.

---

### ⏱ Búsqueda Inmersiva con Debounce

La funcionalidad de búsqueda se implementa como un overlay (capa superpuesta) para aislar la tarea del usuario manteniendo el contexto visual.

Puntos clave:

- Estado local para una experiencia de escritura fluida
- `useEffect` con `setTimeout` (debounce)
- Función de limpieza (cleanup) para evitar llamadas innecesarias a la API
- Actualización de la URL solo cuando el usuario deja de escribir

Esto garantiza la eficiencia de la API y una experiencia de usuario (UX) fluida.

---

### 🧠 Estado Global mediante Context API

Un `FavsProvider` gestiona los favoritos de forma global:

- EEvita el prop drilling y garantiza un flujo de datos unidireccional
- Permite feedback en tiempo real en la interfaz para una experiencia fluida
- Persiste los datos en Local Storage para mantener los favoritos entre sesiones

---

### 📄 Motor de Páginas Reutilizable

`MoviesPage.jsx` actúa como un motor de renderizado genérico:

- Renderiza diferentes categorías (Top Rated, Upcoming, Explore)
- Basado en props y en el estado de la URL
- Promueve la reutilización de componentes y la separación de conceptos

---

### 🎛 Filtrado Dinámico por Géneros

Una capa de mapeo que traduce los nombres de géneros legibles de la URL a los IDs específicos requeridos por la API de TMDB

- Desacopla la interfaz de las estructuras de datos externas manteniendo una navegación semántica
- Sustituye constantes numéricas confusas por rutas amigables como `/explorar?genre=Accion`

---

### 📚 Custom Hook para Paginación

`usePagination`:

- Controla la navegación entre páginas
- Valida los límites de la API (máximo 500 páginas)
- Reinicia la posición del scroll al navegar
- Encapsula la lógica de paginación de forma limpia

---

### 🛡️ Errores y Gestión de Casos Especiales

Manejo de comportamientos inesperados del usuario, errores y resultados vacíos.

- Componente versátil para gestionar rutas inválidas y resultados de búsqueda vacíos de forma amigable
- Saneamiento de parámetros en la URL mediante usePagination para devolver entradas inválidas a valores seguros
- Validación de datos antes de las peticiones a la API para evitar fallos en la aplicación
- Feedback visual claro cuando no hay contenido disponible para mejorar la experiencia

---

## 🎨 Consideraciones de UX & UI

- Header fijo con efecto glassmorphism
- Badge de favoritos animado (efecto "pop")
- Skeleton loaders para mejorar el rendimiento percibido
- Diseño responsive
- Experiencia de búsqueda inmersiva basada en overlays

---

## 🛠 Stack Tecnológico

- React
- React Router
- Context API
- Custom Hooks
- CSS3 (Custom Properties, Flexbox, Grid)
- TMDB API

---

## 📦 Estructura del Proyecto

    src
     ┣ assets
     ┣ components
     ┃ ┣ common
     ┃ ┣ layouts
     ┃ ┗ movies
     ┣ context
     ┣ hooks
     ┣ pages
     ┣ service
     ┣ App.jsx
     ┗ main.jsx

La arquitectura enfatiza los componentes modulares, hooks reutilizables y la separación entre interfaz, lógica y servicios.

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

Instala las dependencias:

```bash
npm install
```

Crea un archivo .env en el directorio raíz:

    VITE_TMDB_API_KEY=your_api_key_here

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

---

## 🗺 Roadmap (Evolución Iterativa)

Este proyecto está estructurado intencionadamente como un producto en constante evolución.

Iteraciones planificadas:

- Mejorar la abstracción de componentes y la estructura de carpetas
- Introducir testing (React Testing Library)
- Optimizar el rendimiento (estrategias de memoización y caché)
- Mejorar la accesibilidad (roles ARIA, navegación por teclado)
- Introducir feature toggles
- Refactorizar la capa de datos para mayor escalabilidad
- Añadir autenticación y favoritos persistentes (integración con Supabase)
- Mejorar animaciones y micro-interacciones.

Cada mejora reflejará ciclos de desarrollo de producto realistas.

---

## 🎯 Contexto Profesional

Este proyecto representa un hito significativo en mi transición desde el desarrollo en **WordPress/WooCommerce development** hacia la **Ingeniería Frontend moderna**.

Sirve como una demostración práctica de mi capacidad para construir aplicaciones escalables, mantenibles y centradas en el usuario utilizando el ecosistema de React.

**Competencias clave demostradas en este proyecto:**

- Pensamiento arquitectónico
- Sincronización limpia del estado con la URL
- Diseño de hooks personalizados
- Reutilización de componentes
- Decisiones de implementación orientadas a UX
- Mentalidad de producto iterativa.

### 🤝 ¡Conectemos!

Actualmente estoy buscando nuevas oportunidades en el ecosistema tecnológico de España. Si te interesa mi trabajo o quieres charlar conmigo, ¡no dudes en contactarme!

[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/manuel-recalde/)

---

## 📄 Licencia

Licencia MIT.
