import { useState } from 'react'
import {RouterProvider} from "react-router-dom"
import { mainrouter } from './router/Mainrouter'

 const app =() =>{

  return(

    <div>
      < RouterProvider router={mainrouter}/>
    </div>
  )
 }

 export default app
