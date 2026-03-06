import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavs } from "../../../context/FavsContext";
import { LikeIcon } from "../../common/Icons";

export default function NavMenu({ onClose }) {
	const { favs } = useFavs();

	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (favs.length === 0) return;

		setAnimate(true);

		const timer = setTimeout(() => setAnimate(false), 300);

		return () => clearTimeout(timer);
	}, [favs.length]);

	return (
		<nav>
			<NavLink to="/" onClick={onClose}>
				Inicio
			</NavLink>
			<NavLink to="/explorar" onClick={onClose}>
				Explorar
			</NavLink>

			<NavLink to="/top-rated" onClick={onClose}>
				Top Rated
			</NavLink>
			<NavLink to="/upcoming" onClick={onClose}>
				Próximamente
			</NavLink>
			<NavLink to="/favoritos" onClick={onClose}>
				Favoritos
				<span className={`fav-badge ${animate ? "pop" : ""}`}>
					{favs.length}
				</span>
			</NavLink>
		</nav>
	);
}
