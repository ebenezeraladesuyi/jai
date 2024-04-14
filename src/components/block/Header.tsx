import React from 'react'
// import logo from "../../assets/images/DWC-Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// import { Link } from "react-scroll";

const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className={`w-full h-[75px] lg:h-[130px flex justify-center items-center shadow-m font-pop fixed z-40 bg-white text-white  shadow-md `}>
        <div className="w-[90%] h-full flex flex-co justify-between items-center ">

            {/* <div className='hidden w-[100%] h-full lg:flex justify-between items-center'>

                <div className='p-2 rounded-md bg-white shadow-md w-[50px] md:[70px] z-40'>
                    <img className="w-full " src={logo} alt="W2H-logo" />
                </div>

            </div> */}

            {/* <div className='flex justify-between items-center w-full'> */}
            <NavLink to='/'>
                <div className='lg:hidde p-2 rounded-md bg-white shadow-m w-[50px] md:w-[70px] z-40'>
                    {/* <img className="w-full " src={logo} alt="W2H-logo" /> */}
                    <h5 className='text-black'>LOGO</h5>
                </div>
            </NavLink>

            {/* <div className='hidden lg:flex p-2 px-6 rounded-md bg-white shadow-md text-[20px] text-black gap-6'>
                <a className='decoration- cursor-pointer text-black '><FaSquareFacebook /></a>
                <a className='decoration-non cursor-pointer text-black '><FaTwitterSquare /></a>
                <a className='decoration-non cursor-pointer text-black '><FaLinkedin /></a>
                <a className='decoration-non cursor-pointer text-black '><FaSquareInstagram /></a>
            </div> */}

            {/* <h4 className='text-[17px] z-50 shadow-md text-white bg-opacity-40 rounded-[30px] relative p-1 px-3 rounded-m bg-black'>DanWilliams Consult</h4> */}

            <div className='lg:bg-white lg:bg-opacity-4 rounded-[30px] lg:shadow-m p-3'>
                <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out">
                    <NavLink to="/">
                        <ol className='text-black hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                    </NavLink>

                    <NavLink to='/'>
                        <ol className='text-black  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About Us</ol>
                    </NavLink>

                    {/* <Link offset={-100} smooth={true} duration={500} to="offer"> */}
                    <NavLink to='/'>
                        <ol className='text-black  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Our Products</ol>
                    </NavLink>

                    <NavLink to='/'>
                        <ol className='text-black  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Cars</ol>
                    </NavLink>

                    {/* <Link offset={-100} smooth={true} duration={500} to="blog">
                        <ol className='text-black  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Blog</ol>
                    </Link> */}

                    {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                    <NavLink to='/contact'>
                        <ol className='text-black  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact Us</ol>
                    </NavLink>

                    {/* <NavLink to="/firststep">
                        <button className=' px-4 py-3 bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out hover:px-5 hover:py-4'>
                            FIRST STEP!
                        </button>
                    </NavLink> */}
                </li>

                

            { dropdown ?
                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-m text-black relative z-50 p-1 rounded-md bg-white" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-black shadow-m bg-white p-1 rounded-md ml-[6px] relative z-50" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>
            {/* </div> */}

        </div>

        {/* {
            dropdown ? */}

            <div className={` ${dropdown ? 'transform translate-x-0' : 'transform -translate-y-full'} lg:hidden w-full h-[100vh] absolute bg-whit backdrop-blur-m bg-black bg-opacity-60 top-0 transition-all ease-in-out z-30 duration-300`} onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute ">
                    {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
                        <NavLink to="/">
                            <ol className='text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                        </NavLink>

                        <NavLink to='/'>
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About Us</ol>
                        </NavLink>

                        {/* <Link  offset={-100} smooth={true} duration={500} to="offer"> */}
                        <NavLink to='/'>
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Our Products</ol>
                        </NavLink>

                        <NavLink to='/'>
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Cars</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="blog">
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Blog</ol>
                        </Link> */}

                        {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                        <NavLink to='/contact'>
                            <ol className='text-white  hover:text-[#eedfb0s] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact Us</ol>
                        </NavLink>

                        {/* <NavLink to="/firststep">
                            <button className='w-[150px] bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px]'>
                                FIRST STEP!
                            </button>
                        </NavLink> */}
                    {/* </li> */}
                </div>
            </div>

            {/* :
                null
        } */}

                    {/* <div className="flex items-center mt-[12px] animate-pulse text-[var(--accent)]">
                      <motion.button
                        animate={{ x: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="w-[150px] h-[45px]  rounded-md text-[20px]  border border-[#12C5E4]  dark:text-[#12C5E4]"
                      >
                        Contact Me
                      </motion.button>
                    </div> */}
    </div>
  )
}

export default Header;

// #80c41c
// #3d82b3