import React, { useEffect } from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { queueTutorialItems, removeDialogsByLocation } from "../../actions";
import { checkIfCompleted } from "../../services";
import { StoreState } from "../../reducers";

const Component = ({
	children,
	items,
	queueTutorialItems,
	location,
	removeDialogsByLocation,
	user,
}: IProps) => {
	useEffect(() => {
		if (user.type === "guest") return;
		Promise.all(items.map((item) => checkIfCompleted(item, user._id)))
			.then((seenArray) => {
				queueTutorialItems(
					items
						.map((item) => ({
							...item,
							location,
						}))
						.filter((_item, index) => {
							return !seenArray[index];
						})
				);
			})
			.catch((e) => {});

		return () => removeDialogsByLocation(location);
	}, []);

	return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state: StoreState) => ({
	user: state.auth.user,
});

export const TutorialWrapper = connect(mapStateToProps, {
	queueTutorialItems,
	removeDialogsByLocation,
})(Component);
