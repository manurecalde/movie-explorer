import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/MovieDetails/MovieDetails";

export default function Details() {
	const params = useParams();
	const id = params.id;
	return <MovieDetails id={id} />;
}
