import "./CardSkeleton.css";

export default function CardSkeleton() {
	return (
		<div className="movie-card skeleton-card">
			<div className="skeleton-card-img skeleton-animation"></div>
			<div className="card-info">
				<div className="skeleton-card-title skeleton-animation"></div>
			</div>
		</div>
	);
}
