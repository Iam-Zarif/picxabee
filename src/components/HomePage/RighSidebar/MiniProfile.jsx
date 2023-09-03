"use client";

// import avatar from "/public/jahid.PNG";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

const MiniProfile = () => {


    const { user, logout } = useAuth()
    console.log("user asee ", user)

    const handleLogOut = () => {
        logout();
        console.log("User logged out")
    };
    return (
        <div className="flex items-center justify-between ml-10">

            {user ?

                <Link href="/Profile"><Image src={user?.photoURL || "https://i.ibb.co/K5Xd8XR/bee1.png"} alt="Profile Pic" height={70} width={70} className="rounded-full p-[2px]" /></Link>
                : <><Image src={user?.photoURL || "https://i.ibb.co/K5Xd8XR/bee1.png"} alt="Profile Pic" height={70} width={70} className="rounded-full p-[2px]" /></>
            }

            {/* <Link href="/Profile"> <Image height={16} width={16} className="h-16 w-16 rounded-full p-[2px]" src={"https://i.ibb.co/K5Xd8XR/bee1.png"} alt="profile pic" /></Link> */}


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