import React, {useRef, useEffect, useContext} from 'react';
import MainContext from '../../context/mainContext';
import maji from '../img/maji.jpg';
import bi from '../img/bi.png';
import '../styles/bio.css'


const Bio = () => {

    const mainContext = useContext(MainContext);
    const {getBio} = mainContext;

    const myBio = useRef();

    useEffect(()=> {
        getBio(myBio.current);

        //eslint-disable-next-line
    }, [])

    return (
        <div ref={myBio} style={{paddingTop:'5em'}}>
            <div className="container hide-on-small-only bi">
                <div className="row">
                    <div className="col s3">
                            <img src={bi} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container hide-on-large-only bi">
                <div className="row" >
                    <div className="col s6 ">
                            <img src={bi} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row hide-on-small-only" >
                    <div className="col s4">
                        <img src={maji} alt=""/>
                    </div>
                    <div className="col s6 offset-s1">
                        <p className='pBig'>
                            <b>Majox</b> (María José González) nació en Capital Federal en 1984. Estudió Artes Visuales en la provincia de San Luis. Participó en varias antologías de historieta y realizó ilustraciones para numerosas revistas como Ohlala y revista Fierro. En 2015 dibujó "Aram el armenio", su primer novela gráfica ambientada durante el genocidio armenio. En el 2019 participo de la obra "Ya no quedan heroes", una historieta sobre la guerra del Paraguay. Es creadora del personaje humorístico "la negra gedienta" que puede leerse en instagram.  
                        </p>
                    </div>
                </div>

                <div className="row hide-on-large-only">
                    <div className="col s12">
                        <img src={maji} alt=""/>
                    </div>
                    <div className="col s12">
                        <p className='pSmall'>
                            <b>Majox</b> (María José González) nació en Capital Federal en 1984. Estudió Artes Visuales en la provincia de San Luis. Participó en varias antologías de historieta y realizó ilustraciones para numerosas revistas como Ohlala y revista Fierro. En 2015 dibujó "Aram el armenio", su primer novela gráfica ambientada durante el genocidio armenio. En el 2019 participo de la obra "Ya no quedan heroes", una historieta sobre la guerra del Paraguay. Es creadora del personaje humorístico "la negra gedienta" que puede leerse en instagram.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;
