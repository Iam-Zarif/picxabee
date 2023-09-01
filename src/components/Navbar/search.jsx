"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../Navbar/Navbar.module.css"
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
      <div className=" flex items-center">
 <div>
 <input
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    type="text"
    name="search"
    id="search"
    placeholder="Search"
    className="mx-10 pl-12 w-[200px] lg:w-full rounded-2xl pr-2 py-3 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
  />
  
 </div>
      <button className="btn  outline" onClick={()=>handleSearch(noSpaceText.toLowerCase())}>
        Search
      </button>
</div>
    </div>
  );
};

export default SearchSection;