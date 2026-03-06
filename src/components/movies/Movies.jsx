import MoviesList from "./MoviesList/MoviesList";
import LoadingList from "../common/Skeleton/LoadingList";
import EmptyState from "../common/EmptyState/EmptyState";
import { MovieIcon } from "../common/Icons";
import useMovies from "../../hooks/useMovies";

export default function Movies({
	category,
	page = 1,
	limit,
	genreId = null,
	setResults = null,
	query = null,
}) {
	const { movies, loading, error } = useMovies({
		category,
		page,
		genreId,
		setResults,
		query,
	});

	if (loading) {
		return <LoadingList itemsCount={limit ? limit : 20} />;
	}
	if (error) {
		return (
			<EmptyState
				icon={MovieIcon}
				title="Ups, ocurrió un error."
				message="Esta página no existe o hubo un problema de conexión."
			/>
		);
	}

	if (movies.length === 0) {
		return (
			<EmptyState
				icon={MovieIcon}
				title="No se encontraron resultados"
				message="No hay películas que coincidan con tu búsqueda."
				buttonText="Explorar películas"
				linkTo="/explorar"
			/>
		);
	}
	const movieList = limit ? movies.slice(0, limit) : movies;

	if (movies) {
		return (
			<>
				<MoviesList movies={movieList} />
			</>
		);
	}
}
