import React from "react";
import { MainHeading, Heading, Content } from "./styles";

export default () => {
	return (
		<React.Fragment>
			<MainHeading>Skilmálar um notkun á vafrakökum</MainHeading>
			<Content>
				Skilmálar þessir eiga við um notkun vafrakaka á stafsetning.is.
			</Content>
			<Heading>Um vafrakökur</Heading>
			<Content>
				Vafrakökur (e. cookies) eru litlar textaskrár sem eru vistaðar á
				tölvunni þinni eða öðrum snjalltækjum sem þú notar til að
				heimsækja vefsíðu í fyrsta sinn. Vafrakökurnar gera það að
				verkum að vefsíðan man eftir þér og hvernig þú notaðir síðuna í
				hvert sinn sem þú heimsækir hana aftur. Vafrakökur innihalda
				ekki persónuupplýsingar á borð við nafnið þitt, netfang,
				símanúmer eða kennitölu.
			</Content>
			<Heading>Notkun á vafrakökum</Heading>
			<Content>
				Vafrakökur eru notaðar til að bæta virkni vefsíðunnar og um leið
				bæta notendaupplifun þína þegar þú notar hana. Meðal þess sem
				við notum vafrakökur fyrir er til að muna hvort þú sért skráður
				inn eða ekki, og til vefmælinga hjá Google Analytics.
				Upplýsingar sem notaðar eru í þessum tilgangi eru sem dæmi
				tegund vafra, stýrikerfis og skjástærð notenda, fjöldi og lengd
				heimsókna, ferðalag notenda og leitarorð. Við notum þessar
				upplýsingar til að bæta upplifun notenda og við þróun á
				vefsíðunum okkar.
			</Content>
		</React.Fragment>
	);
};
