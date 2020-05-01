import { Drawers } from "../../../../services";

export interface DrawerRecipe {
	drawerType: Drawers;
	label: string;
}

export interface IProps {
	setOpenDrawer: (drawer: Drawers) => void;
	openDrawer: Drawers;
}
