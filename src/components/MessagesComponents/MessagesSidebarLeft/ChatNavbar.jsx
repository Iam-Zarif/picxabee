"use client";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const ChatNavbar = () => {
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logout();
  };
  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  return (
    <div className="navbar flex items-center bg-primary-color h-12 p-3 justify-between text-teal-50">
      <span className="logo font-medium mr-10">
        <img
          src="https://i.ibb.co/QC5cVgy/large-Ls-Kk-SEt-Ih-transformed-removebg-preview.png"
          className="object-cover"
          alt=""
        />
      </span>
      <div className="user flex items-center gap-x-10 mr-4">
        {user && (
          <div className="flex items-center gap-x-3">
            <img className="h-6 w-6 rounded-full object-cover text-black" src={user?.photoURL} alt="" />
            <span className="md:text-base text-gray-800 text-sm text-black">{user?.displayName}</span>
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
