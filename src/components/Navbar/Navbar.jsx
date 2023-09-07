"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Do not touch my Navbar. declared by the author - Zarif
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
// import 'animate.css';
import logo from "../../../public/swarm.png";
import fakeUserData from "./fakeUsers.json";

import {
  AiOutlineArrowRight,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { BsExclamationCircle, BsSearch } from "react-icons/bs";
import {
  HiOutlineChatAlt2,
  HiOutlinePaperAirplane,
  HiOutlineUserGroup,
} from "react-icons/hi";
// import component 👇
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { TbLayoutDashboard } from "react-icons/tb";
import SearchSection from "./SearchSection";
import NavFeedback from "./NavFeedback";
import AuthContext from "@/context/AuthContext";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";

const Navbar = () => {
  const [error, setError] = useState([]);
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logout()
      .then((data) => {
        // console.log(data)
        Swal.fire({
          icon: "error",
          title: "Caution",
          text: "You logged Out!",
          footer:
            '<p></p><u><a href="/auth/signin" >Login</u></a> for having access</p>',
        });
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  // console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const router = useRouter();
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
  const searchButtonRef = useRef(null);

  const [searchActive, setSearchActive] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const [autoSaveTimer, setAutoSaveTimer] = useState(null);

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

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Enter key was pressed, trigger the search button click event
      handleSearch();
    }
  };
  const navItems = (
    <>
      {user ? (
        <>
          <li>
            <Link href="/">
              <p data-tip="Home" className="flex items-center tooltip-bottom tooltip  hover:scale-125 hover:translate-x-1 transform transition-transform ">
                <GoHome className="text-2xl lg:text-2xl " />
              </p>
            </Link>
          </li>
        

          <li>
          {/* <li>
            <a className="hover:bg-transparent hover:scale-125 transform transition-transform ">
              <HiOutlineUserGroup className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
            </a>
          </li>

          <li> */}
            <a data-tip="Message" className="hover:bg-transparent tooltip-bottom tooltip hover:scale-125 transform transition-transform">
              <HiOutlineChatAlt2
                onClick={() => router.push("/messages")}
                className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform "
              />
            </a>
          </li>
          {/* <li className="hidden lg:relative lg:block">
            <a className="indicator hover:bg-transparent  hover:scale-125 transform transition-transform ">
              <span className="lg:absolute left-3 top-2 indicator-item badge text-white bg-primary-color  font-bold px-2">
                5
              </span>
              <IoNotificationsOutline className="rotate-45 text-xl lg:text-2xl hover:scale-125 transform transition-transform" />
            </a>
          </li> */}
            <li>
            <Link href={"/recycle"} data-tip="Recycle bin" className="hover:bg-transparent tooltip-bottom tooltip  hover:scale-125 transform transition-transform ">
              <RiDeleteBin5Line className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
            </Link>
          </li>
          <li>
            <a className=" hover:bg-transparent ">
              <Image
              
                src={user?.photoURL}
                width={32}
                height={32}
                className="rounded-full  hover:scale-125 hover:translate-x-1 transform transition-transform"
                onClick={toggleDrawer}
              ></Image>
              <></>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla "
              >
                <div className="dark:bg-black-bg-primary  min-h-screen">
                  <div className=" lg:text-lg flex flex-col gap-5 w-4/5 mx-auto pt-12   rounded-xl ">
                    <p className=" ">
                      <AiOutlineUser className="inline" />{" "}
                      <span>{user.displayName}</span>
                    </p>
                    <hr className="text-primary-color" />
                    <ThemeButton />
                    <Link href="/Profile">
                      <p className="  flex items-center group   hover:ml-2 transition-all">
                        <AiOutlineProfile
                          size={28}
                          className="inline mr-2 rounded-full "
                        />
                        Profile
                        {/* profile er vitore change password */}
                        <AiOutlineArrowRight className="  ml-2 opacity-0 group-hover:opacity-100 inline" />
                      </p>
                    </Link>
                    <p className=" flex items-center group  hover:ml-2 transition-all">
                      <IoSettingsOutline size={28} className="inline mr-2" />
                      Settings
                      <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                    </p>
                    <NavFeedback />
                    {/*  */}

                    <Link href="/dashboard">
                      <p className=" flex items-center group  hover:ml-2 transition-all">
                        <TbLayoutDashboard size={28} className="inline mr-2" />
                        Dashboard
                        <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                      </p>
                    </Link>

                    {/*  */}
                    <p
                      onClick={handleLogOut}
                      className=" flex items-center group  hover:ml-2 transition-all"
                    >
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
      ) : (
        <>
          <div>
            <Link
              className="text-white hover:text-primary-color hover:bg-white bg-primary-color  py-3 shadow-sm hover:shadow-primary-color font-semibold px-3 rounded-xl"
              href="/auth/signin"
            >
              Sign In
            </Link>
          </div>
        </>
      )}
    </>
  );

  return (
    <div className=" shadow-md shadow-slate-200 mt-3 lg:mt-0 z-50">
      {/* <Container> */}
      <div className="my-container fixed glass z-50 mr-auto left-0 shadow-md shadow-slate-300 w-full lg:navbar myNav bg-base-100  lg:pb-0  items-center ">
        <div className="flex lg:flex lg:gap-64 items-center content-center z-50 w-[100px] mx-auto">
          <div className="navbar-start group">
            {/* responsive dropdown */}

            {/* responsive dropdown */}
            <div className=" logo normal-case text-xl group-hover:animate-pulse lg:text-3xl hidden lg:block lg:mb-5">
              {" "}
              <Link href={"/"}>
                <span className="text-5xl">P</span>icxa
                <span className="bee  ">bee</span>
              </Link>
            </div>
          </div>
        </div>

        {/* search box */}
        <div className="navbar-end hidden lg:flex mx-auto ">
          <div className="hidden lg:block mr-12   mx-auto relative">
            <SearchSection />
          </div>
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
        className="fixed py-4 top-0 w-full left-0 z-50 bg-slate-100 pb-4 shadow-md shadow-slate-300 flex justify-between px-10 items-center lg:hidden"
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
                className=" input border-none shadow-sm shadow-black"
              />

              <input
                {...register("email", { required: true })}
                value={`Email: ` +user?.email}
                readOnly
                className="input border-none shadow-sm shadow-black"
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
              type="submit"
              className="block mt-5 shadow-sm dark:bg-gray  shadow-black rounded-md px-3 py-1 btn-primary dark:hover:btn-primary font-bold"
            />
           <div > <p
              
              className=" text-white bg-primary-color  text-center  rounded-xl  mt-2 dark:bg-white dark:text-black"
            >
              {error}
            </p>
</div>
            <div className="modal-action">
              <p>Press ESC to continue</p>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
