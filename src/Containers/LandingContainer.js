import { Typography } from '@material-ui/core'
import React from 'react'
import { Carousel, Footer, Hero, Navbar, ValueDesc } from '../Components/Index'
import Slider from "react-slick";
import arrBack from "../Modules/Images/carousel/ArrowBack.png";
import arrNext from "../Modules/Images/carousel/ArrowNext.png";
import imgTesti from '../Modules/Images/carousel/1.png'
import imgSaffron from '../Modules/Images/carousel/saffron.png'

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

const LandingContainer = () => {
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

    let descCarousell = {
        textDefinisi: " “Konsepnya itu coba aja dulu, semakin dicoba beh. Semakin nagihhhh Asli banget deh, coba aja jadi reseller disini, aku sendiri pun ga nyangka bakal seuntung ini“ ",
        name: "Lucy Hearthfilia",
        asal: "S1 Ilmu Komputer, Universitas Indonesia"
    }            

    return (
        <div>
            <Navbar />
            <Hero />     
            <Typography className="font-lato" style={{marginTop: '2em', fontWeight: 'bold', textAlign: 'center'}} variant="h4" gutterBottom>
                <span className="title-section">Testimonial Alzhaffron</span>
            </Typography>          
            <Slider {...settings} className="testi-section">
                <div>
                    <Carousel imgCarousel={imgTesti} titleClass="testi-desc" {...descCarousell}  />            
                </div>
                <div>
                    <Carousel imgCarousel={imgTesti} titleClass="testi-desc" {...descCarousell} />            
                </div>
                <div>
                    <Carousel imgCarousel={imgTesti} titleClass="testi-desc" {...descCarousell} />            
                </div>
            </Slider>   
            <Typography className="font-lato" style={{marginTop: '2em', fontWeight: 'bold', textAlign: 'center'}} variant="h4" gutterBottom>
                <span className="title-section">Apa Itu Saffron ?</span>                
            </Typography>                                   
            <Slider {...settings} className="definition-section">
                <div>
                    <Carousel imgCarousel={imgSaffron} titleClass="testi-desc" {...descCarousel} />            
                </div>
                <div>
                    <Carousel imgCarousel={imgSaffron} titleClass="testi-desc" {...descCarousel} />            
                </div>
                <div>
                    <Carousel imgCarousel={imgSaffron} titleClass="testi-desc" {...descCarousel} />            
                </div>
            </Slider>                            
            <ValueDesc />
            <Footer />



            
        </div>
    )
}

export default LandingContainer
