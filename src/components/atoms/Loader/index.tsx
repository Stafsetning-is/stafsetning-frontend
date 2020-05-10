import React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

/**
 * The basic loader animation used throughout the project anytime content needs to be loaded to the site
 * @param loading boolean prop with optional horizontalPadding number prop
 */
export const Loader = ({ loading, horizontalPadding }: IProps) => {
    if (!loading) return null;
    return (
        <Container>
            <ClimbingBoxLoader size={20} color={"#00FFAA"} loading={true} />
        </Container>
    );
};
