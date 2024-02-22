import PropTypes from "prop-types";
export default function Search({ state, setState }) {
	const handleChange = (e) => {
		setState(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (state === "" || state.length < 3) {
			alert("Please enter a valid state abbreviation");
			setState("");
			return;
		}
	};

	return (
		<form id="select-state-form" autoComplete="off" onSubmit={handleSubmit}>
			<label htmlFor="select-state">Which state are you visiting?</label>
			<input
				id="select-state"
				name="select-state"
				type="text"
				value={state}
				onChange={handleChange}
			/>
			<input type="submit" value="Search" />
		</form>
	);
}

Search.propTypes = {
	state: PropTypes.string.isRequired,
	setState: PropTypes.func.isRequired,
};
