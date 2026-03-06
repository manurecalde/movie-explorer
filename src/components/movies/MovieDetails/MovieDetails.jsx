import { useState, useEffect } from "react";

import LikeButton from "../LikeButton/LikeButton";
import DetailsSkeleton from "../../common/Skeleton/DetailsSkeleton";
import "./MovieDetails.css";
import movieService from "../../../service/movieService.js";
import "../../common/Skeleton/DetailsSkeleton.css";
import EmptyState from "../../common/EmptyState/EmptyState.jsx";
import { MovieIcon } from "../../common/Icons.jsx";

export default function MovieDetails({ id }) {
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (isNaN(Number(id))) {
			setError({ message: "La película no existe." });
			setLoading(false);
			return;
		}
		const fetchMovies = async () => {
			setLoading(true);

			try {
				const movieData = await movieService.getMovieById(id);
				setMovie(movieData);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchMovies();
	}, [id]);

	if (loading) {
		return <DetailsSkeleton />;
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
	if (movie) {
		return (
			<div className="movie-details">
				<div className="details-img-container">
					<LikeButton movie={movie} />
					{movie.poster_path ? (
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={`Poster de ${movie.title}`}
						/>
					) : (
						<div className="skeleton-details">
							<div className="skeleton-details-img ">
								No se pudo cargar la imagen.
							</div>
						</div>
					)}
				</div>
				<div className="movie-info">
					<h5>Genres:</h5>
					<div className="genres">
						{movie.genres.map((genre) => (
							<span key={genre.id} className="genre">
								{genre.name}
							</span>
						))}
					</div>
					<h1>{movie.title}</h1>
					<p className="vote">{movie.vote_average.toFixed(2)} / 10</p>
					<p>{movie.overview}</p>
				</div>
			</div>
		);
	}
}
