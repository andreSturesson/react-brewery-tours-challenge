import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./reset.css";
import { Provider } from "react-redux";
import store from "./State/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
