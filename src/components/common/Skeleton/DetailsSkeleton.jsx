import "./DetailsSkeleton.css";

export default function DetailsSkeleton() {
	return (
		<div className="skeleton-details">
			<div className="skeleton-details-img skeleton-animation"></div>
			<div className="movie-info skeleton-movie-info">
				<div className="skeleton-genres">
					<div className="skeleton-details-genres skeleton-animation"></div>
					<div className="skeleton-pill-container">
						<div className="skeleton-details-genre skeleton-animation"></div>
						<div className="skeleton-details-genre skeleton-animation"></div>
					</div>
				</div>
				<div className="skeleton-details-title skeleton-animation"></div>
				<div className="skeleton-details-overview skeleton-animation"></div>
				<div className="skeleton-details-vote skeleton-animation"></div>
			</div>
		</div>
	);
}
