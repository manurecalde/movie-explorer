import { useState, useEffect } from "react";
import movieService from "/src/service/movieService.js";

export default function useMovies({
	category,
	page = 1,
	genreId = null,
	setResults = null,
	query = null,
}) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			try {
				let moviesData;
				if (query) {
					moviesData = await movieService.searchMovies(query, page);
				} else {
					moviesData = await movieService.getMoviesByCategory(
						category,
						page,
						genreId,
					);
				}
				setMovies(moviesData.results);
				if (setResults) {
					setResults(moviesData.total_results);
				}
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchMovies();
	}, [category, page, genreId, query]);

	return { movies, loading, error };
}
