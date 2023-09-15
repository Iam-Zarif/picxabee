"use client";
import Chat from "@/components/MessagesComponents/MessagesSideSectionRight/Chat";
import MessagesSideSectionRightNavbar from "@/components/MessagesComponents/MessagesSideSectionRight/MessagesSideSectionRightNavbar";
import Sidebar from "@/components/MessagesComponents/MessagesSidebarLeft/Sidebar";

const Messages = () => {
  return (
    <div className="chatui">
      <div className="message-container">
        <Sidebar />
        <div className="rightside">
          <MessagesSideSectionRightNavbar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Messages;
