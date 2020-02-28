import React, { useState, useEffect } from "react";
import { LayoutWrapper } from "../../../../layout";

export default () => {
	const [counter, setCounter] = useState(4);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("counter changed");
	}, [counter]);

	useEffect(() => {
		console.log("name changed");
	}, [name]);

	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<LayoutWrapper>
			<button onClick={increment}>inc</button>
			{counter}
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{name}
		</LayoutWrapper>
	);
};

export class SomeClass extends React.Component {
	state = {
		counter: 4
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ counter: 5 });
		}, 1500);
	}

	// componentDidUpdate(oldprops, oldState) {
	// 	if (this.state.counter !== oldState.counter) {
	// 		console.log("counter changec∂");
	// 	}
	// 	if (this.state.name !== oldState.name) {
	// 		console.log("name changed");
	// 	}
	// }

	incrementCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<LayoutWrapper>
				<button onClick={this.incrementCounter}>Increment</button>
				{this.state.counter}
			</LayoutWrapper>
		);
	}
}
