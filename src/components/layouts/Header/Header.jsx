import "./Header.css";
import { CloseIcon, MenuIcon, SearchIcon } from "../../common/Icons";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	const navigate = useNavigate();

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-logo">
					<Link to="">
						<img
							src="/MovieExplorerLogo.png"
							alt="MovieExplorerLogo"
						/>
					</Link>
				</div>
				<div className="nav-desktop">
					<NavMenu />
				</div>
				<button className="menu-toggle" onClick={toggleMenu}>
					{menuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
				<div className={`nav-mobile ${menuOpen ? "is-open" : ""}`}>
					<NavMenu onClose={closeMenu} />
				</div>
				<div
					className="nav-search-box"
					onClick={() => navigate("/search")}
				>
					<SearchIcon />
					<span className="placeholder">Buscar...</span>
				</div>
			</div>
		</header>
	);
}
