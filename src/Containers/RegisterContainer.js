import Slider from "react-slick";
import React from 'react'
import { Carousel, FormRegisterasi } from '../Components/Index'
import arrBack from "../Modules/Images/carousel/ArrowBack.png";
import arrNext from "../Modules/Images/carousel/ArrowNext.png";
import imgTesti from '../Modules/Images/carousel/1.png'
import { Typography } from "@material-ui/core";

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

const RegisterContainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };    

    let descCarousell = {
        textDefinisi: " “Konsepnya itu coba aja dulu, semakin dicoba beh. Semakin nagihhhh Asli banget deh, coba aja jadi reseller disini, aku sendiri pun ga nyangka bakal seuntung ini“ ",
        name: "Lucy Hearthfilia",
        asal: "S1 Ilmu Komputer, Universitas Indonesia"
    } 
    return (
        <div className="register-section">
            <div className="testimonial-section">                
                <div className="testimonial-brand">
                    <Typography container className="font-lato" style={{fontWeight: 'bold'}} variant="h5" gutterBottom>
                        <span>Alzhaffron Indonesia</span>
                    </Typography> 
                </div>
                <div className="testimonial-desc">
                    <Typography className="font-lato" style={{fontWeight: 'bold', textAlign: 'center'}} variant="h4" gutterBottom="1">
                        <span className="title-section">Testimonial</span>
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
                </div>                
                
            </div>
            <div className="form-section">
                <FormRegisterasi />
            </div>
        </div>
    )
}

export default RegisterContainer
