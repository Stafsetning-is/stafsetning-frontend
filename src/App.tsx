import React from "react";
import Routing from "./routing";
import { Provider } from "react-redux";
import store from "./store";
import "./global.css";
import { TrophyModal, Samur } from "./components";

const App = () => {
	return (
		<Provider store={store}>
			<TrophyModal />
			<Samur />
			<Routing />
		</Provider>
	);
};

export default App;
