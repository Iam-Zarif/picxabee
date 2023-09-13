"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchSuggest from "./SearchSuggest";

const SearchSection = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const noSpaceText = searchText.replace(/\s+/g, "");
  // console.log(noSpaceText);
  const fetchData = (value) => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        const results = data.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        // console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setSearchText(value);
    fetchData(value);
  };

  const handleSearch = (text) => {
    if (searchText === "") {
      router.push("/");
      return;
    }
    router.push(`/search?userSearch=${text}`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchText);
    }
  };
  return (
    <>
      {user ? (
        <>
          <div className="group relative flex items-center">
            <div className="flex">
              <div className="relative flex flex-col items-center">
               <div className=""> <input
             onKeyPress={handleKeyPress}
                  value={searchText}
                  onChange={(e) => handleChange(e.target.value)}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="mx-10 pl-5 w-[200px] lg:w-fit mr-auto   rounded-2xl pr-2 py-2 border-1 border border-gray shadow-slate-300 hover:shadow-md hover:shadow-slate-400  focus:border-transparent focus:outline-primary-color "
                />
                
                </div>
                
                 
                <div className="absolute lg:top-11  lg:right-0">
                <SearchSuggest results={results}/>
                </div>
              </div>
              <BsSearch
                size={35}
                className="absolute hover:scale-125  transform transition-transform cursor-pointer top-1 right-1  group-hover:text-primary-color rounded-2xl px-1 py-2    "
                onClick={() => handleSearch(noSpaceText.toLowerCase())}
              >
                Search
              </BsSearch>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchSection;
