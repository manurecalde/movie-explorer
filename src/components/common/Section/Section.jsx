import { Link } from "react-router-dom";
import "./Section.css";

export default function Section({ title, link, children }) {
	return (
		<section>
			<div className="section-header">
				<h2>{title}</h2>
				{link && <Link to={link}>Ver más</Link>}
			</div>
			<div className="section-content">{children}</div>
		</section>
	);
}
