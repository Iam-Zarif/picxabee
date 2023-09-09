"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Do not touch my Navbar. declared by the author - Zarif
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/swarm.png";
import fakeUserData from "./fakeUsers.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsExclamationCircle, BsSearch } from "react-icons/bs";
import {
  HiOutlinePaperAirplane,
} from "react-icons/hi";
// import component 👇
import Image from "next/image";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchSection from "./SearchSection";
import NavItems from "./NavItems";
import useAuth from "@/hooks/useAuth";


const Navbar = () => {
  // const loggedInUer = LoggedInUser();
  // console.log(loggedInUer);
  // console.log("Log user is ", loggedInUer);
  const [success, setError] = useState([]);
  
  const { user, logout } = useAuth();
  console.log(user);
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const notify = (feed) =>{
    return toast(feed)
  }
  const onSubmit = async (data) => {
    const feedback = {
      author: {
        profile_picture: user?.photoURL,
        email: user?.email,
        name: user?.displayName,
      },
      feedback: data.feedback,
    };

    try {
      const res = await fetch("api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      if (res.ok) {
        
        // console.log('Feedback submitted successfully.');
      } else {
        console.error("Error submitting feedback.");

      }
      const { msg } = await res.json();
      setError(msg);
      setTimeout(() => {
        setError(false); // Hide the message after 2 seconds
      }, 2000);
     reset();
     notify("Submitted feedback");
    } catch (error) {
      console.error("An error occurred:", error);
      
    }
   
  };
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

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredUsers);
  };

 
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Enter key was pressed, trigger the search button click event
      handleSearch();
    }
  };

  return (
    <div className=" shadow-md shadow-slate-200 mt-3 lg:mt-0 z-50">
      {/* <Container> */}
      <div className="my-container fixed  lg:glass bg-white z-50 mr-auto left-0 shadow-md shadow-slate-300 w-full lg:navbar myNav  lg:pb-0  items-center ">
        <div className="flex lg:flex lg:gap-64 items-center content-center z-50 w-[100px] mx-auto">
          <div className="navbar-start group ">
            <div className=" logo normal-case text-xl group-hover:animate-pulse lg:text-3xl hidden lg:block lg:mb-5">
              {" "}
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
          </div>
          <ul className="menu menu-horizontal px-1 ">
           <NavItems/>
            {/* <AiOutlineUser  className='text-xl  lg:text-2xl'/> */}
          </ul>
        </div>
      </div>
      {/* </Container> */}
      <ul className=" py-5 z-20 px-1 lg:hidden flex justify-center items-end absolute bottom-8 w-full ">
        <div className="fixed  bg-slate-200 bottom-0 bg-white  dark:bg-black py-4 px-5  w-11/12 flex gap-14 items-center justify-center content-center">
          <NavItems/>
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
        </div>

        {/* Search Input */}
        {searchActive && (
          <div className="flex py-2">
            <input
              onKeyPress={handleKeyPress}
              type="text"
              placeholder="Search..."
              className=" pl-3 w-full rounded-2xl py-1 shadow-sm shadow-slate-300 m border focus:border-transparent focus:outline-none"
            />
          </div>
        )}
      </div>
      {/* You can open the modal using ID.showModal() method */}
      <div className="flex gap-5">
        <dialog id="my_modal_1" className="modal px-8 lg:px-0 z-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="dark:bg-black-bg-primary modal-box bg-white glass w-full"
          >
            <h1 className="text-center text-xl font-bold">users Feedback</h1>
            <div className="flex flex-col gap-3 lg:mt-8 mt-4">
              <input
                {...register("name", { required: true })}
                value={`name: ` + user?.displayName}
                readOnly
                className=" input border-none shadow-sm shadow-black cursor-default"
              />

              <input
                {...register("email", { required: true })}
                value={`Email: ` +user?.email}
                readOnly
                className="input border-none shadow-sm shadow-black cursor-default"
              />

              <textarea
                {...register("feedback", { required: true })}
                placeholder="Give your feedback"
                className="textarea w-full lg:h-52 h-36 border-none  shadow-sm shadow-black"
              />
              {errors.feedback && (
                <span className="text-red flex gap-2 items-center">
                  <BsExclamationCircle /> Give your feedback
                </span>
              )}
            </div >
            <input
            onClick={notify}
              type="submit"
              className="block mt-5 shadow-sm dark:bg-gray    shadow-black rounded-md px-3 py-1 btn-primary dark:hover:btn-primary font-bold"
            />
           <div > 

</div>
            <div className="modal-action">
              <p>Press ESC to continue</p>
            </div>
          </form>
        </dialog>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
