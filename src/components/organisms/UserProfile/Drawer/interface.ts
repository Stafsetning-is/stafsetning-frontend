export type Drawers = "saved" | "finished";

export interface DrawerRecipe {
    drawerType: Drawers;
    label: string;
};