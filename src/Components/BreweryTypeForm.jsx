import PropsType from "prop-types";

export default function BreweryTypeForm({ setType }) {
	const filterByType = async (e) => {
		const type = e.target.value;
		if (type === "") {
			return;
		}
		if (type === "micro" || type === "regional" || type === "brewpub") {
			setType(type);
		}
	};

	return (
		<form id="filter-by-type-form" autoComplete="off">
			<label htmlFor="filter-by-type">
				<h3>Type of Brewery</h3>
			</label>
			<select
				name="filter-by-type"
				id="filter-by-type"
				onChange={(e) => filterByType(e)}
			>
				<option value="">Select a type...</option>
				<option value="micro">Micro</option>
				<option value="regional">Regional</option>
				<option value="brewpub">Brewpub</option>
			</select>
		</form>
	);
}

BreweryTypeForm.propTypes = {
	setType: PropsType.func.isRequired,
};
