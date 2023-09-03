"use client";
import Image from "next/image";
import avatar from "/public/jahid.PNG";
import Link from "next/link";
// import AuthContext from "@/context/AuthContext";
// import { useContext } from "react";
import useAuth from "@/hooks/useAuth";

const MiniProfile = () => {

    // const { user, logout } = useContext(AuthContext);
    const { createUser, updateUser, user, setLoading, logout } = useAuth()
    console.log("user asee 14", user)

    const handleLogOut = () => {
        logout();
        console.log("User logged out")
    };
    return (
        <div className="flex items-center justify-between ml-10">
      <div>

      <Link href="/Profile"> <Image height={16} width={16} className="h-16 w-16 rounded-full p-[2px]" src={avatar} alt="" /></Link>
      {/* {
                user && (
                    <>  <Link href="/Profile"> <Image height={16} width={16} className="h-16 w-16 rounded-full p-[2px]" src={user?.photoURL} alt="" /></Link></>
                )
            } */}

            {/* {
                !user && (
                    <>  <Link href="/Profile"> <Image height={16} width={16} className=" rounded-full p-[2px]" src={avatar} alt="" /></Link></>
                )
            } */}
      </div>

            {/* {  user ? <>  <Link href="/Profile"> <Image className="w-16 h-16 rounded-full p-[2px]" src={user?.photoURL} alt="" /></Link></> : <>  <Link href="/Profile"> <Image className="w-16 h-16 rounded-full p-[2px]" src={avatar} alt="" /></Link></>
          
         } */}

            <div className="flex-1 mx-4">
              {!user ? <h2 className="font-bold">Jahid Howladar</h2> : <h2 className="font-bold">{user?.displayName}</h2>}
                <h2 className="text-sm text-gray-400">DevDynamos</h2>
            </div>
            {
                user ? <> <button onClick={handleLogOut} className="text-red-400 text-sm font-semibold">Sign Out</button></> :
                    <> <Link href="/auth/signin"><button className="text-black text-sm font-semibold">Sign In</button></Link></>
            }
        </div>
    );
};

export default MiniProfile;