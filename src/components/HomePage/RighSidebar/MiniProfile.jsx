import Image from "next/image";
import avatar from "/public/admin.jpg";

const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
          <Image className="w-16 h-16 rounded-full p-[2px]" src={avatar} alt="" />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">Hridoy Hoque</h2>
                <h2 className="text-sm text-gray-400">DevDynamos</h2>
            </div>
            <button className="text-red-400 text-sm font-semibold">Sign Out</button>
        </div>
    );
};

export default MiniProfile;