import React, {useReducer} from 'react';
import { GET_LIBROS, GET_BIO, GET_PORTFOLIO } from "../types";
import mainReducer from "./mainReducer";
import MainContext from "./mainContext";


const MainState = props => {

    const initialState = {
        libros:{},
        bio:{},
        portfolio:{},
        majox:{}
    }
  
    const [state, dispatch] = useReducer(mainReducer, initialState);

    //Get the comps
    const getLibros = comp => {
        dispatch({type: GET_LIBROS, payload:comp})
    }

    const getBio = comp => {
        dispatch({type: GET_BIO, payload:comp})
    }

    const getPortfolio = comp => {
        dispatch({type: GET_PORTFOLIO, payload:comp})
    }

    //Scroll to comps
    const toComp = comp => {
        comp.scrollIntoView({behavior:'smooth', block:'start'});
    }


    return <MainContext.Provider
            value={{
                libros: state.libros,
                bio: state.bio,
                portfolio: state.portfolio,
                getLibros,
                getBio,
                getPortfolio,
                toComp
                }}>
            {props.children}
        </MainContext.Provider>;
}

export default MainState;
