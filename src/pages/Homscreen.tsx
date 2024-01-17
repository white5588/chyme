import React from 'react'
import pics from "../assets/business5-removebg-preview (1).png"
import Typewriter from "typewriter-effect"

const Homscreen = () => {
  return (
    <div className=' w-full h-screen   bg-purple-600 flex justify-center items-center max-sm:w-[100%] max-sm:block max-sm:flex-col max-sm:h-[100%] '>
      
      <div className='w-full h-full  flex justify-between  max-sm:justify-start max-sm:items-start max-sm:h-[100%] items-center max-sm:w-[100%] max-sm:block max-sm:flex-col-reverse'>

   


<div className='w-full h-screen flex justify-between items-center max-sm:h-[51%]  max-sm:w-[100%] max-sm:block max-sm:flex-col-reverse'>



<div className=' px-2 py-4 flex flex-col leading-[47px]  max-sm:h-[40%]  max-sm:w-[100%]  '>
    <div className=' text-[42px] font-bold  text-white  max-sm:w-[60%] max-sm:h-[50%] max-sm:text-[30px] '>
    <Typewriter
      options={{ loop: true, delay: 55, deleteSpeed: 50 }}
  onInit={(typewriter) => {
    typewriter.typeString(' Buy Data, Airtime , Pay Bills  At A Cheaper Rate!!!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
     </div>
   <div className=' px-2 py-4 text-[13px] font-semibold max-sm:w-[50%]  max-sm:h-[30%]  text-white'> Make IT  Flexible  For You ...</div>
</div>







</div>


      </div> 
<div className=' h-full w-[88%] flex  max-sm:top-[-60%] max-sm:w-[70%] max-sm:h-[40%]  max-sm:relative    '>
<img src={pics} className=' w-full h-full object-contain z-10 rounded-tl-[50px] rounded-br-[50px] max-sm:h-[50%]  flex max-sm:mr-[20%]  max-sm:w-[90%] max-sm:mt-[10%] '/>
</div>
    </div>
  )
}

export default Homscreen
