import { FC } from "react";

export interface IPage {
	route: string;
	component: FC;
}

export interface IProps {
	pages: IPage[];
	modals: IPage[];
}
