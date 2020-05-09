import React from "react";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { Description, Banner, ButtonWrapper, IconWrapper } from "./styles";
import { BasicButton } from "../../atoms";
/**
 * Displays exercise in a box that
 * can be used in a grid of exercises
 */
export const CookieBanner = ({ text }: IProps) => {
	return (
		<Banner>
			<IconWrapper>
				<FontAwesomeIcon icon={faCookieBite} />
			</IconWrapper>
			<Description>{text}</Description>
			<ButtonWrapper>
				<BasicButton text="Samþykkja" type="white" />
			</ButtonWrapper>
		</Banner>
	);
};
