
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-12 absolute from-black  text-white'>
        <h1 className='text-4xl font-bold'>
            {title}
        </h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-gray-700  text-white p-2 w-25 text-lg cursor-pointer  rounded-lg bg-opacity-100'> ⏯️ Play</button>
            <button className='bg-gray-700 mx-3 text-white p-2 w-25 text-lg cursor-pointer rounded-lg'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle
