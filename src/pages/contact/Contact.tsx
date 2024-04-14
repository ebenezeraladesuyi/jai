// import React from 'react'

import conImg from "../../assets/images/contact.svg";

const Contact = () => {
  return (
      <div id="" className="w-full md:h-[100vh] flex flex-col justify-center items-center font-mont py-[30px] relative overflow-hidden bg-[#eedfb0">
      <div className="w-[90%] z-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

        <div className="w-full md:w-[60%]">
          <img className="w-full" src={conImg} alt="" />
        </div>

        <form action="" className="w-full md:w-[38%] flex flex-col gap-4 items-center">

          <h5 className="text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#000000] animate-bounce text-center md:text-left">CONTACT US</h5>

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#eedfb0" type="text" name="" id="" placeholder="Name" />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#eedfb0" type="email" name="" id="" placeholder="Email" />

          <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#eedfb0" name="" id="" placeholder="Enter your message" />

          <button type="submit" className="bg-black hover:bg-transparent text-white rounded-md font-bold w-full hover:border-[1px] hover:border-black hover:text-black">
              Submit
          </button>

          <h5 className="text-[14px] font-bold mt-[40px]">
            Chat with us directly on <a className="text-green-500 border-[1px] border-green-500 p-2 rounded-md hover:text-black" href="">Whatsapp</a>
          </h5>

        </form>

      </div>
    </div>
  )
}

export default Contact