"use client"
import { ChatContext } from "@/contexts/ChatContext";
import { useContext } from "react";

const MessagesSideSectionRightNavbar = () => {
  const {data} = useContext(ChatContext);
  return (
    <>
      <div className="bg-[#3c3b3b] w-full h-[70px] space-y-1">
        <p className="font-semibold px-3 mt-2 text-lg">{data.user?.displayName}</p>
        {/* <p className="px-3 text-sm mb-[2px]">active eto second ago.</p> */}
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
