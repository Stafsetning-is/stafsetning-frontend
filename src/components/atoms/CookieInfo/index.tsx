import React from "react";
import { Heading, Content, Mailto } from "./styles";

export const CookieInfo = () => {
    return (
        <React.Fragment>
            <Heading>Um okkur</Heading>
            <Content>
                Stafsetning.is er kennsluvefur ætlaður nemendum í grunn- og
                framhaldsskólum til að þjálfa sig í stafsetningu. Verkefnið var
                unnið sem lokaverkefni til BS gráðu í tölvunarfræði við
                Háskólann í Reykjavík. Markmið okkar með síðunni er að færa
                stafsetningarkennslu frá kennslustofunni og yfir á rafrænt form.
                Mikil áhersla var lögð á notendaupplifun og því er hún hönnuð
                með notkun allra nemenda og allra aldurshópa í huga.
                Þróunaraðilar eru Njáll Skarphéðinsson, Natalia López Peralta,
                Kjartan Reynir Ólafsson, Gabríel Sighvatsson og Júlía
                Ingadóttir. Endilega
                <Mailto href="mailto:gabriel.sighvatsson@gmail.com">
                    hafðu samband!
                </Mailto>
            </Content>
            {/* TODO
            TOS, contact, report a bug, use of cookies */}
        </React.Fragment>
    );
};
