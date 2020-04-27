import React, { useEffect } from "react";
import Routing from "./routing";
import { Provider } from "react-redux";
import store from "./store";
import { PlainTextEditor } from "./components";

const App = () => {
	return (
		<Provider store={store}>
			<PlainTextEditor />
			<Routing />
		</Provider>
	);
};

export default App;
