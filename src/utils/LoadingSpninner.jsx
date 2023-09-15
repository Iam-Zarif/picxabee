/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import photo from "../../public/swarm.png";
const LoadingSpninner = () => {
  return (
    <div className=''>
      <div className=" flex  flex-col gap-4 items-center justify-center ">
        <Image src={photo} className="w-28 fade-in-out mt-56" alt="Logo loading" />
        <h1 className='text-xl font-bold fade-in-out font-serif text-center'>V - 1.0</h1>
      </div>

    </div>
  )
}

export default LoadingSpninner;