import React, {useContext, useRef, useEffect} from 'react';
import MainContext from '../../context/mainContext';
import aram from '../img/aram.jpg';
import yano from '../img/yano.jpg';
import libro from '../img/libro.png';
import '../styles/libros.css'

const Libros = () => {
    const mainContext = useContext(MainContext);
    const {getLibros} = mainContext;

    const myLibros = useRef();

    useEffect(()=> {
        getLibros(myLibros.current);
        //eslint-disable-next-line
    }, [])

    return (
        <div ref={myLibros} className='padt' >
            <div className="container hide-on-large-only" >
                <div className="row">
                    <div className="col s6 left ">
                            <img src={libro} className='libro' alt=""/>
                    </div>
                </div>
            </div>

            <div className="container hide-on-large-only">
                <div className="row">
                    <div className="col s6 offset">
                        <img src={aram} className='tapa' alt=""/>
                    </div>
                    <div className="col s6" >
                        <h5><b>Aram el armenio</b></h5>
                        <p>
                            Primera colaboración entre el guionista gallego Abel Alves y la dibujante argentina Majox, es una historia que combina la dureza de los hechos reales (el genocidio armenio por parte del Imperio otomano) con el cómic clásico de aventuras, en que la denuncia de las violaciones de los derechos humanos.
                            Demo Editorial
                            Dragon Cómics
                        </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col s6">
                        <h5><b>Ya no quedan heroes</b></h5>
                        <p >
                            Una historia en clave de western sudamericano y road movie, que se desarrolla en el escenario de la Guerra de la Triple Alianza o Guerra del Paraguay, con guion de Silvio Galizzi y dibujos de Majox y Esteban Tolj.
                            Editorial Ninfa.
                        </p>
                    </div>
                    <div className="col s6">
                        <img src={yano} className='tapa' alt=""/>
                    </div>
                </div>
            </div>

            <div className="container hide-on-small-only">
                <div className="row">
                    <div className="col s3 ">
                            <img src={libro} className='libro' alt=""/>
                    </div>
                </div>
            </div>
            <div className="container hide-on-small-only">
                <div className="row padt">
                    <div className="col s4 offset-s1">
                        <img src={aram} className='tapa' alt=""/>
                    </div>
                    <div className="col s4 offset-s1" >
                        <h5><b>Aram el armenio</b></h5>
                        <p className='pLarge'>
                            Primera colaboración entre el guionista gallego Abel Alves y la dibujante argentina Majox, es una historia que combina la dureza de los hechos reales (el genocidio armenio por parte del Imperio otomano) con el cómic clásico de aventuras, en que la denuncia de las violaciones de los derechos humanos.
                            Demo Editorial
                            Dragon Cómics
                        </p>
                    </div>
                </div>
                <div className="row padt">
                    <div className="col s4 offset-s1">
                        <h5><b>Ya no quedan heroes</b></h5>
                        <p className='pLarge'>
                            Una historia en clave de western sudamericano y road movie, que se desarrolla en el escenario de la Guerra de la Triple Alianza o Guerra del Paraguay, con guion de Silvio Galizzi y dibujos de Majox y Esteban Tolj.
                            Editorial Ninfa.
                        </p>
                    </div>
                    <div className="col s4 offset-s1">
                        <img src={yano} className='tapa' alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Libros;
