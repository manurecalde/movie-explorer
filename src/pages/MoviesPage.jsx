import { useState } from "react";
import Movies from "../components/movies/Movies";
import Pagination from "../components/common/Pagination/Pagination";
import MoviesFilter from "../components/movies/MoviesFilter/MoviesFilter";
import { getGenreId } from "../constants/genres";
import usePagination from "../hooks/usePagination";

export default function MoviesPage({ title, category, query = null }) {
	const [totalResults, setTotalResults] = useState(0);

	const setResults = (total) => {
		setTotalResults(total);
	};

	const moviesPerPage = 20;

	const totalPages =
		Math.ceil(totalResults / moviesPerPage) > 500
			? 500
			: Math.ceil(totalResults / moviesPerPage);

	const { currentPage, handlePageChange, genreParam, handleGenreChange } =
		usePagination(totalPages);

	return (
		<div className="category-page">
			<h1 className="section-title">
				{title}
				{genreParam && (
					<span className="selected-genre-title">
						{" "}
						de {genreParam}
					</span>
				)}
			</h1>

			{category === "explore" && (
				<MoviesFilter
					onGenreChange={handleGenreChange}
					selectedGenre={getGenreId(genreParam)}
				/>
			)}

			<Movies
				category={category}
				genreId={getGenreId(genreParam)}
				page={currentPage}
				setResults={(count) => setResults(count)}
				query={query}
			/>
			{totalResults > moviesPerPage && (
				<Pagination
					currentPage={currentPage}
					onPageChange={handlePageChange}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
}
