"use client";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Link from 'next/link';
import Image from "next/image"
const SearchSuggest = ({ results }) => {
   
  return (
    <>
      {/* {results.map((result) => {
        console.log(result.profile_picture);
      })} */}

<div className=" overflow-scroll overflow-x-hidden">
        {results.slice(0, 6).map((result) => (
         <ul  key={result._id} className=""> <li className="hover:bg-white list-none bg-light-gray  lg:w-72  flex flex-col gap-y-2  p-1">
         <div className="flex  justify-between">
        <Link href={`/userProfile/${result?._id}`}>
        <div className="flex flex-row-reverse">
         <p className="pl-2 dark:text-black"> {result.name}</p>
         <Image src={result.profile_picture} height={10} width={10}  className="w-6 h-6 rounded-full" alt="profile picture" />
         </div></Link>
         <TiDeleteOutline className="cursor-pointer hover:scale-125 dark:text-black" size={25}/>
         </div>
         <hr className="text-gray"/>
       </li></ul>
        ))}
      </div>
    </>
  );
};

export default SearchSuggest;
