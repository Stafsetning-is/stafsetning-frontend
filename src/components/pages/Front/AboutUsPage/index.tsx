import React from "react";
import {
    Heading,
    Content,
    Mailto,
    DeveloperImage,
    DeveloperImageWrapper
} from "./styles";
import { NJALL, JULIA, GABRIEL, NANNA, KJARTAN } from "../../../../static";
import { PAGE_TEXT } from "./utils";

export default () => {
    return (
        <React.Fragment>
            <Heading>UM OKKUR</Heading>
            <Content>{PAGE_TEXT}</Content>
            <Content>Þróunaraðilar:</Content>
            <DeveloperImageWrapper>
                <DeveloperImage src={NJALL}></DeveloperImage>
                <DeveloperImage src={JULIA}></DeveloperImage>
                <DeveloperImage src={GABRIEL}></DeveloperImage>
                <DeveloperImage src={NANNA}></DeveloperImage>
                <DeveloperImage src={KJARTAN}></DeveloperImage>
            </DeveloperImageWrapper>
            <Content>
                Endilega
                <Mailto href="mailto:gabriel.sighvatsson@gmail.com">
                    {" "}
                    hafðu samband!
                </Mailto>
            </Content>
            {/* TODO
            TOS, contact, report a bug, use of cookies */}
        </React.Fragment>
    );
};
