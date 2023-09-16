"use client";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";

const Sidebar = () => {
  return (
    // dark : Zarif
    <>
      <div className="massage-sidebar dark:bg-black-bg-primary">
        <ChatNavbar />
        <ChatSearch />
        <ChatChats />
      </div>
    </>
  );
};

export default Sidebar;
