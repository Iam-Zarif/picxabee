"use client";
import Chat from "@/components/MessagesComponents/MessagesSideSectionRight/Chat";
import MessagesSideSectionRightNavbar from "@/components/MessagesComponents/MessagesSideSectionRight/MessagesSideSectionRightNavbar";
import Sidebar from "@/components/MessagesComponents/MessagesSidebarLeft/Sidebar";
import { MessageContext } from "@/provider/MessageProvider";
import { useContext, useState } from "react";

const Messages = () => {
  const { drawerOn, setDrawerOn } = useContext(MessageContext);
  //   const [rightSideClassName, setRightSideClassName] = useState("rightside");
  const [showRightSide, setShowRightSide] = useState(true);


  // With normal if-else ....................................................................................

  let rightSideClassName;

  if (drawerOn && window.innerWidth <= 768) {
    rightSideClassName = "hidden"
  } else {
    rightSideClassName = "rightside"
  }

  //  with useEffect .............................................................................................
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setRightSideClassName("hidden");
    } else {
      setRightSideClassName("rightside");
    }
  }, [window.innerWidth]);

  return (
    <div className="chatui">
      <div className="message-container">
        <Sidebar />
        {
          <div className={rightSideClassName}>
            <MessagesSideSectionRightNavbar />
            <Chat />
          </div>
        }
      </div>
    </div>
  );
};

export default Messages;
