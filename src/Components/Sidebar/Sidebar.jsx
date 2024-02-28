import BreweryTypeForm from "./BreweryTypeForm";
import CityFilter from "./CityFilter";
export default function Sidebar() {
	return (
		<aside className="filters-section">
			<h2 className="filters-section-heading">Filter By:</h2>
			<BreweryTypeForm />
			<CityFilter />
		</aside>
	);
}
