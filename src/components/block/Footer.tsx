// import React from 'react'

import logo from "../../assets/images/jai-white.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-[60vh pt-[30px] bg- flex flex-col justify-center items-center font-pop shadow-md bg-black text-white">
      <div className="w-[90%] flex flex-col md:flex-row gap-8 mb-[25px] md:mb-">

        <div className="flex flex-col gap-5 w-full md:w-[40%] ">
          {/* <div className="w-[130px]"> */}
            {/* <img className="w-full" src={logo} alt="" /> */}
            {/* <h6>JAI</h6> */}
          {/* </div> */}
          
          <div className='lg:hidde p-2 rounded-md bg-whit shadow-m w-[90px] md:w-[120px] z-40 flex items-center justify-center'>
                {/* <h5 className='text-black text-[20px] font-bold'>JAI</h5> */}
                <img className="w-full" src={logo} alt="" /> 
            </div>

          <h6 className="text-[12px] md:text-[15px] text-justify text-[#50519f text-blac ">
            Justice Adegoke Investment. We are a supportive and inclusive business, which offers the best of services. Our, over 10 years of business, experience has makes us the best at what we do, which allows us to place our customer first.
          </h6>

          <h5 className="text-[12px] lg:text-[14px] text-cente mb-[20px] flex flex-col text-[#50519f text-blac ">
            <span className="text-[#80c41c]">Address:</span>Lagos State, Nigeria  <span className="text-[#80c41c]  ">Phone:</span> +234 (0) 903 615 0587 || +234 (0) 708 966 6137 <span className="text-[#80c41c]">Email:</span> justiceade202@gmail.com
          </h5>

          <div className="flex gap-3 items-center">
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF text-white border-white rounded-full">
              <FaFacebookF />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF text-white border-white rounded-full">
              <FaTwitter />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF text-white border-white rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF text-white border-white  border-[#00000 rounded-full">
              <MdAttachEmail />
            </a>
          </div>
        </div>

        <div className="flex flex-col font-semibold gap-3 text-[13px] md:text-[15px] text-[#50519f text-blac md:ml-[30px]">
          <h6 className="cursor-pointr mb-[20px] text-[16px] md:text-[18px] font-bold md:mt-[20px]">Services</h6>
          <h6 className="cursor-pointr">Sales of All Types of Cars</h6>
          <h6 className="cursor-pointe">Real Estate & Valuer</h6>
          <h6 className="cursor-pointr">Setup of Barbing Salons</h6>
          <h6 className="cursor-pointr">Breeders (Sales & Training)</h6>
        </div>

      </div>

      <div className="bg-[#000000] py-5 w-full flex items-center justify-center">
        <h5 className="text-[12px] md:text-[15px] text-white mt-[30px w-[90%] text-center md:text-left">
          Copyright &#169; 2024 Justice Adegoke Investment
        </h5>
      </div>
    </div>
  )
}

export default Footer