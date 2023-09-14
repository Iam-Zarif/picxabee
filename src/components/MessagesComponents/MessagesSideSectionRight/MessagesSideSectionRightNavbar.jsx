"use client";
import { ChatContext } from "@/context/ChatContext";
import { MessageContext } from "@/provider/MessageProvider";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";

const MessagesSideSectionRightNavbar = () => {
  const {drawerOn, setDrawerOn} = useContext(MessageContext);
  const { data } = useContext(ChatContext);
  // console.log(data)
  const handleOpenCloseDrawer =()=>{
    setDrawerOn(true);
  }
  return (
    <>
      <div className="bg-primary-color w-full h-[70px] space-y-1 flex items-center justify-between">
        <p className="font-semibold px-3 text-sm md:text-base">
          {data.user?.displayName}
        </p>
        {!drawerOn && <button
          onClick={handleOpenCloseDrawer}
          class="rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2"
        >
          <FaArrowLeft />
        </button>}
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
