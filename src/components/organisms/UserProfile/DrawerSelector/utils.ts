import { DrawerRecipe } from "./interface";
/**
 * The available drawers that can be chosen
 */
export const DRAWER_LIST: DrawerRecipe[] = [
    {
        label: "Kláraðar æfingar",
        drawerType: "finished"
    },
    {
        label: "Vistaðar æfingar",
        drawerType: "saved"
    },
    {
        label: "Bikarar",
        drawerType: "trophies"
    }
];
