"use client";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";

const Sidebar = () => {
  return (
    // dark : Zarif
    <>
      <div className="massage-sidebar dark:bg-black-bg-primary lg:w-full w-1/12"> {/*  responsive */}
      
        <ChatNavbar />
        <ChatSearch />
        <ChatChats />
      </div>
    </>
  );
};

export default Sidebar;
