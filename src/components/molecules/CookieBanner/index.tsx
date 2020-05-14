import React from "react";
import { Link, Comment } from "./styles";
import { BANNER_PROPS, CONTENT_TEXT, DETAILS_TEXT } from "./utils";
import CookieConsent from "react-cookie-consent";
import { HashLink as NavLink } from "react-router-hash-link";

/**
 * A CookieBanner component which allows user to
 * accept the usage of cookies and links to policy page.
 */
export const CookieBanner = () => {
	return (
		<CookieConsent {...BANNER_PROPS}>
			<div>
				<Comment>{CONTENT_TEXT}</Comment>
				<NavLink smooth to="/tos#cookies">
					<Link>{DETAILS_TEXT}</Link>
				</NavLink>
			</div>
		</CookieConsent>
	);
};
