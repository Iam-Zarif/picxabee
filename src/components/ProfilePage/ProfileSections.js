"use client"
// import { useSession } from "next-auth/react";
import { BiSolidBookmarkAlt } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import ProfilePosts from "./ProfilePosts";
import ProfileStories from "./ProfileStories";
import Stories from './ProfileStories.json';
const ProfileSection = () => {
//   const session = useSession();
//   const userImg = session?.data?.user.image;
//   const userName = session?.data?.user.name;
  return (
    <div className="md:max-w-6xl mx-5 p-10 xl:mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 ml-6 md:mb-10 ">
        <div>
        <img className="rounded-full w-32 h-32" src="https://i.ibb.co/LJQxkSn/admin.jpg" alt="profile-pic"/>
        </div>

        <div>
          <span className="font-bold text-3xl-mr-4">Hridoy Hoque</span>
          <div className="ml-3 cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4">
            Edit Profile <IoSettingsOutline className="cursor-pointer h-4 w-4 inline"/>
          </div>

          <div className="mt-4 flex">
            <div>
              <span className="font-semibold">{Stories.length}</span> posts
            </div>
            <div className="ml-4">
              <span className="font-semibold">200</span> followers
            </div>
            <div className="ml-4">
              <span className="font-semibold">180</span> Following
            </div>
          </div>
          <div>
            <div className="pt-2">
              <span className="text-sm from-neutral-300 text-gray-600">Mern Stack Developer </span>
            </div>
            <div>
              <span className="text-sm from-neutral-300  text-gray-600">Student of programming Hero Batch 7 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-9">
        <ProfileStories />
      </div>
      <hr className="border-gray-500 mt-6" />
      <div className="flex justify-center gap-16 -mt-[0.5px] mb-6">
        <button className="focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2">
          <BsFillGridFill className="mt-1" /> Posts
        </button>
        <button className="focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2">
          <BiSolidBookmarkAlt className="mt-1" />
          Saved
        </button>
        <button className="focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2">
          <FaHistory className="mt-1" />
          all stories
        </button>
      </div>
      <ProfilePosts />
    </div>
  );
};

export default ProfileSection;