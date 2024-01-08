import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosHeadset } from "react-icons/io";



interface iCards {
  icon?: any;
  text?:string

  }
  

 
 const Card: React.FC<iCards> = ({icon,text}) => {
   return (
     <div>
         <div className='  w-full h-[350px] flex  flex-row     top-[-6%]  relative justify-center items-center sm-grid-col max-sm:w-[100%]'>
        <div className='px-1 py-5 flex justify-center items-center flex-col w-[85%]  leading-[45px] max-sm:leading-[33px] max-sm: max-sm:w-[100%] bg-white font-semibold rounded  hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'> <MdAccessTime  className="text-[50px] flex">  {icon}</MdAccessTime><div className='font-bold px-2 py-4 text-[20px]'>We're Fast</div>24 hours online and zero  <br /> network downtime, even at  <br />midnight you can get your data <br /> with one click. You are one <br />button away from getting your data..{text}</div>
        
       </div>
      
     </div>
   )
 }
 
 




const Detailed = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center max-sm:w-[100%] max-sm:h-[100%] max-sm:relative max-sm:mt-[10%] '>
       <div className=' w-full h-full flex  bg-[lightpurple] top-[20%] flex-col  max-sm:w-[100%] max-sm:h-[100%] max-sm:relative max-sm:leading-[50px]  '>
{/*      
       <div className='  w-full h-[350px] flex  flex-row  gap-10   top-[-6%]  relative justify-center items-center sm-grid-col max-sm:w-[100%]'>
        <div className='px-1 py-5 flex justify-center items-center flex-col  leading-[45px]  bg-white font-semibold rounded  hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'> <MdAccessTime  className="text-[50px] flex" /> <div className='font-bold px-2 py-4 text-[20px]'>We're Fast</div>24 hours online and zero  <br /> network downtime, even at  <br />midnight you can get your data <br /> with one click. You are one <br />button away from getting your data..</div>
        <div className=' px-1 py-4 flex justify-center items-center  flex-col  leading-[49px]  bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm-[black] hover:border-black cursor-pointer'><FaLightbulb  clasName=" text-[60px] flex "/> <div className='font-bold px-2 py-4 text-[20px]'>Automated Services</div>All services, ranging from cheap <br /> airtime, data, cable tv, and <br /> betting account funding to electricity  <br /> bills, and even our recharge <br /> card printing are automated. </div>
        <div className=' px-1 py-4 flex justify-center items-center flex-col  leading-[45px] bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'><RiSecurePaymentLine className=" text-[50px] flex " />  <div className=' font-bold px-2 py-4 text-[20px]'>100% Secured Payment</div>  All your transactions at InstantopUp <br /> are secured and automated. Fund <br /> your InstantTopUp wallet with either <br /> your bank ATM card or  <br /> through a bank transfer. </div>
        <div className=' px-1 py-4 flex justify-center items-center flex-col  leading-[45px] bg-white font-semibold rounded hover:scale-105 transition-all hover:shadow-sm hover:border-black cursor-pointer'><IoIosHeadset className=" text-[50px] flex " />  <div className=' font-bold px-2 py-4 text-[20px]'>Suport 24/7</div>  Customer support staffs are always <br /> available 24/7 to help you <br /> resolve any issues. We provide <br /> you with multiple ways to <br /> reach us and get fast help. </div>
       </div> */}
        <div className="grid grid-cols-4 max-xl-grid-cols-3 w-[100%] max-sm:leading-[50px] max-sm:grid-cols-1   max-sm:relative  max-sm:justify-center  max-sm:items-center  max-sm:w-[100%] max-sm:h-[100%] ">
        <Card />
        <Card/>
        <Card/>
        <Card/>
       
    
     
    </div>
      

       <div className='px-2 py-4 flex justify-center items-center flex-col max-sm:w-[100%] max-sm:h-[50%]'>
         <div className='text-[50px] flex max-sm:w-[100%]'>InstanTopUp Easy Payment</div>
         <div className='flex mt-5 font-semibold max-sm:w-[100%] max-sm:leading-[25px]'>Cheapest VTU Platform in Nigeria, Top-up Phone Airtime, Buy Data (SME). <br />Fund Your Betting Account, Pay Electricity Bills, Print Recharge Cards Online, and Renew Cable TV Subscriptions In One Click. Instant Delivery!</div>
       </div>

       <div className='px-2 py-4 flex justify-start items-start flex-col mt-5 leading-[20px] max-sm:w-[100%]'>
         <div className='text-[15px] flex font-semibold max-sm:text-[12px]'>OUR SERVICES</div>
         <div className='flex mt-5 font-bold text-[55px] leading-[60px] max-sm:leading-[19px]  max-sm:text-[16px] max-sm:w-[100%] '>Buy/Resell Cheap Airtime & Data, Pay Bills Online, <br /> Pay Electricity Bills & Print Recharge Card</div>
       </div>


       </div>

    </div>
  )
}

export default Detailed
