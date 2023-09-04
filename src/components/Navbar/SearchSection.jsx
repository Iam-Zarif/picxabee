"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";


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
    className="mx-10 pl-12 w-[200px] lg:w-fit rounded-2xl pr-2 py-3 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
  />
  
 </div>
 <button
  className="text-sm absolute right-10 search-primary px-4 hover:text-white py-3 font-bold rounded-xl border h-full transition-transform duration-300 transform scale-100 hover:scale-105"
  onClick={() => handleSearch(noSpaceText.toLowerCase())}
>
  Search
</button>

</div>
    </div>
  );
};

export default SearchSection;