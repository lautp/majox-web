import React, {useEffect, useContext, useRef} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import MainContext from '../../context/mainContext';
import penny1 from '../img/lowres/1.jpg';
import penny2 from '../img/lowres/2.jpg';
import penny3 from '../img/lowres/3.jpg';
import bsas1 from '../img/lowres/1_BSAS.jpg';
import bsas2 from '../img/lowres/2_BSAS.jpg';
import bsas3 from '../img/lowres/3_BSAS.jpg';
import descubiertas from '../img/descubiertas.jpg';
import descubiertas2 from '../img/descubiertas2.jpg';
import ereccion from '../img/ereccion.jpg';
import llevamealtelo from '../img/llevamealtelo.jpg';
import oprimidas from '../img/oprimidas.jpg';
import patriarcade from '../img/patriarcade.jpg';
import aram1 from '../img/41.jpg';
import aram2 from '../img/42.jpg';
import aram3 from '../img/43.jpg';
import yoz from '../img/yoz.jpg';
import port from '../img/port.png'
import '../styles/carrousel.css'

const Carrousel = () => {
    
    const mainContext = useContext(MainContext);
    const {getPortfolio} = mainContext;

    const myPortfolio = useRef();

    useEffect(()=>{
        M.AutoInit();
        getPortfolio(myPortfolio.current);
        //eslint-disable-next-line
    }, [])

    return (
        <div ref={myPortfolio} style={{paddingTop:'5em'}}>
            <div className="container hide-on-small-only port">
                <div className="row">
                    <div className="col s3">
                            <img src={port} alt="port"/>
                    </div>
                </div>
            </div>

            <div className="container hide-on-large-only port">
                <div className="row">
                    <div className="col s6">
                            <img src={port} alt="port"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className='col s4'>
                        <img src={penny1} className='materialboxed' alt='penny1'/>
                    </div>
                    <div className='col s4'>
                        <img src={penny2} className='materialboxed' alt='penny2'/>
                    </div>
                    <div className='col s4'>
                        <img src={penny3} className='materialboxed' alt='penny3'/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas1} className='materialboxed' alt='bsas1'/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas2} className='materialboxed' alt='bsas2'/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas3} className='materialboxed' alt='bsas3'/>
                    </div>
                    <div className='col s4'>
                        <img src={descubiertas} className='materialboxed' alt='descubiertas'/>
                    </div>
                    <div className='col s4'>
                        <img src={descubiertas2} className='materialboxed' alt='descubiertas2'/>
                    </div>
                    <div className='col s4'>
                        <img src={ereccion} className='materialboxed' alt='ereccion'/>
                    </div>
                    <div className='col s4'>
                        <img src={llevamealtelo} className='materialboxed' alt='llevame al telo'/>
                    </div>
                    <div className='col s4'>
                        <img src={oprimidas} className='materialboxed' alt='oprimidas'/>
                    </div>
                    <div className='col s4'>
                        <img src={patriarcade} className='materialboxed' alt='patriarcade'/>
                    </div>
                    <div className='col s4'>
                        <img src={aram1} className='materialboxed' alt='aram1'/>
                    </div>
                    <div className='col s4'>
                        <img src={aram2} className='materialboxed' alt='aram2' />
                    </div>
                    <div className='col s4'>
                        <img src={aram3} className='materialboxed' alt='aram3'/>
                    </div>
                    <div className='col s4 offset-s4'>
                        <img src={yoz} className='materialboxed' alt='aram4'/>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Carrousel;
