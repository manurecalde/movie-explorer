import { MOVIE_GENRES } from "../../../constants/genres";
import "./MoviesFilter.css";

export default function MoviesFilter({ onGenreChange, selectedGenre }) {
	return (
		<div className="filter-container">
			<select
				className="genre-select"
				value={selectedGenre || ""}
				onChange={(e) => onGenreChange(e.target.value)}
			>
				<option value="">Todos los géneros</option>
				{MOVIE_GENRES.map((genre) => (
					<option key={genre.id} value={genre.id}>
						{genre.name}
					</option>
				))}
			</select>
		</div>
	);
}
