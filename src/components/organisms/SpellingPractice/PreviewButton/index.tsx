import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

/**
 * The preview button look in the exercise
 */
export default ({ onClick }: IProps) => {
    return <Button onClick={onClick}>Birta</Button>;
};
