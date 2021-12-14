import React, {useEffect, useContext, useRef} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import MainContext from '../../context/mainContext';
import penny1 from '../img/1.jpg';
import penny2 from '../img/2.jpg';
import penny3 from '../img/3.jpg';
import bsas1 from '../img/1_BSAS.jpg';
import bsas2 from '../img/2_BSAS.jpg';
import bsas3 from '../img/3_BSAS.jpg';
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
import './carrousel.css'

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
            <div className="container hide-on-small-only" style={{marginBottom:'5%'}}>
                <div className="row">
                    <div className="col s3">
                            <img src={port} alt="port" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>

            <div className="container hide-on-large-only" style={{marginBottom:'5%'}}>
                <div className="row">
                    <div className="col s6">
                            <img src={port} alt="port" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className='col s4'>
                        <img src={penny1} className='materialboxed' alt='penny1' style={{width:'100%', }} />
                    </div>
                    <div className='col s4'>
                        <img src={penny2} className='materialboxed' alt='penny2' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={penny3} className='materialboxed' alt='penny3' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas1} className='materialboxed' alt='bsas1' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas2} className='materialboxed' alt='bsas2' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={bsas3} className='materialboxed' alt='bsas3' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={descubiertas} className='materialboxed' alt='descubiertas' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={descubiertas2} className='materialboxed' alt='descubiertas2' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={ereccion} className='materialboxed' alt='ereccion' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={llevamealtelo} className='materialboxed' alt='llevame al telo' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={oprimidas} className='materialboxed' alt='oprimidas' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={patriarcade} className='materialboxed' alt='patriarcade' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={aram1} className='materialboxed' alt='aram1' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4'>
                        <img src={aram2} className='materialboxed' alt='aram2' style={{width:'100%'}} />
                    </div>
                    <div className='col s4'>
                        <img src={aram3} className='materialboxed' alt='aram3' style={{width:'100%'}}/>
                    </div>
                    <div className='col s4 offset-s4'>
                        <img src={yoz} className='materialboxed' alt='aram4' style={{width:'100%'}}/>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Carrousel;
