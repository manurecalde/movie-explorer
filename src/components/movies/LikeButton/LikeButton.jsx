import "./LikeButton.css";
import { useFavs } from "../../../context/FavsContext";

import { LikeIcon } from "../../common/Icons";

export default function LikeButton({ movie, onToggle }) {
	const { isFav, toggleFav } = useFavs();
	const likeToggle = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (onToggle) {
			onToggle(movie);
		} else {
			toggleFav(movie);
		}
	};
	return (
		<>
			<button
				className={`like-button ${isFav(movie) ? "liked" : ""}`}
				onClick={likeToggle}
			>
				<LikeIcon />
			</button>
		</>
	);
}
