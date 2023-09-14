"use client"
import { MessageContext } from "@/provider/MessageProvider";
import { useContext } from "react";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";

const Sidebar = () => {
  const {drawerOn} = useContext(MessageContext);

  return (
    <>
     {drawerOn && <div className="massage-sidebar">
          <ChatNavbar/>
          <ChatSearch />
          <ChatChats />
      </div>}
      </>
  )
}

export default Sidebar;