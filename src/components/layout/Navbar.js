import React from 'react';
import ig from '../img/ig.png';
import logo from '../img/logo2.png';
import negra from '../img/negra.png'


const Navbar = () => {
    return (
        <>
            <div className='navbar-fixed'>
                <nav>
                    <div className='nav-wrapper deep-orange accent-2'>
                        <a href='#' className='brand-logo black-text text-darken-5 left hide-on-small-only' style={{paddingTop:'0.4em'}}><i><img src={negra} alt="" style={{height:'80%'}}/></i></a>
                        <a href='#' className='brand-logo black-text text-darken-5 center' style={{paddingTop:'0.2em'}}><i><img src={logo} alt="" style={{height:'50%'}}/></i></a>
                        <ul className='right black-text text-darken-5'>
                            <li><a href="" className='black-text text-darken-5'><i><img src={ig} alt="" style={{height:'33%'}} /></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
