import React from "react";
import { BasicButton } from "../../";
// import { setHideCompleted } from "../../../actions";
// import { connect } from "react-redux";
// import { IProps } from "./interface";

const FilterComponent = ({ hideCompleted }: IProps) => {
	return null;
	return (
		<React.Component>
			<BasicButton
				type="default"
				text="hide completed"
				onClick={() => hideCompleted(true)}
			/>
		</React.Component>
	);
};

export const FilterSearch = connect(null, { hideCompleted: setHideCompleted })(
	FilterComponent
);
