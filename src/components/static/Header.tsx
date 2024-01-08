import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pics from "../../assets/Group_1__2_-removebg-preview.png"
import { MdOutlineMenu } from 'react-icons/md';
import {TiTimes} from "react-icons/ti"

const Header = () => {
  const [short, setShort] = useState<boolean>(false);

  const onShort = () => {
    setShort(!short);
  };







  return (
    <div className='w-full h-[70px]  bg-[#bf8ce9]  flex justify-center items-center  '>
      
      <div className='w-[90%] h-full flex justify-between items-center  max-sm:w-[95%]  max-sm:justify-between max-sm:items-between  '>


<div className='px-2 py-2 flex justify-center items-center max-sm:w-[3%] '>
    <div className=' px-2 py-2 flex text-[30px]  text-white  font-semibold justify-center items-center max-sm:w-[50%]  max-sm:text-[100%]   max-sm:justify-start  '>Chyme 
    <img src={pics} className='flex justify-center items-center  max-sm:w-[12%] max-sm:h-[4%]  max-sm:absolute max-sm:ml-[10%]'/></div>
</div>

<div className=' px-2 py-4 flex justify-center items-center max-sm:hidden gap-10  '>
    <div className='px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'>Data</div>
    <div className=' px-2 py-4 text-[15px]  text-white  font-semibold hover:scale-105 transition-all cursor-pointer'>Airtime</div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Pay Bills</div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Electricity </div>
    <div className=' px-2 py-4 text-[15px] text-white font-semibold hover:scale-105 transition-all cursor-pointer'> Services </div>
</div>

<div className=' px-2 py-2 flex max-sm:hidden '>
    <button className=' px-2 py-2  bg-purple-600 rounded-md text-[white]  font-sans  border-black hover:scale-105 transition-all cursor-pointer '>
     
     <Link  to="/register">
     
      Get Started
     </Link>
      
      </button>
</div>


<div className=" flex-col items-center hidden max-sm:block max-sm:flex-col max-sm:relative max-sm:top-[75%] max-sm:h-[130px] max-sm:ml-[35%] sm:leading-[40px]  ">
                <div
                  className="hidden max-sm:block max-sm:flex-col text-black  px-2 py-4 leading-4  mt-10 justify-center items-center  max-sm:relative max-sm:top-[-50%]">
                  
                  <MdOutlineMenu className="   flex text-white h-[35px] w-[35px] hover:scale-[1.2] duration-300 transition-all  mt-[18%] items-center max-sm:relative absolute justify-center   max-sm:ml-[55%] " 
                   onClick={() => {
                    onShort();
                  }}
                  
                  />

                 {

                short ? (
                  <div className='px-2 py-4 bg-white  max-sm:w-[100%]'>
                  <div className="flex justify-center items-center px-2 py-3  bg-white">Data</div>
                  <div className="flex justify-center items-center px-2 py-3   bg-white mt-3">Airtime</div>
                  <div className="flex justify-center items-center px-2 py-3  bg-white mt-2"> Pay Bills</div>
                  <div className="flex justify-center items-center px-2 py-3  bg-white mt-2">Electricity</div>
                  <div className="flex justify-center items-center px-2 py-3  bg-white mt-2">Services</div>
                  
                  <div className="flex justify-center items-center px-2 py-3  bg-white mt-2 hover:scale-125 transition-all hover:bg-purple-500">
                    <Link to="/register">

                    Get Started
                    </Link>
                    </div>

                  </div>
                  ): null 
                 }
                </div>
              </div>

      </div>
    </div>
  )
}

export default Header
