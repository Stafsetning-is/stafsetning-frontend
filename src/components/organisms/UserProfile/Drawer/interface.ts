import { Drawers } from "../../../../services";

export interface IProps {
    type: Drawers;
    children: React.ReactNode;
    openDrawer: Drawers;
}