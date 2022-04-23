import { Link } from 'react-router-dom';

function Header() {
	return (
	<header>
		<nav className="green darken-1">
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">React SPA</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="contacts">Contacts</Link>
					</li>
					<li>
						<Link to="movies/1">Movie</Link>
					</li>
					<li>
						<a href="https://github.com/oNestly/react-spa" target="_blank" rel='noreferrer'>Repo</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	)
}

export { Header }