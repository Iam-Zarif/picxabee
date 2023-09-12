"use client";
import React, { useState } from "react";
import SearchSection from "./SearchSection";

const SearchSuggest = ({ results }) => {
  return (
    <>
      {results.map((result) => {
        console.log(result.name);
      })}

<div>
        {results.map((result) => (
          <li className="list-none bg-light-gray  lg:w-64  flex flex-col   p-1" key={result._id}>
            <p className=" "> {result.name}</p>
            <hr className="text-gray"/>
          </li>
        ))}
      </div>
    </>
  );
};

export default SearchSuggest;
