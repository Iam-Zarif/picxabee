
const ChatSearch = () => {
  return (
    <div className='search'>
        <div className='searchForm p-3 border-b-2 border-t-2'>
            <input placeholder="Search Here.." type="text" className="bg-transparent border-none text-white outline-none md:text-sm text-xs p-2"/>
        </div>
        <div className='userChat text-white cursor-pointer md:text-base text-sm m-2'>
            <div className="hover:bg-gray-400 rounded-md px-2 h-20 w-full flex items-center gap-3 transition-all ease-in-out">
                <img className="w-14 h-14 object-cover rounded-full" src="https://images.pexels.com/photos/3819585/pexels-photo-3819585.jpeg" alt="" />
                <div className='userChatInfo  flex-1'>
                    <span className='font-bold'>Jan</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatSearch