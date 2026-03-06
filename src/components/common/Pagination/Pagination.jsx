import "./Pagination.css";

export default function Pagination({ currentPage, onPageChange, totalPages }) {
	return (
		<div className="pagination-container">
			<button
				className="pagination-btn"
				disabled={currentPage <= 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Anterior
			</button>

			<span className="page-indicator">
				Página {currentPage} de {totalPages}
			</span>

			<button
				className="pagination-btn"
				disabled={currentPage >= totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Siguiente
			</button>
		</div>
	);
}
