import { GET_LIBROS, GET_BIO, GET_PORTFOLIO, GET_MAJOX, GET_MAIN } from "../types";

export default (state, action) => { 
    switch (action.type) {
        
        case GET_LIBROS:
            
            return{
                ...state,
                libros:action.payload

            };
        case GET_BIO:
            
            return{
                ...state,
                bio: action.payload

            };
        case GET_PORTFOLIO:
            
            return{
                ...state,
                portfolio: action.payload
            };
        case GET_MAIN:
            
            return{
                ...state,
                main: action.payload
            };
    
        default:
            return state;
    }
    
}