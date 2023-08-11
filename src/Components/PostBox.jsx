"use client";

import Image from "next/image";
import { PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import avatarImage from "../../public/Tuhin/UserPost/avatar.jpg";
import { useReducer } from "react";

// Todo:

const initialState = {

}
// Todo:


const reducer = (state, action) =>{

}

const PostBox = () => {
  
  // Todo:
  const [state , dispatch] = useReducer(reducer , initialState)


  return (
    <>
      <section className="my-8 w-full">
        <div className=" bg-[#F9F9F9] shadow-sm px-5 py-5 text-black">
          <div className="flex gap-x-4">
            <div className="online">
              <Image src={avatarImage} alt="" className="w-12 h-12 rounded-full p-[2px]" />
            </div>

            <div className="w-full">
              <textarea
                rows={4}                
                placeholder="Whats On Your Mind , Name?"
                className="border-none resize-none outline-none bg-transparent text-sm "
              ></textarea>
            </div>
          </div>
          <div className="h-[2px] bg-[#EEF1FF] my-5"></div>
          <div className="flex justify-center gap-x-4">
            <button className="flex items-center gap-x-1">
              <PhotoIcon className="w-6 h-6 text-sky-400" />{" "}
              <span className="font-semibold">Photo/Video </span>
            </button>
            <button className="flex items-center gap-x-1">
              <FaceSmileIcon className="w-6 h-6 text-[#A084E8]" />{" "}
              <span className="font-semibold">Feeling/Activity </span>
            </button>
          </div>
          <div>
            <button className="bg-[#024d47] w-full text-center text-white py-2 mt-4 font-semibold">
              Post{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostBox;
