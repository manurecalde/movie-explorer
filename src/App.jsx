import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import Favorites from "./pages/Favorites";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import Details from "./pages/Details";
import { FavsProvider } from "./context/FavsContext";
import ScrollToTop from "./components/common/ScrollToTop";
import EmptyState from "./components/common/EmptyState/EmptyState";
import { MovieIcon } from "./components/common/Icons";
import SearchPage from "./pages/SearchPage";

export default function App() {
	return (
		<div className="app-container">
			<FavsProvider>
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/top-rated"
								element={
									<MoviesPage
										category="top_rated"
										title="Mejor Valoradas"
									/>
								}
							/>
							<Route
								path="/upcoming"
								element={
									<MoviesPage
										category="upcoming"
										title="Estrenos"
									/>
								}
							/>
							<Route
								path="/explorar"
								element={
									<MoviesPage
										category="explore"
										title="Explorar Películas"
									/>
								}
							/>
							<Route path="/favoritos" element={<Favorites />} />
							<Route
								path="/movie-details/:id"
								element={<Details />}
							/>
							<Route path="/search" element={<SearchPage />} />
							<Route
								path="*"
								element={
									<EmptyState
										icon={MovieIcon}
										title="404 - Página no encontrada"
										message="Lo sentimos, la página que buscas no existe o ha sido movida."
										buttonText="Ir al inicio"
										linkTo="/"
									/>
								}
							/>
						</Routes>
					</main>
					<Footer />
				</BrowserRouter>
			</FavsProvider>
		</div>
	);
}
