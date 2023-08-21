import { HiOutlineInboxIn, HiOutlineLink } from "react-icons/hi"

const Input = () => {
  return (
    <div className="sticky z-50">
        <div className='h-[70px] bg-white p-3 text-gray-800 flex items-center justify-between  border-t-2 border-gray-400'>
            <input type="text" placeholder="Type Message.."  className="bg-transparent border-2 border-gray-400  text-gray-800 outline-none font-medium md:text-sm text-xs p-2 flex-1 mr-5 rounded-lg placeholder-gray-500 placeholder-opacity-70"/>
            <div className="flex items-center gap-4 pr-3">
                <HiOutlineLink className="h-5 w-5 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                   <HiOutlineInboxIn className="h-5 w-5 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                </label>
                <button className="font-semibold text-blue-500">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Input