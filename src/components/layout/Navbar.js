import React, {useContext} from 'react';
import ig from '../img/ig.png';
import logo from '../img/logo4.png';
import negra from '../img/negra.png';
import MainContext from '../../context/mainContext';
import '../styles/navbar.css'


const Navbar = () => {

    const mainContext = useContext(MainContext);
    const {toTop} = mainContext;

    return (
        <>
            <div className='navbar-fixed'>
                <nav>
                    <div className='nav-wrapper' style={{backgroundColor:'#F15339'}}>
                        <a href='#!' className='brand-logo left hide-on-small-only' ><i><img src={negra} className='negraLogo' alt="" /></i></a>
                        <a href='#!' className='brand-logo center hide-on-small-only' onClick={()=>toTop()} ><i><img src={logo} className='majoLarge'  alt="" /></i></a>
                        <a href='#!' className='brand-logo hide-on-large-only' onClick={()=>toTop()} ><i><img src={logo} className='majoSmall' alt="" /></i></a>
                        <ul className='right black-text text-darken-5'>
                            <li><a href="https://www.instagram.com/lanegragedienta/" className='black-text text-darken-5'><i><img src={ig} className='ig' alt="" /></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
