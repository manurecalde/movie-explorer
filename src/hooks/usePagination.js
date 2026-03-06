import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
	getGenreId,
	getGenreName,
} from "../constants/genres";

export default function usePagination(totalPages = 500) {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = searchParams.get("page");
	const genreParam = searchParams.get("genre");

	const digits = pageParam ? pageParam.replace(/\D/g, "") : "";
	const parsedPage = parseInt(digits, 10) || 1;

	const currentPage = Math.max(1, Math.min(parsedPage, totalPages || 500));

	useEffect(() => {
		if (!pageParam || totalPages === 0) return;

		const params = new URLSearchParams(searchParams);
		let needsUpdate = false;

		if (parsedPage <= 1) {
			params.delete("page");
			needsUpdate = true;
		} else if (parsedPage > totalPages) {
			params.set("page", totalPages);
			needsUpdate = true;
		} else if (pageParam !== digits) {
			params.set("page", digits);
			needsUpdate = true;
		}

		if (needsUpdate) {
			setSearchParams(params, { replace: true });
		}
	}, [pageParam, totalPages]);

	const handlePageChange = (newPage) => {
		const params = new URLSearchParams(searchParams);
		if (newPage <= 1) {
			params.delete("page");
		} else {
			params.set("page", newPage);
		}
		setSearchParams(params, { replace: true });
	};

	useEffect(() => {
		const isValidGenre = getGenreId(genreParam);
		if (!isValidGenre) {
			const params = new URLSearchParams(searchParams);
			params.delete("genre");
			setSearchParams(params, { replace: true });
		}
	}, [genreParam]);

	const handleGenreChange = (newGenre) => {
		const params = new URLSearchParams(searchParams);

		if (newGenre === "") {
			params.delete("genre");
		} else {
			params.set("genre", getGenreName(Number(newGenre)));
		}
		params.delete("page");
		setSearchParams(params);
	};

	return {
		currentPage,
		handlePageChange,
		searchParams,
		setSearchParams,
		handleGenreChange,
		genreParam,
	};
}
