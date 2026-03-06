const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function request(path, params = "") {
	const url = `${BASE_URL}${path}?api_key=${API_KEY}&language=es-ES&region=ES${params}`;

	try {
		const res = await fetch(url);

		if (!res.ok) {
			const error = new Error(`Error HTTP: ${res.status}`);
			error.status = res.status;

			if (res.status === 404) error.message = "La película no existe.";
			if (res.status === 401)
				error.message = "Sesión expirada o API Key inválida.";

			throw error;
		}

		return await res.json();
	} catch (error) {
		if (!error.status) {
			error.message = "Ocurrió un error. Vuelve a intentarlo.";
		}
		throw error;
	}
}

const movieService = {
	getMoviesByCategory: async (category, page = 1, genreId = null) => {
		const pageNum = Math.max(1, parseInt(page, 10) || 1);
		let category_path;
		if (category === "explore") {
			category_path = "/discover/movie";
		} else {
			category_path = `/movie/${category}`;
		}
		const params = `&page=${pageNum}${
			genreId ? `&with_genres=${genreId}` : ""
		}`;
		const data = await request(category_path, params);
		return data;
	},

	getMovieById: async (id) => {
		const data = await request(`/movie/${id}`);
		return data;
	},

	searchMovies: async (query, page = 1) => {
		const pageNum = Math.max(1, parseInt(page, 10) || 1);
		const path = "/search/movie";
		const params = `&query=${encodeURIComponent(query)}&page=${pageNum}`;
		const data = await request(path, params);
		return data;
	},
};

export default movieService;
