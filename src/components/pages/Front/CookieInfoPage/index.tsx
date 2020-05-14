import React from "react";
import { MainHeading, Heading, Content } from "./styles";

export default () => {
	return (
		<React.Fragment>
			<MainHeading>Skilmálar</MainHeading>
			<Content>
				Skilmálar þessir eiga við um persónuvernd, vistun gagna og
				notkun vafrakaka á stafsetning.is.
			</Content>
			<Heading>Persónuvernd</Heading>
			<Content>
				Farið er með þær persónuupplýsingar sem Stafsetning.is móttekur
				sem trúnaðarmál. Gögn sem eru auðkennandi fyrir þig sem
				einstakling eru einungis vistuð svo hægt sé að bregðast við
				aðstæðum, svo sem glötuðu lykilorði. Ef slíkt gerist þá er
				einungis hægt að endurstilla lykilorð með því að sannreyna að þú
				sért eigandi aðgangsins.
			</Content>
			<Heading>Meðhöndlun lykilorða</Heading>
			<Content>
				Stafsetning.is getur ekki séð, né deilt með þér lykilorðinu
				þínu. Vefurinn beitir viðurkenndum aðferðum til þess að halda
				lykilorðinu þínu öruggu.
			</Content>
			<Heading id="cookies">Um vafrakökur</Heading>
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
