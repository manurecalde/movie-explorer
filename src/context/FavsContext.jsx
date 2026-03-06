import { createContext, useContext, useEffect, useState } from "react";

const FavsContext = createContext();

const STORAGE_KEY = "movie_favorites";

export function loadFavs() {
	try {
		const data = localStorage.getItem(STORAGE_KEY);
		if (data) return JSON.parse(data);
		else return [];
	} catch (error) {
		console.error("Error loading favorites", error);
		return [];
	}
}

export function saveFavs(favs) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function FavsProvider({ children }) {
	const [favs, setFavs] = useState(loadFavs);

	useEffect(() => {
		saveFavs(favs);
	}, [favs]);

	const isFav = (movie) => favs.some((m) => m.id === movie.id);

	const addFav = (movie) => {
		if (isFav(movie)) return;
		setFavs([...favs, movie]);
	};

	const removeFav = (movie) => {
		if (!isFav(movie)) return;
		setFavs(favs.filter((m) => m.id !== movie.id));
	};

	const toggleFav = (movie) => {
		if (isFav(movie)) removeFav(movie);
		else addFav(movie);
	};

	return (
		<FavsContext.Provider
			value={{
				favs,
				addFav,
				removeFav,
				toggleFav,
				isFav,
			}}
		>
			{children}
		</FavsContext.Provider>
	);
}

export function useFavs() {
	return useContext(FavsContext);
}
