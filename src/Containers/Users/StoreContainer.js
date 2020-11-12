import { Typography } from '@material-ui/core'
import React from 'react'
import { Carousel, Footer, Hero, Navbar, ProductDetail, ValueDesc } from '../../Components/Index'
import arrBack from "../../Modules/Images/carousel/ArrowBack.png";
import arrNext from "../../Modules/Images/carousel/ArrowNext.png";
import imgSaffron from '../../Modules/Images/carousel/saffron.png'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-next"
        onClick={onClick}
      >
          <img src={arrNext} alt="" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-back"        
        onClick={onClick}
      >
          <img src={arrBack} alt="" />
      </div>
    );
  }

const StoreContainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
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

export default StoreContainer;
