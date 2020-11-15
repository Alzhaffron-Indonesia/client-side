import React from 'react'
import imgLogo from '../Modules/Images/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false)
    const onClick = () => showHamburgerMenu ? setShowHamburgerMenu(false) : setShowHamburgerMenu(true)
    return (
        <header>
            <div className="jumbotron">
                <img alt="complex" src={imgLogo} />
                <h1>Alzhaffron Indonesia</h1>
            </div>
            {/* <nav>
                <ul>
                    <li><a href="#sejarah">Beranda</a></li>
                    <li><a href="#geografis">Toko</a></li>
                    <li><a href="#wisata">Registrasi</a></li>
                    <li><a href="#wisata">Testimonial</a></li>
                    <li><a href="#wisata">Kontak</a></li>
                </ul>
            </nav> */}

            <nav id="scrl">
                <div className="icon-menu">
                    {
                        showHamburgerMenu ?
                        <FaTimes size={30} onClick={onClick} />:
                        <FaBars size={30} onClick={onClick} />                    
                    }                    
                </div>                
                <div class="menu">
                    <ul className={showHamburgerMenu ? 'showing' : ''} id="list-menu">
                        <li className="bg-biru"><a href="https://github.com/alfi2811">Beranda</a></li>
                        <li className="bg-biru"><a href="#serv">Toko</a></li>
                        <li className="bg-biru"><a href="#serv">Registrasi</a></li>
                        <li className="bg-biru"><a href="#serv">Testimonial</a></li>
                        <li className="bg-biru"><a href="#serv">Kontak</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
