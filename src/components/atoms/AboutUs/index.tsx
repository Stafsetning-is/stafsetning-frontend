import React from "react";
import {
    Heading,
    Content,
    Mailto,
    DeveloperImage,
    DeveloperImageWrapper
} from "./styles";
import njall from "../../../static/images/njall.jpg";
import julia from "../../../static/images/julia.jpg";
import kjartan from "../../../static/images/kjartan.jpg";
import nanna from "../../../static/images/nanna.jpg";
import gabriel from "../../../static/images/gabriel.jpg";

export const AboutPage = () => {
    return (
        <React.Fragment>
            <Heading>UM OKKUR</Heading>
            <Content>
                Stafsetning.is er kennsluvefur ætlaður nemendum í grunn- og
                framhaldsskóla til að þjálfa sig í stafsetningu. Verkefnið var
                unnið sem lokaverkefni til BS gráðu í tölvunarfræði við
                Háskólann í Reykjavík. Markmið okkar með síðunni er að færa
                stafsetningarkennslu frá kennslustofunni og yfir á rafrænt form.
                Mikil áhersla var lögð á notendaupplifun og því er hún hönnuð
                með notkun allra nemenda og allra aldurshópa í huga.
            </Content>
            <Content>Þróunaraðilar:</Content>
            <DeveloperImageWrapper>
                <DeveloperImage src={njall}></DeveloperImage>
                <DeveloperImage src={julia}></DeveloperImage>
                <DeveloperImage src={gabriel}></DeveloperImage>
                <DeveloperImage src={nanna}></DeveloperImage>
                <DeveloperImage src={kjartan}></DeveloperImage>
            </DeveloperImageWrapper>
            <Content>
                {" "}
                Endilega
                <Mailto href="mailto:gabriel.sighvatsson@gmail.com">
                    hafðu samband!
                </Mailto>
            </Content>
            {/* TODO
            TOS, contact, report a bug, use of cookies */}
        </React.Fragment>
    );
};
