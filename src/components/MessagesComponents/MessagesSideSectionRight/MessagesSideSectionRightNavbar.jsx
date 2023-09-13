"use client"
import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

const MessagesSideSectionRightNavbar = () => {
  const {data} = useContext(ChatContext);
  // console.log(data)
  return (
    <>
      <div className="bg-primary-color w-full h-[70px] space-y-1">
        <p className="font-semibold px-3 mt-2 text-lg">{data.user?.displayName}</p>
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
