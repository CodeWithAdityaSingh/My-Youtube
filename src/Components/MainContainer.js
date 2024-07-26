import { useDispatch } from "react-redux";
import ButtonsLists from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { addMenu } from "../utils/sidebarSlice";

let MainContainer = ()=>{


    let dispatch = useDispatch()


    useEffect(()=>{
          dispatch(addMenu())
    },[])


    return (
       <div className=" h-full   m-4  w-11/12   ">
           <ButtonsLists/>
           <VideoContainer/>
       </div>
    )
}

export default MainContainer;