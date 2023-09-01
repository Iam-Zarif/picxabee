/* eslint-disable jsx-a11y/alt-text */
import useUsers from "@/hooks/getUsers";
import React from "react";
import photo from "../../../public/fatin.PNG"
import Image from 'next/image';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Suggestions from "@/components/HomePage/RighSidebar/Suggestions";
const SearchPage = async ({ searchParams }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const users = await useUsers();
  console.log(users);
  const searchText = searchParams.userSearch;

  const filteredResults = users.filter((user) =>
    user.name.replace(/\s+/g, "").toLowerCase().includes(searchText)
  );
  console.log(searchParams.userSearch);
  console.log(filteredResults);
  return (
    <div className="flex justify-evenly">
      {filteredResults.length === 0 ? (
        "No User Found"
      ) : (
        <div className="flex flex-col w-2/5 gap-8">
          <p className="text-3xl font-semibold">People</p>
          
          {filteredResults.map((user, index) => (
            <div key={index} className="glass justify-evenly rounded-xl flex items-center px-5 py-2 gap-5">
              <Image src={photo} height={50} width={50} className="rounded-full"></Image>
             <div className="flex flex-col">
             <h2>Name: {user.name}</h2>
              <h2>Followers:{user?.followers}</h2>
             </div>
             <div className="flex gap-5">
              <button className="btn outline btn-sm">Follow <AiOutlinePlusCircle size={22}/></button>
              <button className="btn outline btn-sm">Message <HiOutlineChatAlt2 size={22}/></button>
             </div>
              {/* {user.profile_picture && (
      <Image src={user.profile_picture} width={40} height={40} />
    )} */}
            </div>
          ))}
        </div>
      )}
      <div className="mt-2">
        <Suggestions/>
      </div>
    </div>
    
  );
};

export default SearchPage;