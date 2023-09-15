"use client";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";

const Sidebar = () => {
  return (
    <>
      <div className="massage-sidebar">
        <ChatNavbar />
        <ChatSearch />
        <ChatChats />
      </div>
    </>
  );
};

export default Sidebar;
