import Movies from "../components/movies/Movies";
import Section from "../components/common/Section/Section";

export default function Home() {
	return (
		<>
			<Section title="Explorar" link="/explorar">
				<Movies category={"explore"} limit={5} />
			</Section>

			<Section title="Top Rated" link="/top-rated">
				<Movies category="top_rated" limit={5} />
			</Section>

			<Section title="Upcoming" link="/upcoming">
				<Movies category="upcoming" limit={5} />
			</Section>
		</>
	);
}
