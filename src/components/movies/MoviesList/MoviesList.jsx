import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./MoviesList.css";

export default function MoviesList({ movies }) {
	return (
		<>
			<div className="movies-list">
				{movies.map((movie) => (
					<Link to={`/movie-details/${movie.id}`} key={movie.id}>
						<MovieCard movie={movie} />
					</Link>
				))}
			</div>
		</>
	);
}
