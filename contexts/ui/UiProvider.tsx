import React, { FC, useReducer } from 'react'
import { UiContext, uiReducer, } from './'; // Exportamos nuestro UiContext


export interface UiState { // Creamos nuestro interface y la exportamos
     sidebarMenuOpen : boolean; // Si no colocamos el interrogante que cierra TypeScript asume que esta propiedad es obligatoria.
}


const Ui_INITIAL_STATE: UiState = { // Creamos una constante o una varibale y la tipamos o le decimos que es de tipo UiState por lo tanto debe recibir la propiedad sideMenuOpen y le pasamos el valor de false
     sidebarMenuOpen : false
}

interface Props { // Cremaos nuestras props locales para decirle  a nuestro functinal component que recibira childrens
     children? : JSX.Element | JSX.Element[] // El children o los children que recibira son de tipo JSXElement
}

   export const UiProvider:FC<Props> = ({ children }) => {  // Tipamos nuestro UiProvider y le diremos que es de tipo FC : functional component y le pasamos las props que recibira, y desestructuramos nuestro children

       const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE) // 

       const openMenu  = () => {
          dispatch({ type: 'ui -  open sidebar' })
       }

       const closeMenu = () => {
        dispatch({ type: 'ui - close menu' })
       }

        return (
           <UiContext.Provider value={{  // Llamaos a nuestro UiContext y le decimos que recibira un proveedor para ello colocamos punto al finalizar el nombre de nuestro UiContext y llamammos a la propiedad Provider
               ...state,

              
               openMenu,
               
               closeMenu
            }}>
              { children }
           </UiContext.Provider>
)
}   