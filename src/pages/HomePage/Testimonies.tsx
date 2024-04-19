// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa6";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
// import SlideInComponent from "../../components/static/onScroll/SlideIn";

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
    // <SlideInComponent>
      <div id="testimonies" className="w-full h-[70vh p-[30px] bg-gray-100 bg-opacity- bg-testiBg text-black flex flex-col gap-4 justify-center bg-opac items-center">

          <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">TESTIMONIES</h5>

          <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What People Say About Us..</h3>

          <div className="text-[60px] border-[2px] border-black rounded-full p-3 mt-[20px]">
            <FaUser />
          </div>

          <Slider {...settings} className="w-[95%] px-10 mt-[10px]" >

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"Remarkable experience! I got a BMW from JAI last year, and it was dope. No stress, No hypertension. I was home, and my car got delivered to me. Highly recommended!" <br /><span className="font-bold mt-[30px]">- ADEOLA MICHEAL</span></h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"They have this strong sense of customer connection. You just feel like you are transacting with your long-time partner. I've done several business with them and all turned out well. A reliable brand to do business with." <br /><span className="font-bold mt-[30px]">- UCHE COLLIN</span></h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center w-[90%] md:w-[70%] lg:w-[60%]">"Incredible business brand! First time I did business with JAI, I thought they were like my previous business people, but from the first house I purchased, and now, after more business transaction, I can say, you can trust JAI." <br /><span className="font-bold mt-[30px]">- IBRAHIM ABDULLAHI</span></h2>

          </Slider>
          
      </div>
    // </SlideInComponent>
  )
}

export default Testimonies