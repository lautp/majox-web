import React, {useEffect, useContext, useRef} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import MainContext from '../../context/mainContext';
import penny1 from '../img/1.jpg';
import penny2 from '../img/2.jpg';
import penny3 from '../img/3.jpg';
import penny4 from '../img/4.jpg';
import penny5 from '../img/5.jpg';
import penny6 from '../img/6.jpg';
import penny7 from '../img/7.jpg';
import penny8 from '../img/8.jpg';
import penny9 from '../img/9.jpg';
import bsas1 from '../img/1_BSAS.jpg';
import bsas2 from '../img/2_BSAS.jpg';
import bsas3 from '../img/3_BSAS.jpg';
import descubiertas from '../img/descubiertas.jpg';
import descubiertas2 from '../img/descubiertas2.jpg';
import ereccion from '../img/ereccion.jpg';
import llevamealtelo from '../img/llevamealtelo.jpg';
import oprimidas from '../img/oprimidas.jpg';
import patriarcade from '../img/patriarcade.jpg';
import pinch from '../img/PINCH.jpg';
import aram1 from '../img/41.jpg';
import aram2 from '../img/42.jpg';
import aram3 from '../img/43.jpg';
import aram4 from '../img/44.jpg';
import aram5 from '../img/45.jpg';
import aram6 from '../img/46.jpg';
import yoz from '../img/yoz.jpg';


const Carrousel = () => {
    
    const mainContext = useContext(MainContext);
    const {getPortfolio} = mainContext;

    const myPortfolio = useRef();

    useEffect(()=>{
        M.AutoInit();
        getPortfolio(myPortfolio.current);
        
    }, [])

    return (
        <div ref={myPortfolio} style={{paddingTop:'5em'}}>
            <div className='green' >
                
                    <div className="carousel  carousel-slider  hide-on-small-only" style={{Height:'1000px !important' ,}} >
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny1} style={{Height:'1000px !important'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny4} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny5} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny6} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny7} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny8} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={penny9} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={bsas1} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={bsas2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={bsas3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={descubiertas} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={descubiertas2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={ereccion} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={llevamealtelo} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={oprimidas} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={patriarcade} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={pinch} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram1} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram4} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram5} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={aram6} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal1"><img src={yoz} style={{width:'70%'}}/></a>
                    </div>
                    <div className="carousel carousel-slider center col s6 offset-s3 hide-on-large-only" >
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny1} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny4} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny5} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny6} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny7} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny8} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={penny9} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={bsas1} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={bsas2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={bsas3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={descubiertas} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={descubiertas2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={ereccion} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={llevamealtelo} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={oprimidas} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={patriarcade} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={pinch} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram1} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram2} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram3} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram4} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram5} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={aram6} style={{width:'70%'}}/></a>
                        <a className="carousel-item modal-trigger " href="#modal2"><img src={yoz} style={{width:'70%'}}/></a>
                    </div>
                
            </div>

            <div id="modal1" className="modal" style={{width:'40%'}} >
            
                <div className="modal-content">
                
                    <img src={yoz} style={{maxWidth:'90%', overflow:'hidden', padding:'0', margin:'0'}} />
                    
                </div>
                
            </div><div id="modal2" className="modal" style={{width:'100%'}} >
            <a href="#!" className="modal-close btn-flat right"><i className="material-icons">close</i></a>
                <div className="modal-content">
                
                    <img src={yoz} style={{maxWidth:'87%', overflow:'hidden'}} />
                    
                </div>
                
            </div>
        </div>
    )
}

export default Carrousel;
