 
import { useEffect, useState } from 'react'
// import carz from "../../assets/images/car1.png";
import { iCar } from '../../types/Interface';
import axios from 'axios';
import { url } from '../../utils/Api';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Cars = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


    const [cars, setCars] = useState<iCar[]>([])

    // get all cars
    useEffect(() => {
        async function fetchCars() {

            try {
                const getAllCars = await axios.get(`${url}/car/getallcars`)

                setCars(getAllCars.data.data)

                // console.log(getAllCars.data.data)
            } catch (error) {
                console.error("error getting cars:", error)
            }
        }
        fetchCars()
    }, [])

  return (
    <div className="w-full flex justify-center items-center py-[30px] bg-gray-200 overflow-hidden">
        <div className="w-[90%]">

            <div>
                <h5 className="text-[22px] font-bold animate-pulse ">All Cars</h5>

                <hr className="border-orange-400 border-[2px] mb-[20px] w-[8%]" />
            </div>
            
            <div className='w-ful overflow-hidden'>
                <Slider {...settings} className="" >
                    {cars.map((car) =>(
                        <div key={car?._id} className="w-[260px] h-[310px] shadow-m overflow-hidden bg-whit rounded-md flex flex-col justify-between gap-4 relative pr-[20px] ml-[7px">

                            <h6 className="absolute bg-black text-white p-1 rounded-md text-[13px] top-[10px] left-[10px]">Avaliable</h6>
                            
                            <div className="w-full h-[60%] shadow-m">
                                <img src={car?.carImage} alt="" className="w-full h-full overflow-hidde" />
                            </div>

                            <div className="px-4 flex flex-col gap-1 h-[40%]">
                                <h6 className="font-bold text-[18px]">{car?.carName}</h6>
                                <h6 className=""><span className="font-bold">(N)</span> {car?.price} </h6>

                                <a href="https://wa.link/vlgbcl" className="bg-orange-400 p-2 rounded-md px-3 text-white">Chat Us to Order</a>
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Cars