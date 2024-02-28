import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectFilterParams,
	setFilterParams,
} from "../../State/brewery/brewerySlice";
import { getSearchParams } from "../../Helpers/FilterHelper";

export default function SearchByName() {
	const dispatch = useDispatch();

	const filterParams = useSelector(selectFilterParams);
	const [Search, setSearch] = useState("");

	const handleSearchChange = (event) => {
		const searchValue = event.target.value;
		setSearch(searchValue);
		if (searchValue.length > 3) {
			dispatch(
				setFilterParams({
					...filterParams,
					...getSearchParams(searchValue),
				})
			);
		}
		if (searchValue.length === 0) {
			dispatch(setFilterParams({ ...filterParams, ...getSearchParams("") }));
		}
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
					value={Search}
					onChange={handleSearchChange}
				/>
			</form>
		</header>
	);
}
