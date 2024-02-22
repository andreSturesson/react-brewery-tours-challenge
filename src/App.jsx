import BreweryList from "./Components/BreweryList";
import BreweryTypeForm from "./Components/BreweryTypeForm";
import CityFilter from "./Components/CityFilter";
import Search from "./Components/Search";
import SearchCity from "./Components/SearchCity";

import {
	getBreweries,
	getBreweriesByState,
	getBreweriesByType,
	getBreweriesByTypeAndState,
	getBreweriesByTypeByStateAndByCities,
	getBreweriesByCity, // Added this line
} from "./Helpers/BreweryAPI";
import { useEffect, useState } from "react";

function App() {
	const [breweries, setBreweries] = useState([]);
	const [page, setPage] = useState(1);

	const [state, setState] = useState("");
	const [type, setType] = useState("");
	const [cities, setCities] = useState([]);

	const [searchBrewery, setSearchBrewery] = useState("");

	const [currentPage, setCurrentPage] = useState(1);

	const hasFilter = state || type || cities.length > 0;
	const hasSearched = state && type && cities.length > 0;

	useEffect(() => {
		fetchBreweries();
	}, [page, hasFilter, hasSearched, state, type, cities, searchBrewery]);

	async function fetchBreweries() {
		try {
			console.log(cities);
			let fetchedBreweries;
			if (!hasFilter) {
				fetchedBreweries = await getBreweries(page);
			} else if (state && !type) {
				fetchedBreweries = await getBreweriesByState(state, page);
			} else if (!state && type) {
				fetchedBreweries = await getBreweriesByType(type, page);
			} else if (state && type && cities.length > 0) {
				fetchedBreweries = await getBreweriesByTypeByStateAndByCities(
					type,
					state,
					cities,
					page
				);
			} else if (state == "" && type == "" && cities.length > 0) {
				fetchedBreweries = await getBreweriesByCity(cities, page);
			} else {
				fetchedBreweries = await getBreweriesByTypeAndState(type, state, page);
			}
			setBreweries(
				fetchedBreweries.filter((brewery) =>
					searchBrewery.length >= 3
						? brewery.name.includes(searchBrewery)
						: true
				)
			);
		} catch (error) {
			console.error("Error fetching breweries:", error);
		}
	}

	const goToNextPage = () => {
		if (hasFilter) {
			setCurrentPage((prevPage) => prevPage + 1);
		} else {
			setPage((prevPage) => prevPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (hasFilter) {
			setCurrentPage((prevPage) => prevPage - 1);
		} else {
			setPage((prevPage) => prevPage - 1);
		}
	};

	const startIndex = (currentPage - 1) * 10;
	const endIndex = startIndex + 10;
	const paginatedBreweries = breweries.slice(startIndex, endIndex);

	return (
		<div>
			<header className="main-header">
				<section className="select-state-section">
					<h2>Welcome to Brewery Tours</h2>
					<Search state={state} setState={setState} />
				</section>
			</header>
			<main>
				<aside className="filters-section">
					<h2 className="filters-section-heading">Filter By:</h2>
					<BreweryTypeForm setType={setType} />
					<CityFilter setCities={setCities} />
				</aside>
				<h1>List of Breweries</h1>
				<SearchCity
					searchBrewery={searchBrewery}
					setSearchBrewery={setSearchBrewery}
				/>
				<BreweryList breweries={paginatedBreweries} />
				<div>
					<button id="prev-page" onClick={goToPreviousPage}>
						Previous
					</button>
					<button id="next-page" onClick={goToNextPage}>
						Next
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
