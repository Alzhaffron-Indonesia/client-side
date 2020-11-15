
import React from 'react'
import { Footer, Hero, Navbar, ProductDetail } from '../../Components/Index'
import imgSaffron from '../../Modules/Images/carousel/saffron.png'


const ShopContainer = () => {    
    let descCarousel = {
        textDefinisi: "Safron termasuk salah satu rempah-rempah yang paling banyak dicari orang di dunia. Meski harganya lumayan mahal, tetapi dalam pengobatan tradisional, safron banyak digunakan sebagai obat untuk berbagai macam penyakit.",
        name: "",
        asal: ""
    }                  
    let product = {
        title: "Bunga Saffron",
        harga: "350.000,00-",
        desc: "Safron termasuk salah satu rempah-rempah yang paling banyak dicari orang di dunia. Meski harganya lumayan mahal, tetapi dalam pengobatan tradisional, safron banyak digunakan sebagai obat untuk berbagai macam penyakit.",
    }

    return (
        <div>
            <Navbar />
            <Hero />                                                                           
                <div className="product-section">                
                    <ProductDetail imgCarousel={imgSaffron} titleClass="testi-desc" {...descCarousel} {...product} />            
                </div>
                            
            <Footer />



            
        </div>
    )
}

export default ShopContainer;
