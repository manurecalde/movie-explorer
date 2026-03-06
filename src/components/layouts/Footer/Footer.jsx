import "./Footer.css";
import { LinkedinIcon, GithubIcon } from "../../common/Icons";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-links">
					<h4>Desarrollado por Manuel Recalde Garzón</h4>
					<div className="social-group">
						<a
							href="https://github.com/manurecalde"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
						>
							<GithubIcon />
							<span>GitHub ↗</span>
						</a>

						<a
							href="https://www.linkedin.com/in/manuel-recalde/"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
						>
							<LinkedinIcon />
							<span>LinkedIn ↗</span>
						</a>

						<a
							href="https://github.com/manurecalde/movie-explorer"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
						>
							<GithubIcon />
							<span>Código del Proyecto ↗</span>
						</a>
					</div>
				</div>
				<div className="footer-brand">
					<img
						src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
						alt="TMDB Logo"
						className="tmdb-logo"
					/>
					<p className="attribution">
						Este producto utiliza la API de TMDB pero no está
						avalado ni certificado por TMDB.
					</p>
				</div>
			</div>

			<div className="footer-copyright">
				&copy; {new Date().getFullYear()} — Movie Explorer Portfolio
				Project
			</div>
		</footer>
	);
}
