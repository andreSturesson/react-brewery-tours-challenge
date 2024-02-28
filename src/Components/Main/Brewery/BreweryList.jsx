import Brewery from "./Brewery";
import { useSelector } from "react-redux";

import { selectBreweries } from "../../../State/brewery/brewerySlice";
export default function BreweryList() {
	const breweries = useSelector(selectBreweries);

	return (
		<article>
			<ul id="breweries-list" className="breweries-list">
				{breweries.map((brewery) => (
					<Brewery key={brewery.id} brewery={brewery} />
				))}
			</ul>
		</article>
	);
}
