/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import photo from "../../public/swarm.png";
const LoadingSpninner = () => {
  return (
    <div className='flex w-full h-screen items-center '>
        <div className='mx-auto'>
        <Image src={photo} className='w-40 fade-in-out' alt='Logo loading'></Image>
        </div>
    </div>
  )
}

export default LoadingSpninner;