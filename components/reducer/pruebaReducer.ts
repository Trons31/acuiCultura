import { InitialR } from "./FcReducer";



type AccionType =
 |{ type: 'aumentar' }
 |{ type: 'decrementar' };


export const pruebaReducer = (state: InitialR, accion:AccionType ): InitialR => {
   
    switch (accion.type) {
        case 'aumentar':
            return{
                ...state,
                num : state.num + 1, // TODO: para aumentar el valor Incial debemos desestructurar el state y luego llamamos a nuestra propiedad  : state.propiedad + el valor que deseamos
            }


        case 'decrementar':
            return {
                ...state,
                num : state.num - 1,
            }
    
        default:
            return state; //TODO: Cuando utilizamos un switch para validar el type que recibimos del tipo de accion debemos devolver por defecto siempre el state de nuestro Reducer
    }

}