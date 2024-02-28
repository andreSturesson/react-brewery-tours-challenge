import Sidebar from "../Sidebar/Sidebar";
import SearchByName from "./SearchByName";
import BreweryList from "./Brewery/BreweryList";

import PageNavigation from "./PageNavigation";

function Main() {
	return (
		<>
			<main>
				<Sidebar />
				<h1>List of Breweries</h1>
				<SearchByName />
				<BreweryList />
			</main>
			<PageNavigation />
		</>
	);
}

export default Main;
