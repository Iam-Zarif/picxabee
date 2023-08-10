import { HiBookmark, HiChatAlt2, HiDotsCircleHorizontal, HiEmojiHappy, HiHeart, HiPaperAirplane } from "react-icons/hi";

const Post = ({id, username, userImg, img, caption}) => {
  return (
  <div className="bg-white my-7 border rounded-lg">
    
    {/* Header  */}
    <div className="flex items-center p-5"> 
        <img src={userImg} className="rounded-full h-12 w-12 object-cover border p-1 mr-3" alt=""/>
        <p className="flex-1 font-bold">{username}</p>
        <HiDotsCircleHorizontal className="h-5"/>
    </div>
   
    {/* img  */}
    <img className="object-cover w-full" src={img} alt="" />
    
    {/* Buttons  */}
    <div className="flex justify-between px-4 pt-4">
    <div className="flex space-x-4">
        <HiHeart className="btn"/>
        <HiChatAlt2 className="btn"/>
        <HiPaperAirplane className="btn"/>
    </div>
    <HiBookmark className="btn"/>
    </div>

    {/* Caption  */}
    <div>
        <p className="p-5 truncate"> 
            <span className="font-bold mr-2">{username}</span>
            {caption}
        </p>
    </div>

    {/* Comments */}

    {/* input box  */}

    <form className="flex items-center p-4">
        <HiEmojiHappy className="h-7 mr-2"/>
        <input type="text" placeholder="Add a comment ..." className="border-none flex-1 focus:ring-0 outline-none"/>
        <button className="font-semibold text-blue-400">Post</button>
    </form>

    </div>);
};

export default Post;
