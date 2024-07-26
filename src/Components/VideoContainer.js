import React, { useEffect, useState } from "react";
import { Youtube_DATA } from "../utils/constans";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToggle } from "../utils/sidebarSlice";



const VideoContainer = () => {
  let [videos, setVideos] = useState(null);
  let dispatch = useDispatch()

   
  

  console.log(videos);

  

  useEffect(() => {
    fech();
  }, []);

  let fech = async () => {
    let data = await fetch(Youtube_DATA);
    let json = await data.json();


    setVideos(json.items)


    

  };

  return !videos ? null : <div className="flex flex-wrap px-8">
    {

      videos.map((element)=> (
     

    <Link to={'/watch?v='  + element.id} >
    
      <VideoCard key={element.id} data = {element.snippet.thumbnails.medium } data2 = {element.snippet} data3 = {element?.
        statistics
        }/> </Link>
       
      ))

      

    
    
 
    }
 
  </div>;
};

export default VideoContainer;
