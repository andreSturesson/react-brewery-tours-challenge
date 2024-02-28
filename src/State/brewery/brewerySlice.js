import { createSlice } from "@reduxjs/toolkit";

//Unsure if this is the correct way to handle state using react redux. Tried to follow the documentation...
const initialState = {
	breweries: [],
	filterParams: [],
};

const brewerySlice = createSlice({
	name: "brewery",
	initialState,
	reducers: {
		setBreweries(state, action) {
			state.breweries = action.payload;
		},
		setFilterParams(state, action) {
			state.filterParams = action.payload;
		},
	},
	selectors: {
		selectBreweries: (state) => state.breweries,
		selectFilterParams: (state) => state.filterParams,
	},
});

export const { setBreweries, setFilterParams } = brewerySlice.actions;

export const { selectBreweries, selectFilterParams } = brewerySlice.selectors;

export default brewerySlice.reducer;
