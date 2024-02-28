import axios from "axios";

/**
 * Fetches breweries data from the specified URL.
 *
 * @param {string} url - The URL to fetch the breweries data from.
 * @returns {Promise} - A promise that resolves to the breweries data.
 * @throws {Error} - If there is an error fetching the breweries data.
 */
export async function getBreweries(url) {
	try {
		const response = await axios.get(url);
		console.log("GETTING BREWERIES FROM API....");
		return response.data;
	} catch (error) {
		console.error("Error fetching breweries:", error);
		throw error;
	}
}
