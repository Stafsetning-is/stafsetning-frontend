import * as React from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { loginForm } from "./formRecipe";

export const LoginModal = () => {
	return (
		<Modal onBackgroundClick={() => {}}>
			<FormGenerator fields={loginForm} label="Skrá inn" />
			<BasicButton
				text={"Búa til aðgang"}
				onClick={() => {}}
				type="secondary"
			/>
		</Modal>
	);
};
