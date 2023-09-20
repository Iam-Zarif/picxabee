"use client";
import DashboardThemeButton from "@/components/Dashboard/DashboardThemeButton/DashboardThemeButton";
import AuthContext from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const MessagesSideSectionRightNavbar = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleLogOut = () => {
    logout();
    router.push("/")
  };
  const handleSignIn = () => {
    router.push("/auth/signin");
  };


  return (
    <>
    {/* I used dark: for dark theme - Zarif */}
      <div className="bg-primary-color w-full h-[70px] dark:bg-black-bg-primary space-y-1 flex items-center justify-between">
        <p className="font-semibold px-3 text-sm md:text-base">
          {data.user?.displayName}
        </p>
        <div className="absolute right-5 space-x-4 flex items-center">
        <div className="inline-block md:hidden">
          {user ? (
            <button className="text-red-500 font-semibold md:text-base text-sm cursor-pointer" onClick={handleLogOut}>
              logout
            </button>
          ) : (
            <button className="text-green-500 font-semibold md:text-base text-sm cursor-pointer" onClick={handleSignIn}>
              Sign In
            </button>
          )}
        </div>
          <DashboardThemeButton/>
        </div>
      </div>
    </>
  );
};

export default MessagesSideSectionRightNavbar;
