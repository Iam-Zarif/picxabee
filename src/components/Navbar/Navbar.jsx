"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/swarm.png";
import fakeUserData from "./fakeUsers.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsSearch } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Image from "next/image";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import SearchSection from "./SearchSection";
import NavItems from "./NavItems";
import useAuth from "@/hooks/useAuth";
import FeedbackForm from "./FeedbackForm";
import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAuth();
  const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navbarRef = useRef(null);

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredResults = fakeUserData.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchQuery]);

 
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
    <div className=" shadow-md shadow-slate-200 mt-3 lg:mt-0 z-50">
      {/* <Container> */}
      <div className="my-container fixed  lg:glass bg-white z-50 mr-auto left-0 shadow-md shadow-slate-300 w-full lg:navbar myNav  lg:pb-0  items-center ">
        <div className="flex lg:flex lg:gap-64 items-center content-center z-50 w-[100px] mx-auto">
          <div className="navbar-start group flex items-center">
            <div className=" logo normal-case text-xl group-hover:animate-pulse lg:text-3xl hidden lg:block lg:mb-5">
             
              <Link href={"/"}>
                <span className="text-5xl">P</span>icxa
                <span className="bee  ">bee</span>
              </Link>
            </div>
          
            
          </div>
        </div>
        <div className="navbar-end hidden lg:flex mx-auto ">
        
          <div className="hidden lg:block mr-12   mx-auto relative">
            <SearchSection />
            {/* <SearchSuggest/> */}
          </div>
          <ul className="menu menu-horizontal px-1 flex items-center">
            <NavItems />
            {/* <AiOutlineUser  className='text-xl  lg:text-2xl'/> */}
          </ul>
        </div>
      </div>
      
      <ul className=" py-5 z-20 px-1 lg:hidden flex justify-center items-end absolute bottom-8 w-full ">
        <div className="fixed  bg-slate-200 bottom-0 bg-white  dark:bg-black py-4 px-5  w-11/12 flex gap-14 items-center justify-center content-center">
          <NavItems />
        </div>
        {/* <AiOutlineUser className='text-xl lg:text-2xl' /> */}
      </ul>

      <div
      
        className="fixed py-4 top-0 w-full left-0 z-50 dark:bg-black bg-white pb-4 shadow-md shadow-slate-300 flex justify-between px-10 items-center lg:hidden"
        ref={navbarRef}
      >
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" className="w-12" />
        </div>
        <div
          className={`logo text-xl lg:hidden ${
            searchActive ? "hidden" : "visible"
          }`}
        >
          <span className="text-2xl pl-5">P</span>icxa
          <span className="">bee</span>
        </div>

        {/* Search and Send Icons */}
      {
        user && <>
          <div
          data-aos="fade-left"
          className="indicator relative flex gap-6 lg:gap-8"
        >
          <BsSearch
            size={24}
            className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
            onClick={() => setSearchActive(true)}
          />
          <HiOutlinePaperAirplane
            size={28}
            className={`cursor-pointer rotate-45 ${
              searchActive ? "hidden" : "visible"
            }`}
          />
          <span
            className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
          >
            <span className="mr-2 indicator-item badge bg-lime-500 text-white font-bold px-3 py-3">
              5
            </span>
          </span>
        </div></>
      }

        {/* Search Input */}
        {searchActive && (
          <div className="flex py-2">
            <input
              onKeyPress={handleKeyPress}
              value={searchText}
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              placeholder="Search..."
              className=" pl-3 w-full rounded-2xl py-1 shadow-sm shadow-slate-300 m border focus:border-transparent focus:outline-none"
            />
          </div>
        )}
      </div>
      <FeedbackForm />
      <ToastContainer />
      {/* </Container> */}
    </div>
  );
};

export default Navbar;
