/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import photo from "../../../public/Tuhin/UserPost/swarm.png";
const LoadingSpninner = () => {
  return (
    <div className='flex w-full h-screen items-center '>
        <div className='mx-auto'>
        {/* <RotatingLines
          strokeColor="green"
          strokeWidth="4"
          animationDuration="0.75"
          width="120"
          visible={true}
        
        /> */}
        <Image src={photo} className='w-40 fade-in-out' alt='Logo loading'></Image>
        </div>
    </div>
  )
}

export default LoadingSpninner;