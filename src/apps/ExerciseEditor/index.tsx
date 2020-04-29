import React from "react";
import Routing from "./routing";
import { Provider } from "react-redux";
import store from "./store";
import { PlainTextEditor } from "./components";
import { ProtectPageWrapper } from "../../hoc";

const App = () => {
	return (
		<ProtectPageWrapper>
			<Provider store={store}>
				<PlainTextEditor />
				<Routing />
			</Provider>
		</ProtectPageWrapper>
	);
};

export default App;
