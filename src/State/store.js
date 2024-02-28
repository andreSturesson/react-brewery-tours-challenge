import { configureStore } from "@reduxjs/toolkit";
import breweryReducer from "./brewery/brewerySlice";

export const store = configureStore({
	reducer: {
		brewery: breweryReducer,
	},
});

export default store;
