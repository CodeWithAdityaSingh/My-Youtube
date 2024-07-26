import React, { useEffect } from 'react'
import { removeMenu } from '../utils/sidebarSlice'

import { useDispatch } from 'react-redux'

import { useSearchParams } from 'react-router-dom'


const Watch = () => {

   let dispatch = useDispatch()

   const[url,setUrl] = useSearchParams()

   console.log(url.get("v"));




   




  useEffect(()=>{
    

       dispatch(removeMenu())

  },[])
  return (
    <div>
       <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + url.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Watch
