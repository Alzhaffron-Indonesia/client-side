import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import imgLogo from '../Modules/Images/whiteLogo.png'

const Footer = () => {
    return (
        <footer class="footer-sec">
            <section class="contact-sec">
                <div className="address"> 
                    <div style={{textAlign: 'center'}}>
                        <img alt="logo" src={imgLogo} />                   
                    </div>                    
                    <h1>Alzhaffron Indonesia</h1>
                    <p>Grand Uni Residence Blok E No 04</p>                                        
                    <p>Pangkalan Bun - Kalimantan Tengah</p>                                        
                </div>
                <div></div>
                <div class="contact-us">                    
                    <h1>Hubungi Kami</h1>
                    <p><FaWhatsapp size={30} /> 0813 5138 4402</p>
                    <p><FaWhatsapp size={30} /> 0813 5138 4402</p>
                </div>
                <div class="find-us">                
                    <h1>Temuin Kami di</h1>
                    <p><FaWhatsapp size={30} /> 0813 5138 4402</p>
                    <p><FaWhatsapp size={30} /> 0813 5138 4402</p>
                </div>

            </section>
            <section class="copyright-sec">
                <p>&copy; copyright reserved 2020</p>
            </section>
        </footer>
    )
}

export default Footer
