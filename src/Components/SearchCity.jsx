import PropTypes from "prop-types";
export default function SearchCity({ searchBrewery, setSearchBrewery }) {
	const handleSearchChange = (event) => {
		setSearchBrewery(event.target.value);
	};

	return (
		<header className="search-bar">
			<form id="search-breweries-form" autoComplete="off">
				<label htmlFor="search-breweries">
					<h2>Search breweries:</h2>
				</label>
				<input
					id="search-breweries"
					name="search-breweries"
					type="text"
					value={searchBrewery}
					onChange={handleSearchChange}
				/>
			</form>
		</header>
	);
}

SearchCity.propTypes = {
	searchBrewery: PropTypes.string.isRequired,
	setSearchBrewery: PropTypes.func.isRequired,
};
