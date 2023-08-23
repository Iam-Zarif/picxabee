"use client";
import React, { useEffect, useRef, useState } from "react";
import fakeUserData from "./fakeUsers.json";
import { GoHome } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import logo from "../../../../public/swarm.png";
import { GrSend } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

import { HiOutlineUserGroup } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineArrowRight,
  AiOutlineProfile,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from "react-icons/ai";
import Container from "./Container";
// import component 👇
import Image from "next/image";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
const Navbar = () => {
  //
  useEffect(() => {
    fetch("./fakeUsers.json") // Replace with the actual path
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  //
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
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navbarRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Filter the data based on the search query
    const filteredResults = fakeUserData.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchQuery]);
  //   const handleSearch = () => {
  // 	if (searchQuery.trim() === '') {
  // 	  setSearchResults([]);
  // 	   // Clear results if the search query is empty
  // 	  return;
  // 	}

  // 	// Filter the user data based on the search query
  // 	const filteredUsers = users.filter((user) =>
  // 	  user.name.toLowerCase().includes(searchQuery.toLowerCase())
  // 	);

  // 	setSearchResults(filteredUsers);
  //   };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      // Clear results if the search query is empty
      return;
    }

    // Filter the user data based on the search query
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredUsers);

    // Open the modal here
	const modal = document.getElementById('my_modal_4');
	if (modal) {
	  modal.showModal();
	  console.log('Modal is being shown.');
	}
  };
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Enter key was pressed, trigger the search button click event
      searchButtonRef.current.click();
    }
  };
  const navItems = (
    <>
      <li>
        <a className="flex items-center   hover:scale-125 hover:translate-x-1 transform transition-transform ">
          <GoHome className="text-2xl lg:text-2xl " />
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent hover:scale-125 transform transition-transform ">
          <HiOutlineUserGroup className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent  hover:scale-125 transform transition-transform">
          <AiOutlinePlusCircle className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform " />
        </a>
      </li>
      <li className="hidden lg:block">
        <a className="indicator hover:bg-transparent  hover:scale-125 transform transition-transform">
          <span className="indicator-item badge bg-lime-500 text-white font-bold px-3">
            5
          </span>
          <GrSend className=" text-xl lg:text-2xl hover:scale-125 transform transition-transform  " />
        </a>
      </li>

      <li>
        <a className="hover:bg-transparent  hover:scale-125 transform transition-transform">
          <AiOutlineHeart className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform " />
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent  ">
          <AiOutlineUser
            className="text-2xl lg:text-2xl hover:scale-125 hover:translate-x-1 transform transition-transform"
            onClick={toggleDrawer}
          >
            Show
          </AiOutlineUser>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla "
          >
            <div>
              <div className="lg:text-lg flex flex-col gap-5 w-4/5 mx-auto mt-12   rounded-xl ">
                <p className=" ">
                  <AiOutlineUser className="inline" /> User Full Name
                </p>
                <div className="divider"></div>
                <p className="  flex items-center group   hover:ml-2 transition-all">
                  <AiOutlineProfile
                    size={28}
                    className="inline mr-2 rounded-full "
                  />
                  Profile
                  {/* profile er vitore change password */}
                  <AiOutlineArrowRight className="  ml-2 opacity-0 group-hover:opacity-100 inline" />
                </p>
                <p className=" flex items-center group  hover:ml-2 transition-all">
                  <IoSettingsOutline size={28} className="inline mr-2" />
                  Settings
                  <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                </p>
                <p className=" flex items-center group  hover:ml-2 transition-all">
                  <AiOutlineQuestionCircle size={28} className="inline mr-2" />
                  Give Feedback
                  <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                </p>
                <p className=" flex items-center group  hover:ml-2 transition-all">
                  <LuLogOut size={28} className="inline mr-2" />
                  Log Out
                  <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                </p>
                <div className="divider"></div>
              </div>
            </div>
          </Drawer>
        </a>
      </li>
    </>
  );

  return (
    <div className=" shadow-md shadow-slate-200 mt-3 lg:mt-0">
      {/* <Container> */}
      <div className="fixed  mr-auto left-0 shadow-md shadow-slate-300 w-full lg:navbar myNav bg-base-100  lg:pb-0  items-center ">
        <div className="flex lg:flex lg:gap-64 items-center content-center z-50 w-[100px] mx-auto">
          <div className="navbar-start">
            {/* responsive dropdown */}

            {/* responsive dropdown */}
            <a className=" logo normal-case text-xl lg:text-3xl hidden lg:block lg:mb-5">
              {" "}
              <span className="text-5xl">P</span>icxa
              <span className="  ">bee</span>
            </a>
          </div>

          {/* search box */}

          <div className="navbar-center flex relative mx-auto">
            {/* <input
							onKeyPress={handleKeyPress}
								 onChange={(e) => {
									setSearchActive(e.target.value.length > 0);
								}}
								type="text"
								name="search"
								id="search"
								placeholder="Search"
								className="mx-10 hidden  lg:pl-12 pl-2 w-[200px] lg:w-full  lg:block  lg:ml-0 rounded-2xl  pr-2 py-2 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
							/> */}
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update this line
              onKeyPress={handleKeyPress}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="mx-10 hidden lg:pl-12 pl-2 w-[200px] lg:w-full  lg:block  lg:ml-0 rounded-2xl  pr-2 py-2 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute lg:left-5 hidden lg:block top-2 text-gray-500 z-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {/* {searchActive && (
  <button
    className="btn"
    onClick={handleSearch} 
  >
    Search
  </button>
)} */}

            <button className="btn" onClick={handleSearch}>
              Search
            </button>

            
          </div>
        </div>

        {/* search box */}
        <div className="navbar-end hidden lg:flex mx-auto ">
          <ul className="menu menu-horizontal px-1 ">
            {navItems}
            {/* <AiOutlineUser  className='text-xl  lg:text-2xl'/> */}
          </ul>
        </div>
      </div>
      {/* </Container> */}
      <ul className=" py-5 z-20 px-1 lg:hidden flex justify-center items-end absolute bottom-8 w-full ">
        <div className="fixed  bg-slate-200 bottom-0  py-4 px-5  w-11/12 flex gap-14 items-center justify-center content-center">
          {navItems}
        </div>
        {/* <AiOutlineUser className='text-xl lg:text-2xl' /> */}
      </ul>

      <div
        className="fixed py-4 top-0 w-full left-0 bg-slate-100 pb-4 shadow-md shadow-slate-300 flex justify-between px-10 items-center lg:hidden"
        ref={navbarRef}
      >
        {/* Logo */}
        <div>
          <Image src={logo} alt="" className="w-12" />
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
        <div
          data-aos="fade-left"
          className="indicator relative flex gap-6 lg:gap-8"
        >
          <BsSearch
            size={24}
            className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
            onClick={() => setSearchActive(true)}
          />
          <GrSend
            size={28}
            className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
          />
          <span
            className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
          >
            <span className="mr-2 indicator-item badge bg-lime-500 text-white font-bold px-3 py-3">
              5
            </span>
          </span>
        </div>

        {/* Search Input */}
        {searchActive && (
          <div className="flex py-2">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 w-full rounded-2xl py-1 shadow-sm shadow-slate-300 m border focus:border-transparent focus:outline-none"
            />
          </div>
        )}
      </div>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
			<p className="text-lime-500 text-2xl font-semibold"> The Users</p>
         
            {searchResults.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
         
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn bg-white">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Navbar;
