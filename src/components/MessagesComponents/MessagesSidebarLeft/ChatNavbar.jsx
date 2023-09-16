"use client";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ChatNavbar = () => {
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logout();
    router.push("/")
  };
  const handleSignIn = () => {
    router.push("/auth/signin");
  };
  const handleGoToHomePage =()=>{
    router.push("/")
  }

  return (
    <div className="navbar flex items-center bg-primary-color h-12 p-3 justify-between text-teal-50">
     <button onClick={handleGoToHomePage} class="rounded-full w-16 h-16 flex items-center justify-center focus:outline-none">
    <FaArrowLeft />
</button>
      <div className="user flex items-center gap-x-10 mr-4">
        {user && (
          <div className="flex items-center gap-x-3">
            <img className="h-6 w-6 rounded-full object-cover text-black" src={user?.photoURL} alt="" />
            <span className="md:text-base text-gray-800 text-sm text-black truncate">{user?.displayName}</span>
          </div>
        )}
        <div>
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
      </div>
    </div>
  );
};

export default ChatNavbar;
