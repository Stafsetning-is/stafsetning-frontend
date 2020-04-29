import React from 'react';
import { IProps } from "./interface";
import { EmptyListMessage } from "./styles";

export default ({ children }: IProps) => {
    return (
        <EmptyListMessage>
            {children}
        </EmptyListMessage>
    );
};