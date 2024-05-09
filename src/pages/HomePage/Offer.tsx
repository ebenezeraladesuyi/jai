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
import car from "../../assets/images/car1.png";
import property from "../../assets/images/property.jpg";
import barb from "../../assets/images/barb2.jpg";
import dog from "../../assets/images/dogs.jpg";

const Offer = () => {
  return (
    // <RevealOnScroll>
        <div id="services" className="w-full flex items-center justify-center relative font-pop overflow-hidden"> 
            <div className="w-[90%]  flex flex-col justify-center items-center py-[40px] gap-4">

                <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">OUR SERVICES</h5>

                <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What We Offer You</h3>

                <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between items-center flex-wrap">

                    <OfferCard
                        img={car}
                        offerName="Cars"
                        offerContent="Experience the thrill of the open road with our sleek and stylish cars. From smooth handling to cutting-edge technology, our vehicles offer the perfect blend of performance and luxury."
                    />

                    <OfferCard
                        img={property}
                        offerName="Real Estate & Valuer"
                        offerContent="Discover your dream home! Spacious interiors, modern amenities, and scenic views await in this luxurious property. Experience comfort and elegance at its finest. Your perfect sanctuary awaits!"
                    />

                    <OfferCard
                        img={barb}
                        offerName="Barbing Salon Setup"
                        offerContent="Transform your barbing salon dreams into reality with our expert setup services. From design, we'll create a stylish and functional space that attracts customers and boosts profits."
                    />

                    <OfferCard
                        img={dog}
                        offerName="Breeders (Dogs)"
                        offerContent="Discover your perfect furry companion! Our reputable breeding program offers healthy, well-socialized puppies raised with love, in good health and treatment. Find your new best friend today."
                    />

                </div>

            </div>
        </div>
    // </RevealOnScroll>
  )
}

export default Offer;