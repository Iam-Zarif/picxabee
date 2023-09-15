"use client";
import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

const MessagesSideSectionRightNavbar = () => {
  const { data } = useContext(ChatContext);
  return (
    <>
      <div className="bg-primary-color w-full h-[70px] space-y-1 flex items-center justify-between">
        <p className="font-semibold px-3 text-sm md:text-base">
          {data.user?.displayName}
        </p>
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
