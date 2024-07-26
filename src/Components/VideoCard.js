import React from 'react'

const VideoCard = ({data,data2,data3}) => {
  return (
    <div className='w-72 m-4 border p-4 shadow-md rounded-md cursor-pointer '>
       <img alt='mainImage ' src={data.url}></img>
       <h1 className='font-bold text-sm leading-5 '>{data2.localized.title}</h1>
       <div className='my-1 '>{data2.channelTitle}</div>
      <div className='flex  gap-x-2'>
      <span className='text-xs font-semibold'>{Number(data3.viewCount).toFixed()+"views"}</span>
     
      {/* <span>{data2.publishedAt}</span> */}
      
      </div>
    </div>
  )
}

export default VideoCard
