import React from "react";
import { Modal, BasicButton } from "../..";
import { IProps } from "./interface";
import { NavLink } from "react-router-dom";
import { Paragraph } from "./styles";
/**
 * Modal that pops open when an error message is
 * given. Else it returns children
 *
 * Handles the ability to refreshs or steer user to
 * front page
 */
export const ErrorModal = ({ errorMessage, children }: IProps) => {
	return (
		<React.Fragment>
			{children}
			{errorMessage ? (
				<Modal>
					<Paragraph>{errorMessage}</Paragraph>
					<NavLink to="/">
						<BasicButton
							text="Fara aftur á forsíðu"
							type="default"
							onClick={() => {}}
						/>
					</NavLink>
				</Modal>
			) : null}
		</React.Fragment>
	);
};
