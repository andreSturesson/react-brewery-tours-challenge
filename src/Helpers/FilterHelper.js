const API_URL = "https://api.openbrewerydb.org/v1/breweries";

export function buildUrl(params) {
	let url = API_URL;
	const queryParams = [];

	if (params.by_name) {
		queryParams.push(`by_name=${params.by_name}`);
	}
	if (params.by_state) {
		queryParams.push(`by_state=${params.by_state}`);
	}
	if (params.by_city) {
		if (Array.isArray(params.by_city)) {
			queryParams.push(`by_city=${params.by_city.join(",")}`);
		} else {
			queryParams.push(`by_city=${params.by_city}`);
		}
	}
	if (params.by_type) {
		queryParams.push(`by_type=${params.by_type}`);
	} else {
		queryParams.push(`by_type=micro`);
		queryParams.push(`by_type=regional`);
		queryParams.push(`by_type=brewpub`);
	}

	if (params.page) {
		queryParams.push(`page=${params.page}`);
	} else {
		queryParams.push(`page=1`);
	}
	queryParams.push(`per_page=10`);
	if (queryParams.length > 0) {
		url += "?" + queryParams.join("&");
	}
	return url;
}

export function getStateParams(state) {
	return {
		by_state: state,
		page: 1,
	};
}

export function getCityParams(cities) {
	return {
		by_city: cities,
		page: 1,
	};
}

export function getTypeParams(type) {
	if (type === "micro" || type === "regional" || type === "brewpub") {
		return {
			by_type: type,
			page: 1,
		};
	} else {
		console.log("Invalid type");
		return {};
	}
}

export function getSearchParams(search) {
	return {
		by_name: search,
		page: 1,
	};
}

export function getPaginationParams(page) {
	return {
		page: page,
	};
}
