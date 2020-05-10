import React, { useState } from "react";
import { Outer, Name } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../../";
import { Redirect } from "react-router-dom";

export const StatViewerIcon = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>();

    if (redirectUrl) return <Redirect to={redirectUrl} />;
    return (
        <IconWrapper
            type="app"
            onClick={() => {}}
            onDoubleClick={() => setRedirectUrl("/app/exercise-editor/stats")}
            onRightClick={() => {}}
        >
            <Outer>
                <FontAwesomeIcon icon={faChartBar} />
                <Name>Tölfræði</Name>
            </Outer>
        </IconWrapper>
    );
};
