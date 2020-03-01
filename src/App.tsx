import React from "react";
import Routing from "./routing";
import { Provider } from "react-redux";
import store from "./store";
import "./global.css";

const App = () => {
	return (
		<Provider store={store}>
			<Routing />
		</Provider>
	);
};

export default App;
