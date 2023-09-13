"use client"
import { useContext } from "react";
import ChatChats from "./ChatChats";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";
import { MessageContext } from "@/provider/MessageProvider";

const Sidebar = () => {
  const {drawerOn, setDrawerOn} = useContext(MessageContext);

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