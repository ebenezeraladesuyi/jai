/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'


interface iServiceCard {
    img? : any;
    offerName? : string;
    offerContent? : string;
}

const OfferCard:React.FC<iServiceCard> = ({img, offerName, offerContent}) => {

  return (
    <div className="w-full md:w-[31%] lg:w-[30%] flex flex-col items-center justify-center text-black h-[270px] md:h-[300px] rounded-md p-3 gap-5 md:gap-3 hover:bg-blue-500 hover:border-none transition-all duration-1000 ease-in-out hover:text-white shadow-md">

        <div className="text-[50px]">
            {/* <MdComputer /> */}
            {img}
        </div>

        <h3 className="text-[16px] font-bold text-center md:text-[21px]">
            {/* Product Engineering */}
            {offerName}
        </h3>

        <h5 className="text-[11px] text-center md:w-[75%] w-[90%]">
            {/* We will build your solution, whether bringing new amazing products and services to market, or discovering new ways. */}
            {offerContent}
        </h5>

    </div>
  )
}

export default OfferCard;