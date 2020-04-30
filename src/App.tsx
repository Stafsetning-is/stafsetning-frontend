import React from "react";
import Routing from "./routing";
import { Provider } from "react-redux";
import store from "./store";
import "./global.css";
import { TrophyModal } from "./components";

const App = () => {
	return (
		<Provider store={store}>
			<TrophyModal />
			<Routing />
		</Provider>
	);
};

export default App;
