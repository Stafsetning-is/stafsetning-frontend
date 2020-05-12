import React from "react";
import {
	Heading,
	Content,
	Mailto,
	DeveloperImage,
	DeveloperImageWrapper,
} from "./styles";
import njall from "./njall.jpg";
import julia from "./julia.jpg";
import kjartan from "./kjartan.jpg";
import nanna from "./nanna.jpg";
import gabriel from "./gabriel.jpg";

export const AboutPage = () => {
	return (
		<React.Fragment>
			<Heading>UM OKKUR</Heading>
			<Content>
				Stafsetning.is er kennsluvefur ætlaður nemendum í grunn- og
				framhaldsskóla til að þjálfa sig í stafsetningu. Verkefnið var
				unnið sem lokaverkefni til BSc gráðu í tölvunarfræði við
				Háskólann í Reykjavík. Markmið okkar með síðunni er að færa
				stafsetningarkennslu frá kennslustofunni yfir á rafrænt form.
				Mikil áhersla var lögð á notandaupplifun og því er hún hönnuð
				með notkun allra nemenda og aldurshópa í huga.
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
