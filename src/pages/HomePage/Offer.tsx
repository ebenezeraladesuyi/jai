// import React from 'react'

import OfferCard from "../../components/static/OfferCard";
import { MdDeveloperMode } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { IoMdPrint } from "react-icons/io";
import { SiAdobeindesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";

const Offer = () => {
  return (
    // <RevealOnScroll>
        <div id="offer" className="w-full flex items-center justify-center relative font-pop"> 
            <div className="w-[90%]  flex flex-col justify-center items-center py-[40px] gap-4">

                <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">OUR SERVICES</h5>

                <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What We Offer You</h3>

                <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between items-center flex-wrap">

                    <OfferCard
                        img={<MdDeveloperMode />}
                        offerName="Website Development"
                        offerContent="Building tailored software solutions to meet specific business needs, whether it's web applications, mobile apps, enterprise software, or other digital products."
                    />

                    <OfferCard
                        img={<TbDeviceMobileCode />}
                        offerName="Mobile App Development"
                        offerContent="Creating native or cross-platform mobile applications for iOS, Android, or other platforms to extend the reach of businesses to mobile users."
                    />

                    <OfferCard
                        img={<IoMdPrint />}
                        offerName="General Printing"
                        offerContent="Quality printing services for all your needs. Reliable, efficient, and affordable of banners, booklets, flyers, calendars, jotters, and more. Your printing needs, covered."
                    />

                    <OfferCard
                        img={<SiAdobeindesign />}
                        offerName="Graphics & Logo Designs"
                        offerContent="Eye-catching graphics and logo design services to make your brand stand out. Capture attention and leave a lasting impression. Elevate your brand with captivating graphics and bespoke logo design solutions"
                        />

                        <OfferCard
                            img={<GrTechnology />}
                            offerName="I.T. Consultation"
                            offerContent="Expert advice on optimizing your technology infrastructure. Tailored solutions to meet your business needs. Drive efficiency and innovation with our IT consultation services."
                        />

                    <OfferCard
                        img={<FaCloudArrowDown />}
                        offerName="Database & Storage Solutions"
                        offerContent="Helping businesses leverage cloud computing platforms such as AWS, Azure, or Google Cloud for scalability, reliability, and cost-effectiveness."
                        />

                        <OfferCard
                            img={<IoMdAnalytics />}
                            offerName="Data Analytics & Business Development"
                            offerContent=" Leveraging data to gain insights, make informed decisions, and optimize business performance through data analytics, reporting, and visualization."
                        />

                        <OfferCard
                            img={<FaUsersLine />}
                            offerName="UI/UX Design"
                            offerContent="Crafting intuitive interfaces and delightful experiences. Elevating user satisfaction through thoughtful design solutions. Enhance usability, engage users, and drive conversions."
                        />

                        <OfferCard
                            img={<SiHiveBlockchain />}
                            offerName="Blockchain Solutions"
                            offerContent="Developing blockchain-based applications, smart contracts, and decentralized systems for industries such as finance, supply chain, healthcare, and more."
                        />

                </div>

            </div>
        </div>
    // </RevealOnScroll>
  )
}

export default Offer;