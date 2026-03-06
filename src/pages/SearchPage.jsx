import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "./SearchPage.css";
import MoviesPage from "./MoviesPage";
import { SearchIcon } from "../components/common/Icons";

export default function SearchPage() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const [inputValue, setInputValue] = useState(
		() => searchParams.get("q") || "",
	);

	const queryFromUrl = searchParams.get("q") || "";

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setSearchParams(
				(prev) => {
					const next = new URLSearchParams(prev);
					const currentQ = next.get("q") || "";

					if (currentQ === inputValue) return prev;

					if (inputValue.trim()) {
						next.set("q", inputValue);
						next.delete("page");
					} else {
						next.delete("q");
						next.delete("page");
					}
					return next;
				},
				{ replace: true },
			);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [inputValue, setSearchParams]);

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") navigate(-1);
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [navigate]);

	return (
		<div className="search-overlay" onClick={() => navigate(-1)}>
			<div
				className="search-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="search-input-wrapper">
					<SearchIcon />
					<input
						autoFocus
						type="text"
						placeholder="Busca tu película favorita..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="immersive-search-input"
					/>
					<button
						className="close-button"
						onClick={() => navigate(-1)}
					>
						Esc
					</button>
				</div>

				<div className="search-results-container">
					{queryFromUrl && (
						<MoviesPage
							title={`Resultados para ${inputValue}`}
							category="search"
							query={queryFromUrl}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
