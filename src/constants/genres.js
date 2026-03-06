export const MOVIE_GENRES = [
	{ id: 28, name: "Acción" },
	{ id: 12, name: "Aventura" },
	{ id: 16, name: "Animación" },
	{ id: 35, name: "Comedia" },
	{ id: 80, name: "Crimen" },
	{ id: 99, name: "Documental" },
	{ id: 18, name: "Drama" },
	{ id: 10751, name: "Familia" },
	{ id: 14, name: "Fantasía" },
	{ id: 36, name: "Historia" },
	{ id: 27, name: "Terror" },
	{ id: 10402, name: "Música" },
	{ id: 9648, name: "Misterio" },
	{ id: 10749, name: "Romance" },
	{ id: 878, name: "Ciencia ficción" },
	{ id: 10770, name: "Película de TV" },
	{ id: 53, name: "Suspense" },
	{ id: 10752, name: "Bélica" },
	{ id: 37, name: "Oeste" },
];

export const getGenreId = (name) => {
	if (!name) return null;
	const genre = MOVIE_GENRES.find(
		(g) => g.name.toLocaleLowerCase() === name.toLocaleLowerCase()
	);
	return genre ? genre.id : null;
};

export const getGenreName = (id) => {
	if (!id) return null;
	const genre = MOVIE_GENRES.find((g) => g.id === id);
	return genre ? genre.name : null;
};
