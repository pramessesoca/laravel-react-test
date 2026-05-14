import React from 'react'
import Slider from "react-slick";
import { arr } from "../assets/imageExport"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        cssEase: "ease-in"
    };
    return (
        <div className='w-full max-w-screen-xl mx-auto overflow-hidden'>
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[260px] md:h-[520px] object-cover" src={arr[0]} alt="slides" />
                </div>
                <div>
                    <img className="w-full h-[260px] md:h-[520px] object-cover" src={arr[1]} alt="slides" />
                </div>
                <div>
                    <img className="w-full h-[260px] md:h-[520px] object-cover" src={arr[2]} alt="slides" />
                </div>
                <div>
                    <img className="w-full h-[260px] md:h-[520px] object-cover" src={arr[3]} alt="slides" />
                </div>
                <div>
                    <img className="w-full h-[260px] md:h-[520px] object-cover" src={arr[4]} alt="slides" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
