"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";


const SearchSection = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const noSpaceText = searchText.replace(/\s+/g, "");
  console.log(noSpaceText);

  const handleSearch = (text) => {
    if (searchText === "") {
      router.push("/");
      return;
    }
    router.push(`/search?userSearch=${text}`);
  };

  return (
    <div >
      <div className="relative flex items-center">
 <div className="">
 <input
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    type="text"
    name="search"
    id="search"
    placeholder="Search"
    className="mx-10 pl-5 w-[200px] lg:w-fit mr-auto   rounded-2xl pr-2 py-2 shadow-sm shadow-primary-color shadow-slate-300 hover:shadow-md hover:shadow-slate-400  focus:border-transparent focus:outline-none"
  />
  
 </div>
 <BsSearch size={35}
  className="absolute cursor-pointer right-0 hover:bg-primary-color hover:text-white rounded-2xl px-1 py-2  transition-transform duration-500 hover:translate-x-1 transform scale-100 hover:scale-105"
  onClick={() => handleSearch(noSpaceText.toLowerCase())}
>
  Search
</BsSearch>

</div>
    </div>
  );
};

export default SearchSection;