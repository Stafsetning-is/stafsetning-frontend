import * as React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
import { BoxWrap, Backdrop } from "../../";

/**
 * The parent modal component. It has a backdrop
 */
export const Modal = ({ children, onBackgroundClick }: IProps) => {
    const onClickMethod = onBackgroundClick ?? (() => {});
    return (
        <React.Fragment>
            <Backdrop onClick={onClickMethod} />
            <Container>
                <BoxWrap>{children}</BoxWrap>
            </Container>
        </React.Fragment>
    );
};
