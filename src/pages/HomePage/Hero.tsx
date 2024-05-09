// import React from 'react'

import { HeroCard } from "../../components";
import car from "../../assets/images/car.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="w-full h-[100%] md:h-[100vh] bg-blac flex justify-center items-center overflow-hidden"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="w-[90%] flex flex-col-reverse md:flex-row md:justify-between items-center">
        <motion.div className="w-full md:w-[40%] mt-[-50px] md:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
              <HeroCard 
                  content1="JUSTICE ADEGOKE INVESTMENT"
                  content2="EXPERIENCE LUXURY, PERFORMANCE & COMFORT ON EVERY MILE."
                  content3="Explore every drive and product with confidence, style, power and freedom."
              />
        </motion.div>

        <div className="relative w-full md:w-[57%] flex justify-center items-center mt-[130px] md:mt-0">
          <img className="relative z-20 w-[100%]" src={car} alt="" />

          <div className="absolute w-[120px] h-[120px] lg:w-[260px] lg:h-[260px] bg-blue-400 rounded-full top-[0px] left-[%]"></div>

          <div className="absolute bottom-[0px] left-0 animate-pulse flex gap-1">
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px ml-[0px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px ml-[0px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px ml-[px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px ml-[10px"></div>
          </div>

          <div className="absolute bottom-[0px] right-0 animate-pulse flex gap-1">
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px] ml-[0px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px] ml-[0px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px] ml-[0px]"></div>
            <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#eedfb0] rounded-md mb-[6px] mr-[0px]"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero