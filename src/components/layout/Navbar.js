import React, {useContext} from 'react';
import ig from '../img/ig.png';
import logo from '../img/logo4.png';
import negra from '../img/negra.png';
import MainContext from '../../context/mainContext';


const Navbar = () => {

    const mainContext = useContext(MainContext);
    const {toTop} = mainContext;

    return (
        <>
            <div className='navbar-fixed'>
                <nav>
                    <div className='nav-wrapper' style={{backgroundColor:'#F15339'}}>
                        <a href='#!' className='brand-logo left hide-on-small-only' style={{paddingTop:'0.4em'}}><i><img src={negra} alt="" style={{height:'80%'}}/></i></a>
                        <a href='#!' className='brand-logo center hide-on-small-only' onClick={()=>toTop()} style={{paddingTop:'0.04em'}}><i><img src={logo} alt="" style={{height:'100%'}}/></i></a>
                        <a href='#!' className='brand-logo hide-on-large-only' onClick={()=>toTop()} style={{paddingTop:'0.2em', paddingLeft:'0.5em'}}><i><img src={logo} alt="" style={{height:'80%'}}/></i></a>
                        <ul className='right black-text text-darken-5'>
                            <li><a href="#!" className='black-text text-darken-5'><i><img src={ig} alt="" style={{height:'33%'}} /></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
