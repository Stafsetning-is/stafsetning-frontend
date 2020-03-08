import React from "react";
import { Modal, BasicButton } from "../..";
import { IProps } from "./interface";
import { NavLink } from "react-router-dom";
/**
 * Modal that pops open when an error message is
 * given. Else it returns null
 *
 * Handles the ability to refreshs or steer user to
 * front page
 */
export const ErrorModal = ({ errorMessage }: IProps) => {
	if (!errorMessage) return null;
	return (
		<Modal>
			<p>{errorMessage}</p>
			<NavLink to="/">
				<BasicButton
					text="Fara aftur á forsíðu"
					type="default"
					onClick={() => {}}
				/>
			</NavLink>
		</Modal>
	);
};
