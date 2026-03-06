# 🎬 Movie Explorer

[Leer en Español 🇪🇸](./README.es.md)

Single Page Application built with React that consumes the TMDB API.\
More than a movie catalog, this project focuses on **clean architecture,
predictable state management, URL-driven navigation, and UX
optimization.**

### 🏗️ Evolutionary Foundation

This MVP serves as a high-quality foundation. The project is intentionally modular to allow for progressive iterations. Future phases will focus on performance optimization, testing, and advanced UI patterns, reflecting the natural growth of a real-world production application.

## 🚀 Technical Highlights

### 🔗 URL-Driven State (Search Params First Approach)

The application heavily relies on `searchParams` from React Router to
persist search queries and filters directly in the URL.

State Flow:

> Input → URL (Search Params) → Data Fetch → UI

This enables:

- Shareable and bookmarkable searches
- Predictable navigation
- Clean separation between UI state and application state

---

### ⏱ Immersive Search with Debounce

The search feature is implemented as an overlay to isolate the user task
while preserving visual context.

Key points:

- Local state for instant 60fps typing experience
- `useEffect` with `setTimeout` (300ms debounce)
- Cleanup function to prevent unnecessary API calls
- URL update only after debounce completes

This ensures API efficiency and smooth UX.

---

### 🧠 Global State via Context API

A `FavsProvider` manages favorites globally:

- Avoids prop drilling and ensures unidirectional data flow
- Enables real-time UI feedback
- Persists data via Local Storage to preserve user selections across session

---

### 📄 Reusable Page Engine

`MoviesPage.jsx` acts as a generic rendering engine:

- Renders different categories (Top Rated, Upcoming, Explore)
- Driven by props and URL state
- Promotes reusability and separation of concerns

---

### 🎛 Dynamic Genre Filtering

This mapping layer translates human-readable genre names from the URL into the specific IDs required by the TMDB API

- Decouples the UI from external data structures by keeping navigation semantic
- Replaces obscure numeric constants with friendly paths like `/explore?genre=Action`

---

### 📚 Custom Pagination Hook

`usePagination`:

- Controls page navigation
- Validates API limits (max 500 pages)
- Resets scroll position on navigation
- Encapsulates pagination logic cleanly

---

### 🛡️ Error & Edge Case Handling

Managing unexpected user behavior, errors and empty results.

- Versatile component to handle invalid routes and empty search results gracefully
- Sanitizes URL parameters via usePagination to force invalid inputs back to safe defaults
- Prevents application crashes by validating data before executing API requests
- Optimizes UX by providing clear feedback when no content is available

---

## 🎨 UX & UI Considerations

- Sticky header with glassmorphism
- Animated favorites badge ("pop" scale effect)
- Skeleton loaders for perceived performance
- Responsive layout.
- Overlay-based immersive search experience

---

## 🛠 Tech Stack

- React
- React Router
- Context API
- Custom Hooks
- CSS3 (Custom Properties, Flexbox, Grid)
- TMDB API

---

## 📦 Project Structure

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

Architecture emphasizes modular components, reusable hooks, and
separation between UI, logic, and services.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

    VITE_TMDB_API_KEY=your_api_key_here

Run development server:

```bash
npm run dev
```

---

## 🗺 Roadmap (Iterative Evolution)

This project is intentionally structured as an evolving product.

Planned iterations:

- Improve component abstraction and folder structure
- Introduce testing (React Testing Library)
- Optimize performance (memoization & caching strategies)
- Improve accessibility (ARIA roles, keyboard navigation)
- Introduce feature toggles
- Refactor data layer for scalability
- Add authentication & persistent favorites (Supabase integration)
- Improve animations & micro-interactions

Each improvement will reflect realistic product development cycles.

---

## 🎯 Professional Context

This project marks a significant milestone in my transition from **WordPress/WooCommerce development** to **Modern Frontend Engineering**.

It serves as a practical demonstration of my ability to build scalable, maintainable, and user-centric applications using the React ecosystem.

**Key competencies demonstrated in this project:**

- Architectural thinking
- Clean state synchronization with URL
- Custom hooks design
- Component reusability
- UX-driven implementation decisions
- Iterative product mindset

### 🤝 Let's Connect!

I am currently looking for new opportunities in the Spanish tech ecosystem. If you're interested in my work or want to discuss frontend architecture, feel free to reach out!

[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/manuel-recalde/)

---

## 📄 License

MIT License.
