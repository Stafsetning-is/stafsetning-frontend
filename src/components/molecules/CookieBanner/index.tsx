import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper, Link } from "./styles";
import { BUTTON_TEXT, CONTENT_TEXT } from "./utils";
import CookieConsent from "react-cookie-consent";

/**
 * A CookieBanner component which allows user to
 * accept the usage of cookies and links to policy page.
 */
export const CookieBanner = () => {
    return (
        <CookieConsent
            buttonText={BUTTON_TEXT}
            buttonStyle={{
                height: "45px",
                backgroundColor: "#e8e8e8",
                color: "#4e4e4e",
                border: "#666 2px solid",
                fontSize: "16px",
                outline: "none"
            }}
            contentStyle={{ flex: "0 0 600px", margin: "0 auto" }}
            style={{
                height: "100px",
                opacity: "0.8",
                backgroundColor: "#51cd76",
                alignItems: "center",
                color: "black"
            }}
        >
            <IconWrapper>
                <FontAwesomeIcon icon={faCookieBite} />
            </IconWrapper>
            {CONTENT_TEXT} <Link href="/cookies">hér.</Link>
        </CookieConsent>
    );
};
