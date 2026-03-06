import MoviesList from "../components/movies/MoviesList/MoviesList";
import { useFavs } from "../context/FavsContext";
import EmptyState from "../components/common/EmptyState/EmptyState";
import { LikeIcon } from "../components/common/Icons";
import Pagination from "../components/common/Pagination/Pagination";
import usePagination from "../hooks/usePagination";
import { useEffect, useEffectEvent } from "react";

export default function Favorites() {
	const { favs } = useFavs();
	const reversedFavs = [...favs].reverse();
	const total_count = favs.length;
	const { currentPage, handlePageChange } = usePagination();

	const moviesPerPage = 20;

	const totalPages = Math.ceil(total_count / moviesPerPage);

	const moviesToShow = reversedFavs.slice(
		currentPage * moviesPerPage - moviesPerPage,
		currentPage * moviesPerPage,
	);

	useEffect(() => {
		if (currentPage > totalPages) {
			handlePageChange(totalPages);
		}
	}, [totalPages]);

	return (
		<div className="category-page">
			<h1 className="section-title">Favorites</h1>
			{favs.length > 0 ? (
				<MoviesList movies={moviesToShow} />
			) : (
				<EmptyState
					icon={LikeIcon}
					title="Tu lista está vacía"
					message="¡Explora nuestras películas y guarda tus preferidas aquí!"
					buttonText="Explorar películas"
					linkTo="/explorar"
				/>
			)}
			{total_count > moviesPerPage && (
				<Pagination
					currentPage={currentPage}
					onPageChange={handlePageChange}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
}
