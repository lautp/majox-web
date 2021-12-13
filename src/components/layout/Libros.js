import React, {useContext, useRef, useEffect} from 'react';
import MainContext from '../../context/mainContext';
import aram from '../img/aram.jpg';
import yano from '../img/yano.jpg';

const Libros = () => {
    const mainContext = useContext(MainContext);
    const {getLibros} = mainContext;

    const myLibros = useRef();

    useEffect(()=> {
        getLibros(myLibros.current);
    }, [])

    return (
        <div ref={myLibros} style={{paddingTop:'5em'}}>
            <div className="container ">
                <div className="row">
                    <div className="col s4 offset-s2">
                        <img src={aram} alt="" style={{width:'100%', paddingTop:'1.5em'}}/>
                    </div>
                    <div className="col s4" >
                        <h5>Aram el armenio</h5>
                        <p>
                            Primera colaboración entre el guionista gallego Abel Alves y la dibujante argentina Majox, es una historia que combina la dureza de los hechos reales (el genocidio armenio por parte del Imperio otomano) con el cómic clásico de aventuras, en que la denuncia de las violaciones de los derechos humanos.
                            Demo Editorial
                            Dragon Cómics
                        </p>
                    </div>
                </div>
                <div className="row" style={{paddingTop:'5em'}}>
                    <div className="col s4 offset-s2">
                        <h5>Ya no quedan heroes</h5>
                        <p>
                            Una historia en clave de western sudamericano y road movie, que se desarrolla en el escenario de la Guerra de la Triple Alianza o Guerra del Paraguay, con guion de Silvio Galizzi y dibujos de Majox y Esteban Tolj.
                            Editorial Ninfa.
                        </p>
                    </div>
                    <div className="col s4">
                        <img src={yano} alt="" style={{width:'100%', paddingTop:'1.5em'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Libros;
