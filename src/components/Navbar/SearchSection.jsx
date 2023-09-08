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
    <div>
      <div className="group relative flex items-center">
        <div className="">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="mx-10 pl-5 w-[200px] lg:w-fit mr-auto   rounded-2xl pr-2 py-2 border-1 border border-gray shadow-slate-300 hover:shadow-md hover:shadow-slate-400  focus:border-transparent focus:outline-none"
          />
        </div>
        <BsSearch
          size={35}
          className="absolute cursor-pointer right-1  group-hover:text-primary-color rounded-2xl px-1 py-2    "
          onClick={() => handleSearch(noSpaceText.toLowerCase())}
        >
          Search
        </BsSearch>
      </div>
    </div>
  );
};

export default SearchSection;
