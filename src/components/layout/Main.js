import React, {useEffect, useState, useContext, useRef} from 'react';
import majox from '../img/majox.png';
import bioI from '../img/bio.png';
import librosI from '../img/libros.png';
import portfolioI from '../img/portfolio.jpg';
import MainContext from '../../context/mainContext';



const Main = () => {

    const mainContext = useContext(MainContext);
    const {toComp, bio, libros, portfolio, getMain} = mainContext;

    const [portMeasure, setPortMeasure] = useState('0px');
    const [bioMeasure, setBioMeasure] = useState('0px');
    const [libroMeasure, setLibroMeasure] = useState('0px');

    const myMain = useRef();
    
    let count = 0;
    
    useEffect(()=> {
        getMain(myMain.current);

        setInterval(()=>{
            if(count===0){
                count = 1;
                setPortMeasure('5px')
                setBioMeasure('0px')
                setLibroMeasure('5px')
            }else if(count===1){
                count = 2;
                setPortMeasure('0px')
                setBioMeasure('5px')
                setLibroMeasure('0px')
            }else if(count===2){
                count = 3;
                setPortMeasure('5px')
                setBioMeasure('0px')
            }else if(count===3){
                count = 4;
                setPortMeasure('0px')
                setBioMeasure('5px')
                setLibroMeasure('5px')
            }
            else if(count===4){
                count=5
                setPortMeasure('0px')
                setBioMeasure('0px')
                setLibroMeasure('0px')
            }else if(count===5){
                setPortMeasure('0px')
                setBioMeasure('0px')
                count = 0
            }
        }, 300)

        //eslint-disable-next-line
    }, [count===0])

    return (
        <div className='container'   >
            <div className='row'>
                <div className='col s2' >
                    <a href="javascript:;" onClick={() => toComp(libros)}><img className='' src={librosI} alt="libr"  style={{width:'165%', marginTop:'5em', position:'relative', bottom:libroMeasure, transition:'bottom 0.5s'}} /></a>
                    <a href="javascript:;" onClick={() => toComp(bio)}><img className='bio' src={bioI} alt="bio" style={{marginTop:'5em', width:'140%', position:'relative', top:bioMeasure, transition:'top 0.5s'}}/></a>
                </div>
                
                <div className='col s8' style={{padding:'0'}}>
                    <img src={majox} alt="" style={{width:'110%'}} />
                </div>
                <div className='col s2' 
                    style={{marginTop:'7em', paddingLeft:'0'}}
                    
                    >
                    <a href="javascript:;" onClick={() => toComp(portfolio)}><img className='portfolio' src={portfolioI} alt="portfolio" style={{width:'140%', position:'relative', top:portMeasure, transition:'top 0.5s'}} /></a>
                </div>
            </div>
        </div>
    )
}

export default Main;
