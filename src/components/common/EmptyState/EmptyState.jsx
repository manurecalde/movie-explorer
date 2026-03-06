import { Link } from "react-router-dom";
import "./EmptyState.css";

export default function EmptyState({
	icon: Icon,
	title = "No hay resultados",
	message = "Intenta con otros filtros o busca algo más.",
	buttonText = "Volver al inicio",
	linkTo = "/",
}) {
	return (
		<div className="empty-state">
			{Icon && <Icon />}
			<h2>{title}</h2>
			<p>{message}</p>
			<Link to={linkTo} className="btn-primary">
				{buttonText}
			</Link>
		</div>
	);
}
