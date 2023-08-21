
const ChatNavbar = () => {
  return (
    <div className="navbar flex items-center bg-neutral-200 h-12 p-3 justify-between text-teal-50">
        <span className="logo font-medium mr-10"><img src="https://i.ibb.co/QC5cVgy/large-Ls-Kk-SEt-Ih-transformed-removebg-preview.png" className="object-cover" alt="" /></span>
        <div className="user flex items-center gap-x-10 mr-4">
            <div className="flex items-center gap-x-3">
                <img className="bg-purple-600 h-6 w-6 rounded-full object-cover" src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <span className="md:text-base text-gray-800 text-sm">John</span>
            </div>
            <div><button className="text-red-500 font-semibold md:text-base text-sm cursor-pointer">logout</button></div>
        </div>
    </div>
  )
}

export default ChatNavbar