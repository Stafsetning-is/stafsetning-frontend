import React from "react";
import { Link, Comment } from "./styles";
import { BANNER_PROPS, CONTENT_TEXT, DETAILS_TEXT } from "./utils";
import { Outer } from "./styles";
import CookieConsent from "react-cookie-consent";
import { HashLink as NavLink } from "react-router-hash-link";

/**
 * A CookieBanner component which allows user to
 * accept the usage of cookies and links to policy page.
 */
export const CookieBanner = () => {
	return (
		<Outer>
			<CookieConsent {...BANNER_PROPS}>
				<div>
					<Comment>{CONTENT_TEXT}</Comment>
					<NavLink smooth to="/tos#cookies">
						<Link>{DETAILS_TEXT}</Link>
					</NavLink>
				</div>
			</CookieConsent>
		</Outer>
	);
};
