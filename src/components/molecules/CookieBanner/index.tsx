import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper, Link, Comment } from "./styles";
import { BANNER_PROPS, CONTENT_TEXT, DETAILS_TEXT } from "./utils";
import CookieConsent from "react-cookie-consent";
import { NavLink } from "react-router-dom";

/**
 * A CookieBanner component which allows user to
 * accept the usage of cookies and links to policy page.
 */
export const CookieBanner = () => {
	return (
		<CookieConsent {...BANNER_PROPS}>
			<div>
				<Comment>{CONTENT_TEXT}</Comment>
				<NavLink to="/cookies">
					<Link>{DETAILS_TEXT}</Link>
				</NavLink>
			</div>
		</CookieConsent>
	);
};
