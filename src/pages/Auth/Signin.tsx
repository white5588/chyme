import React from 'react'

import pics from "../../assets/Group_1__2_-removebg-preview.png"
import { Link } from 'react-router-dom'


const Signin = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#963c96]'>
       <div className='w-[95%] h-full flex justify-center items-center  '>
      
     <div className='w-[380px] h-[400px] flex justify-center items-center bg-white max-sm:w-[100%]  max-sm:h-[50%]   shadow-sm border rounded-md flex-col '>
     <div className='  w-[200px]  h-[50px] flex justify-center items-center  '>
        <img src={pics} className='  px-2 py-4 flex justify-center items-center '/>
      </div>
 <div className='flex  px-2 py-4 justify-center items-center flex-col rounded-md '>
 <div className='flex px-3 py-1 gap-2  flex-col '>
<div className='text-xs font-semibold  '>Email</div>
 <input type="text"  placeholder=' Please Enter you Name' className='  px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  <div className='flex px-3 py-1 gap-2  flex-col'>
<div className='text-xs font-semibold  '>Password</div>
 <input type="text"  placeholder=' Please Enter you LastName' className=' px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  
  <div className='flex w-full mt-2'>
    <button className='flex w-full  py-4 bg-[#7a47a3]  text-xs justify-center items-center rounded-md hover:scale-105 hover:bg-[#a770b9] transition-all font-semibold text-white   '>
     <Link to="/Usersider">
     
      SignIn
     
     </Link>
      
      </button>
  </div>

 <div className='px-2 h-[50px] flex justify-start items-start flex-col leading-[10px] relative mr-[16%] '>

<div className=' px-2 h-[50px]  flex  text-[10px] mt-10'>Dont Have An Account?/<div className='flex text-[11px] font-semibold hover:scale-125 transition-all  cursor-pointer  '>
  
  <Link to="/register">
  
  Register
  
  </Link>
  
  </div></div>

<div className=' px-2 h-[50px]  flex  text-[10px] mt-4'>Forgot Password? <div className='flex  text-[11px] font-semibold hover:scale-125 transition-all  cursor-pointer  '>click Here!</div></div>

 </div>
  

 </div>
     </div>
       </div>
    </div>
  )
}

export default Signin
