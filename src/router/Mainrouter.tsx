import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Homscreen from "../pages/Homscreen"
import Register from "../pages/Auth/Register"
import Signin from "../pages/Auth/Signin"
import UserSider from "../Screen/Userhome/UserSider"

export const mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
           {
            index:true,
            element:<Homscreen/>,
           }
        ]

       
    },
    {
        path:"/register",
        element:<Register/>,

    },
    {
        path:"/SignIn",
        element:<Signin/>,

    },
    {
        path:"/Usersider",
        element:<UserSider/>,

    }
])