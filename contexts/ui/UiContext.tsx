import { createContext } from "react";


interface Props {
    sidebarMenuOpen: boolean;


    openMenu: () => void;
    closeMenu: () => void;
}


export const UiContext = createContext({} as Props ) 
