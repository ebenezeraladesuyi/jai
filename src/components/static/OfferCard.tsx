/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

// import car from "../../assets/images/car.png"; 


interface iServiceCard {
    img? : any;
    offerName? : string;
    offerContent? : string;
}

const OfferCard:React.FC<iServiceCard> = ({img, offerName, offerContent}) => {

  return (
    <div className="w-full md:w-[23%] lg:w-[30% flex flex-col items-center justify-center text-black h-[360px] md:h-[300px rounded-md p- gap-3 md:gap-3 hover:bg-blue-50 hover:border-none transition-all duration-1000 ease-in-out hover:text-whit shadow-md overflow-hidden">

        <div className="w-full overflow-hidden bg-gray-20 h-[55%">
            <img className="w-full h-ful" src={img} alt="" />
        </div>

        <hr className="border-[2px] border-orange-400 w-[50%] mb-[-10px] mt-[15px]" />

        <h6 className="font-bold text-[14px] md:text-[17px]">
            {/* Cars */}
            {offerName}
        </h6>

        <hr className="border-[2px] border-orange-400 w-[50%] mt-[-10px]" />

        <h6 className="text-[11px] md:text-[12px] text-justify p-3">
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis velit, error doloremque ducimus, ipsam, aperiam corporis dolorem nam ab molestias temporibus praesentium ullam quam laboriosam! */}
            {offerContent}
        </h6>
    </div>
  )
}

export default OfferCard;