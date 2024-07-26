import { Outlet } from "react-router-dom"

import SideBar from "./SideBar"


let Body = ()=>{

  

    return (
        <div className="flex mt-7 ">
           <SideBar/>
           <Outlet/>
        </div>
    )
}

export default Body