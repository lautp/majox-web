import React, {useReducer} from 'react';
import { GET_LIBROS, GET_BIO, GET_PORTFOLIO, GET_MAIN } from "../types";
import mainReducer from "./mainReducer";
import MainContext from "./mainContext";


const MainState = props => {

    const initialState = {
        libros:{},
        bio:{},
        portfolio:{},
        main:{}
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

    const getMain = comp => {
        dispatch({type: GET_MAIN, payload:comp})
    }

    //Scroll to comps
    const toComp = comp => {
        comp.scrollIntoView({behavior:'smooth', block:'start'});
    }

    const toTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }


    return <MainContext.Provider
            value={{
                libros: state.libros,
                bio: state.bio,
                portfolio: state.portfolio,
                main: state.main,
                getLibros,
                getBio,
                getPortfolio,
                getMain,
                toComp,
                toTop
                }}>
            {props.children}
        </MainContext.Provider>;
}

export default MainState;
