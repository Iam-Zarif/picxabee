import { RotatingLines } from 'react-loader-spinner';

const LoadingSpninner = () => {
  return (
    <div className='flex h-screen items-center'>
        <div className='mx-auto'>
        <RotatingLines
          strokeColor="green"
          strokeWidth="4"
          animationDuration="0.75"
          width="120"
          visible={true}
        
        />
        </div>
    </div>
  )
}

export default LoadingSpninner;