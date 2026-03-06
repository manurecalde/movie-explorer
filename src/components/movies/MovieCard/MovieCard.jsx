import React from "react";
import { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./MovieCard.css";
import { useFavs } from "../../../context/FavsContext";
import { useLocation } from "react-router-dom";
import "../../common/Skeleton/CardSkeleton.css";

export default function MovieCard({ movie }) {
	const [isRemoving, setIsRemoving] = useState(false);
	const { toggleFav, isFav } = useFavs();
	const location = useLocation();

	const isFavoritePage = location.pathname === "/favoritos";
	const handleFavRemoveWithAnimation = (movieData) => {
		if (isFav(movieData) && isFavoritePage) {
			setIsRemoving(true);
			setTimeout(() => {
				toggleFav(movieData);
			}, 200);
		} else {
			toggleFav(movieData);
		}
	};
	return (
		<div
			id={movie.id}
			className={`movie-card ${isRemoving ? "exit-animation" : ""}`}
		>
			<div className="card-img-container">
				<LikeButton
					movie={movie}
					onToggle={handleFavRemoveWithAnimation}
				/>
				{movie.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						alt={movie.title}
					/>
				) : (
					<div
						className="skeleton-card-img"
						style={{
							color: "white",
							padding: "64px 16px",
							fontSize: "14px",
							textAlign: "center",
						}}
					>
						No se pudo cargar la imagen: {movie.title}
					</div>
				)}
			</div>
			<div className="card-info">
				<div className="card-title">
					<h3>{movie.title}</h3>
				</div>
			</div>
		</div>
	);
}
