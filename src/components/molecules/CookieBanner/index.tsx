import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "./styles";
import CookieConsent from "react-cookie-consent";

/**
 * A CookieBanner component which allows user to
 * accept policies and links to them.
 */
export const CookieBanner = () => {
    return (
        <CookieConsent
            buttonText="Samþykkja"
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
            <IconWrapper
                style={{ position: "fixed", left: "70px", bottom: "20px" }}
            >
                <FontAwesomeIcon icon={faCookieBite} />
            </IconWrapper>
            Við notum kökur á síðunni til að bæta notendaupplifun þína. Fyrir
            yfirlit yfir hvað við notum kökur fyrir, smelltu{" "}
            <a
                style={{ color: "#0000ee", textDecoration: "underline" }}
                href="/cookies"
            >
                hér.
            </a>
        </CookieConsent>
    );
};
