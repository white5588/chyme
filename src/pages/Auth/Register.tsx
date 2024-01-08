import React from 'react'
import pics from "../../assets/Group_1__2_-removebg-preview.png"
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#963c96] max-sm:w-[100%]  '>
       <div className='w-[95%] h-full flex justify-center items-center  '>
      
     <div className='w-[350px] h-[600px] flex justify-center items-center bg-white max-sm:w-[100%] max-sm:h-[70%]     shadow-sm border rounded-md flex-col '>
     <div className='  w-[200px]  h-[50px] flex justify-center items-center mt-5 '>
        <img src={pics} className='  px-2 py-4 flex justify-center items-center mt-2'/>
      </div>
 <div className='flex w-fu  px-2 py-4 justify-center items-center flex-col rounded-md '>
 <div className='flex px-3 py-1 gap-2  flex-col '>
<div className='text-xs font-semibold  '>Name</div>
 <input type="text"  placeholder=' Please Enter you Name' className=' px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  <div className='flex px-3 py-1 gap-2  flex-col'>
<div className='text-xs font-semibold  '>Last Name</div>
 <input type="text"  placeholder=' Please Enter you LastName' className=' px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  <div className='flex px-3 py-1 gap-2  flex-col'>
<div className='text-xs font-semibold  '>Email</div>
 <input type="text"  placeholder=' Please Enter you Email' className=' w-full px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  <div className='flex px-3 py-1 gap-2  flex-col'>
<div className='text-xs font-semibold  '>Phone n.o</div>
 <input type="text"  placeholder=' Please Enter you Phone n.o' className=' px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]'/>
  </div>
  <div className='flex px-3 py-1 gap-2  flex-col'>
<div className='text-xs font-semibold  '>Password</div>
 <input type="text"  placeholder=' Please Enter you Password' className=' px-10 py-3 bg-white flex border outline-none shadow-sm  rounded text-[12px]  '/>
  </div>
  <div className='flex w-full mt-2'>
    <button className='flex w-full  py-4 bg-[#7a47a3]  text-xs justify-center items-center rounded-md hover:scale-105 hover:bg-[#a770b9] transition-all font-semibold text-white '>Register</button>
  </div>
  <div className='w-full  flex justify-center items-center mt-3'>
 <div className='w-full h-[0.2px] flex bg-black'></div>
  <div className=' bg-white flex justify-center items-center absolute text-xs '>oR</div>
  </div>
  <div className='flex w-full mt-3'>
    <button className='flex w-full  py-4 bg-[#ad72dd]  text-xs justify-center items-center rounded-md hover:scale-105  hover:bg-[#bf49ad] transition-all font-semibold text-white '>
      <Link to="/SignIn">
      SignIn
      </Link>
      </button>
  </div>

 </div>
     </div>
       </div>
    </div>
  )
}

export default Register
