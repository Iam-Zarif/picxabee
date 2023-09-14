import React from 'react'
import loaderImage from "../../../public/swarm.png"
import Image from "next/image"
const Loading = () => {
  return (
    <div className="loaderContainer flex flex-col gap-y-3 items-center ">
    <Image alt='logo' src={loaderImage} height={150} width={150} className='block text-center fade-in-out'/>
    <p className='text-2xl font-bold text-primary-color '>V 1.1</p>
  </div>
  )
}

export default Loading;