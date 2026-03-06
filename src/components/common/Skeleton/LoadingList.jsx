import CardSkeleton from "./CardSkeleton";

export default function LoadingList({ itemsCount = 5 }) {
	return (
		<>
			<div className="movies-list">
				{Array.from({ length: itemsCount }).map((_, index) => (
					<CardSkeleton key={index} />
				))}
			</div>
		</>
	);
}
