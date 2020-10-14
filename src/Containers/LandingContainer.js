import { Typography } from '@material-ui/core'
import React from 'react'
import { Carousel, Footer, Hero, Navbar, ValueDesc } from '../Components/Index'
import Slider from "react-slick";
import arrBack from "../Modules/Images/testi/ArrowBack.png";
import arrNext from "../Modules/Images/testi/ArrowNext.png";


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
    return (
        <div>
            <Navbar />
            <Hero />     
            <Typography className="font-lato" style={{marginTop: '2em'}} variant="h4" gutterBottom>
                <center>Testimonial</center> 
            </Typography>          
            <Slider {...settings} className="testi-section">
                <div>
                    <Carousel />            
                </div>
                <div>
                    <Carousel />            
                </div>
                <div>
                    <Carousel />            
                </div>
            </Slider>                            
            <ValueDesc />
            <Footer />



            
        </div>
    )
}

export default LandingContainer
