"use client";
import DashboardThemeButton from "@/components/Dashboard/DashboardThemeButton/DashboardThemeButton";
import ThemeButton from "@/components/Navbar/ThemeButton";
import { ChatContext } from "@/context/ChatContext";
import { useContext } from "react";

const MessagesSideSectionRightNavbar = () => {
  const { data } = useContext(ChatContext);
  return (
    <>
    {/* I used dark: for dark theme - Zarif */}
      <div className="bg-primary-color w-full h-[70px] dark:bg-black-bg-primary space-y-1 flex items-center justify-between">
        <p className="font-semibold px-3 text-sm md:text-base">
          {data.user?.displayName}
        </p>
        <div className="absolute right-5 ">
          <DashboardThemeButton/>
        </div>
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
