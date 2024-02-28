import SearchByState from "./SearchByState";

export default function Header() {
	return (
		<header className="main-header">
			<section className="select-state-section">
				<h2>Welcome to Brewery Tours</h2>
				<SearchByState />
			</section>
		</header>
	);
}
