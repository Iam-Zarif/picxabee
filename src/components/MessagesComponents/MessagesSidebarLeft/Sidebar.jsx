"use client";
import { BiMenu } from "react-icons/bi";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";
import { useState } from "react";

const Sidebar = () => {
  const [sideBar, setSidebar] = useState(false);
  const toggleSidebar = () =>{
    setSidebar(!sideBar)
  }
  return (
    // dark : Zarif
    <>
      <div
        className={`massage-sidebar dark:bg-black-bg-primary ${
          sideBar ? "lg:w-full" : "w-1/12"
        }`}
      > {/*  responsive */}
      
        <ChatNavbar />
        <BiMenu className="text-black ml-2 cursor-pointer lg:hidden" size={22} onClick={toggleSidebar}/>
        <ChatSearch />
        <ChatChats />
      </div>
    </>
  );
};

export default Sidebar;
