import React from 'react'
import pics from "../../assets/Group_1__2_-removebg-preview.png"

const Footer = () => {
  return (
    <div className='w-full h-[250px] flex justify-evenly items-center bg-purple-600  mt-[10%] sm-w-[100%] max-sm:[100%]'>
      <div className=' w-[250px] h-[150px] text-tl flex justify-center items-center text-[50px]  font-semibold  text-[azure] flex-row mr-10 text-sm sm:text-[white] '>Chyme

<img src={pics}  className='w-[120px] h-[60px] flex object-cover '/>
      </div>
       <div className='w-[80%] h-full flex justify-evenly text-white items-center gap-10'>
       
         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] max-sm:hidden'>
          <div className='flex justify-center items-center text-[25px]'>About us</div>
          <div className='flex justify-center items-center text-[15px]'>chyme is an  automated bill payment</div>
          <div className='flex justify-center items-center text-[15px]'>platform that provides seamless </div>
          <div className='flex justify-center items-center text-[15px]'>solutions to Airtime purchases,</div>
          <div className='flex justify-center items-center text-[15px]'>Data TopUp, Electricity Bill Payment, Pay</div>
          <div className='flex justify-center items-center text-[15px]'>LCable TV, Recharge Card Printing, Fund <br />Betting Account and many more.</div>

         </div>




         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] cursor-pointer '>
          <div className='flex justify-center items-center text-[25px] font-bold'>Do More</div>
          <div className='flex justify-center items-center text-[15px]'>Airtime</div>
          <div className='flex justify-center items-center text-[15px]'>Data Topup</div>
          <div className='flex justify-center items-center text-[15px]'>Cable TV  </div>
          <div className='flex justify-center items-center text-[15px]'>Electricity</div>
         </div>


         <div className='px-2 py-4 flex justify-center items-center flex-col leading-[30px] max-sm:hidden'>
          <div className='flex justify-center items-center text-[25px] font-semibold'>  Quick Links</div>
          <div className='flex justify-center items-center text-[15px]'>Login</div>
          <div className='flex justify-center items-center text-[15px]'>Signup</div>
          <div className='flex justify-center items-center text-[15px]'>Contact</div>
          <div className='flex justify-center items-center text-[15px]'>Betting</div>
         </div>

    

       </div>
    </div>
  )
}

export default Footer
