"use client";
import { MyContext } from "@/context/ChatContext2";
import { useContext } from "react";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";

const Sidebar = () => {
  const {sideBar, setSidebar} = useContext(MyContext);
  // const toggleSidebar = () =>{
  //   setSidebar(!sideBar)
  // }
  return (
    // dark : Zarif
    <>
      <div
        className={`massage-sidebar dark:bg-black-bg-primary ${
          sideBar ? "lg:w-4/5" : "w-1/5"
        }`}
      > {/*  responsive */}
      
        <ChatNavbar />
        {/* <BiMenu className="text-black ml-2 cursor-pointer lg:hidden" size={22} onClick={toggleSidebar}/> */}
        <ChatSearch />
        <ChatChats />
      </div>
    </>
  );
};

export default Sidebar;
