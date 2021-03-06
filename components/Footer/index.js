import Sugerencia from "../Sugerencia";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="foot">
					{/* <nav className="nav">
					<ul className="menu">
						<li>
						<a href="https://cafecito.app/otto" target="_blank">
						Colaborá con nosotros
						</a>
						</li>
						</ul>
					</nav> */}
					<div className="made">
						<div>
							Hecho con <span aria-hidden="true">❤️</span>
							<span className="sr-only">amor</span> por <a href="https://otto.ar/">Otto</a> & Sole
						</div>
					</div>
					<Sugerencia />
				</div>
			</div>
			<div className="disclaimer">
				<b>Disclaimer:</b> Sabemos que ciertas verduras en realidad son frutas pero nuestra clasificación es arbitraria.
			</div>
		</footer>
	);
}
