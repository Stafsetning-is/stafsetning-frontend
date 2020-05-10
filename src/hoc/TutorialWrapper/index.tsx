import React, { useEffect } from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { queueTutorialItems, removeDialogsByLocation } from "../../actions";
import { checkIfCompleted } from "../../services";
import { StoreState } from "../../reducers";
import { GUEST } from "./utils";

/**
 * Higher order component that wraps an React component
 * and adds the funcitonality to be able to add tutorial
 * items for the component being wrapped
 *
 * to add tutorial items then include in the items array
 * the tutorial items
 *
 * A location must be given, and if the location has not been
 * used before then it needs to be created in TutorialService.
 * You must give it a descriptive name for the location
 * that describes the component being wrapped
 */
const Component = ({
	children,
	items,
	queueTutorialItems,
	location,
	removeDialogsByLocation,
	user,
}: IProps) => {
	useEffect(() => {
		/**
		 * The main functionality of the tutorial wrapper
		 * is in this useEfect hook
		 */

		// if the user is an guest then we do nothing in this hook
		if (user.type === GUEST) return;

		// check which tutorial items are completed
		Promise.all(items.map((item) => checkIfCompleted(item, user._id)))
			.then((seenArray) => {
				// we queue the tutorial items (action creator from REDUX)
				queueTutorialItems(
					/**
					 * first we map them to add this location
					 * as the location for that item
					 * then we chain a filter to the items
					 * and use the results from the Promise.all
					 * to filter out the tutorial items that have been completed
					 * items
					 */

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
			.catch(() => {
				// do nothing if there is an error
			});

		/**
		 * when the component is unmounted we remove all
		 * items from the Dialogs Queue that were added
		 * to the dialog queue from this location
		 */
		return () => removeDialogsByLocation(location);
	}, []);

	// simply returns the children
	return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state: StoreState) => ({
	user: state.auth.user,
});

export const TutorialWrapper = connect(mapStateToProps, {
	queueTutorialItems,
	removeDialogsByLocation,
})(Component);
