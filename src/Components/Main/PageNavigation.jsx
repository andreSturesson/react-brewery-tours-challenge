import { useSelector, useDispatch } from "react-redux";
import {
	selectBreweries,
	selectFilterParams,
	setFilterParams,
} from "../../State/brewery/brewerySlice";
import { getPaginationParams } from "../../Helpers/FilterHelper";

const PageNavigation = () => {
	const dispatch = useDispatch();
	const breweries = useSelector(selectBreweries);
	const filterParams = useSelector(selectFilterParams);

	const goToNextPage = () => {
		if (breweries.length < 10) {
			return;
		} else {
			if (filterParams.page === 1) {
				dispatch(
					setFilterParams({ ...filterParams, ...getPaginationParams(2) })
				);
			} else {
				const nextPage = isNaN(filterParams.page) ? 2 : filterParams.page + 1;
				dispatch(
					setFilterParams({
						...filterParams,
						...getPaginationParams(nextPage),
					})
				);
			}
			console.log(filterParams);
		}
	};

	const goToPreviousPage = () => {
		if (filterParams.page === 1) {
			return;
		} else {
			const previousPage = isNaN(filterParams.page) ? 1 : filterParams.page - 1;
			dispatch(
				setFilterParams({
					...filterParams,
					...getPaginationParams(previousPage),
				})
			);
			console.log(filterParams);
		}
	};
	return (
		<div className="center">
			<button
				className="button-margin"
				id="prev-page"
				onClick={goToPreviousPage}
				disabled={filterParams.page === 1}
			>
				Previous
			</button>
			<button
				className="button-margin"
				id="next-page"
				onClick={goToNextPage}
				disabled={breweries.length < 10}
			>
				Next
			</button>
		</div>
	);
};

export default PageNavigation;
