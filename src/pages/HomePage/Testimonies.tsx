// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa6";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
import SlideInComponent from "../../components/static/onScroll/SlideIn";

const Testimonies = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }


  return (
    <SlideInComponent>
      <div id="testimonies" className="w-full h-[70vh p-[30px] bg-black bg-opacity-75 bg-testiBg text-white flex flex-col gap-4 justify-center bg-opac items-center">

          <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">TESTIMONIES</h5>

          <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What People Say About Us..</h3>

          <div className="text-[60px] border-[2px] border-white rounded-full p-3 mt-[20px]">
            <FaUser />
          </div>

          <Slider {...settings} className="w-[95%] px-10 mt-[10px]" >

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"Remarkable experience! Their IT solutions streamlined our operations, the graphics design team brought our vision to life with creativity, and the printing service delivered exceptional quality on time. Highly recommended!" <br /><span className="font-bold mt-[30px]">- JUDITH MICHEAL</span></h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"The graphics design team delivered captivating visuals that elevate our brand, and the printing service provided impeccable quality. A reliable partner for our business growth!" <br /><span className="font-bold mt-[30px]">- LORI TEACH</span></h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center w-[90%] md:w-[70%] lg:w-[60%]">"Incredible! Their IT solutions revolutionized our workflow, the graphics design team captured our brand essence perfectly, and the printing quality surpassed expectations. A one-stop solution for all our needs!" <br /><span className="font-bold mt-[30px]">- BEN GRIMMER</span></h2>

          </Slider>
          
      </div>
    </SlideInComponent>
  )
}

export default Testimonies