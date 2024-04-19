// import React from 'react'

import OfferCard from "../../components/static/OfferCard";
// import { MdDeveloperMode } from "react-icons/md";
// import { TbDeviceMobileCode } from "react-icons/tb";
// import { IoMdAnalytics } from "react-icons/io";
// import { FaCloudArrowDown } from "react-icons/fa6";
// import { FaUsersLine } from "react-icons/fa6";
// import { SiHiveBlockchain } from "react-icons/si";
// import { IoMdPrint } from "react-icons/io";
// import { SiAdobeindesign } from "react-icons/si";
// import { GrTechnology } from "react-icons/gr";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
import car from "../../assets/images/car.png";

const Offer = () => {
  return (
    // <RevealOnScroll>
        <div id="services" className="w-full flex items-center justify-center relative font-pop"> 
            <div className="w-[90%]  flex flex-col justify-center items-center py-[40px] gap-4">

                <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">OUR SERVICES</h5>

                <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What We Offer You</h3>

                <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between items-center flex-wrap">

                    <OfferCard
                        img={car}
                        offerName="Cars"
                        offerContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis velit, error doloremque ducimus, ipsam, aperiam corporis dolorem nam ab molestias temporibus praesentium ullam quam laboriosam!"
                    />

                    <OfferCard
                        img={car}
                        offerName="Real Estate & Valuer"
                        offerContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis velit, error doloremque ducimus, ipsam, aperiam corporis dolorem nam ab molestias temporibus praesentium ullam quam laboriosam!"
                    />

                    <OfferCard
                        img={car}
                        offerName="Barbing Salon Setup"
                        offerContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis velit, error doloremque ducimus, ipsam, aperiam corporis dolorem nam ab molestias temporibus praesentium ullam quam laboriosam!"
                    />

                    <OfferCard
                        img={car}
                        offerName="Sales of Breeders (Dogs)"
                        offerContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis velit, error doloremque ducimus, ipsam, aperiam corporis dolorem nam ab molestias temporibus praesentium ullam quam laboriosam!"
                    />

                </div>

            </div>
        </div>
    // </RevealOnScroll>
  )
}

export default Offer;