import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	selectFilterParams,
	setFilterParams,
} from "../State/brewery/brewerySlice";
import { getStateParams } from "../Helpers/FilterHelper";
export default function SearchByState() {
	const dispatch = useDispatch();

	const filterParams = useSelector(selectFilterParams);
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
		if (e.target.value.length == "") {
			dispatch(setFilterParams({ ...filterParams, ...getStateParams("") }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search === "" || search.length < 3) {
			alert("Please enter a valid state abbreviation");
			setSearch("");
			return;
		} else {
			dispatch(setFilterParams({ ...filterParams, ...getStateParams(search) }));
		}
	};

	return (
		<form id="select-state-form" autoComplete="off" onSubmit={handleSubmit}>
			<label htmlFor="select-state">Which state are you visiting?</label>
			<input
				id="select-state"
				name="select-state"
				type="text"
				value={search}
				onChange={handleChange}
			/>
			<input type="submit" value="Search" />
		</form>
	);
}
