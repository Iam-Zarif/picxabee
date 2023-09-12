"use client";
import React, { useState } from "react";
import SearchSection from "./SearchSection";
import { TiDeleteOutline } from "react-icons/ti";
import useAuth from "@/hooks/useAuth";

const SearchSuggest = ({ results }) => {
   
  return (
    <>
      {/* {results.map((result) => {
        console.log(result.profile_picture);
      })} */}

<div className="lg:h-60 overflow-scroll overflow-x-hidden">
        {results.map((result) => (
         <ul  key={result._id} className=""> <li className="hover:bg-white list-none bg-light-gray  lg:w-72  flex flex-col gap-y-2  p-1">
         <div className="flex  justify-between">
         <div className="flex flex-row-reverse">
         <p className="pl-2 "> {result.name}</p>
         <img src={result.profile_picture} className="w-6 h-6 rounded-full" alt="" />
         </div>
         <TiDeleteOutline className="hover:scale-125" size={25}/>
         </div>
         <hr className="text-gray"/>
       </li></ul>
        ))}
      </div>
    </>
  );
};

export default SearchSuggest;
