import PropTypes from "prop-types";
import Brewery from "./Brewery";

export default function BreweryList({ breweries }) {
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

BreweryList.propTypes = {
	breweries: PropTypes.array.isRequired,
};
