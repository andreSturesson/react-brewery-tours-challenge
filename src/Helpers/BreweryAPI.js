import axios from "axios";

const API_URL = "https://api.openbrewerydb.org/v1/breweries";
const PER_PAGE = 10;

export async function getBreweries(page) {
	const url = `${API_URL}?page=${page}&per_page=${PER_PAGE}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries:", error);
		throw error;
	}
}

export async function getBreweriesByState(state) {
	const url = `${API_URL}?by_state=${state}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries by state:", error);
		throw error;
	}
}
export async function getBreweriesByType(type) {
	const url = `${API_URL}?by_type=${type}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries by type:", error);
		throw error;
	}
}

export async function getBreweriesByTypeAndState(type, state) {
	const url = `${API_URL}?by_type=${type}&by_state=${state}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries by type and state:", error);
		throw error;
	}
}

export async function getBreweriesByCity(city) {
	const url = `${API_URL}?by_city=${city}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries by city:", error);
		throw error;
	}
}

export async function getBreweriesByTypeByStateAndByCities(
	type,
	state,
	cities
) {
	const url = `${API_URL}?by_type=${type}&by_state=${state}&by_city=${cities.join(
		","
	)}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(
			"Error fetching breweries by type, state, and cities:",
			error
		);
		throw error;
	}
}
