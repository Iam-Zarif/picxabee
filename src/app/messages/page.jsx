"use client" 
import Chat from "@/components/MessagesComponents/MessagesSideSectionRight/Chat";
import MessagesSideSectionRightNavbar from "@/components/MessagesComponents/MessagesSideSectionRight/MessagesSideSectionRightNavbar";
import Sidebar from "@/components/MessagesComponents/MessagesSidebarLeft/Sidebar";
import { MessageContext } from "@/provider/MessageProvider";
import { useContext, useEffect, useState } from "react";

const Messages = () => {
  const { drawerOn } = useContext(MessageContext);
  const [rightSideClassName, setRightSideClassName] = useState("");

  useEffect(() => {
    // Function to update rightSideClassName based on window width
    const updateRightSideClassName = () => {
      if (typeof window !== "undefined") {
        if (drawerOn && window.innerWidth <= 768) {
          setRightSideClassName("hidden");
        } else {
          setRightSideClassName("rightside");
        }
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateRightSideClassName);

    // Initial setup on component mount
    updateRightSideClassName();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateRightSideClassName);
    };
  }, [drawerOn]);

  return (
    <div className="chatui">
      <div className="message-container">
        <Sidebar />
        <div className={rightSideClassName}>
          <MessagesSideSectionRightNavbar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Messages;
