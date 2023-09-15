"use client";
import React from "react";
import { GoHome } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";

import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineArrowRight,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { BsArrowLeftCircle, BsBookmarkCheck } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiDonateBlood } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import DashboardThemeButton from "../Dashboard/DashboardThemeButton/DashboardThemeButton";

import useCurrentUser from "@/hooks/useCurrentUser";
import { MdOutlineLockReset } from "react-icons/md";
import NavFeedback from "./NavFeedback";



const NavItems = () => {
  const { user, logout } = useAuth();

  const { loggedInUser } = useCurrentUser();

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
        console.log(err);
      });
  };
  const toggleDrawer = async () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawer1 = async () => {
    setIsOpen1((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const pathname = usePathname()
  const router = useRouter();
  return (
    <>

      {user ? (
        <>
          <ul>

          </ul>



          <li>
            <div className={pathname === '/' ? 'active' : ''}>
              <Link

                href="/"
                className=" flex items-center tooltip-bottom tooltip  hover:scale-125 hover:translate-x-1 transform transition-transform"
              >
                <p data-tip="Home">
                  <GoHome className="text-2xl lg:text-2xl " />
                </p>
              </Link>
            </div>
          </li>
{/* Rezon msg */}

          <li>
            <a
              data-tip="Message"
              className="hover:bg-transparent tooltip-bottom tooltip hover:scale-125 transform transition-transform"
            >
              <HiOutlineChatAlt2
                onClick={() => router.push("/messages")}
                className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform "
              />
            </a>
          </li>
          {/* Rezon msg */}
          {/* <li className="hidden lg:relative lg:block">
            <a className="indicator hover:bg-transparent  hover:scale-125 transform transition-transform ">
              <span className="lg:absolute left-3 top-2 indicator-item badge text-white bg-primary-color  font-bold px-2">
                5
              </span>
              <IoNotificationsOutline className="rotate-45 text-xl lg:text-2xl hover:scale-125 transform transition-transform" />
            </a>
          </li> */}
          <div className={pathname === '/recycle' ? 'active' : ''}>
            <li>
              <Link
                href={"/recycle"}
                data-tip="Recycle bin"
                className=" flex items-center tooltip-bottom tooltip  hover:scale-125 hover:translate-x-1 transform transition-transform"
              >
                <RiDeleteBin5Line className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
              </Link>
            </li>
          </div>
          <li>
            <a className=" hover:bg-transparent ">
              <Image
                alt="User image"
                src={user?.photoURL}
                width={35}
                height={35}
                className="h-8 w-8 rounded-full  hover:scale-125 border-2 dark:border-gray border-primary-color transform transition-transform"
                onClick={toggleDrawer}
              ></Image>
              <></>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla dark:bg-black"
              >
                <div className="dark:bg-black-bg-primary  min-h-screen">
                  <div className=" lg:text-lg flex flex-col gap-5 w-4/5 mx-auto pt-24 lg:pt-12   rounded-xl ">
                    <p className=" ">
                      <AiOutlineUser className="inline" />{" "}
                      <span>{user.displayName}</span>
                    </p>
                    <hr className="text-primary-color" />

                    <div className={pathname === '/Profile' ? 'sideActive' : ''}>
                      <Link href="/Profile" className="">
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
                    </div>
                    <div className={pathname === '/settings' ? 'sideActive' : ''}>
                      <p
                        onClick={toggleDrawer1}
                        className=" flex items-center group cursor-pointer  hover:ml-2 transition-all"
                      >
                        <IoSettingsOutline size={28} className="inline mr-2" />
                        Settings
                        <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                      </p>
                    </div>
                    {/*  */}
                    <Drawer
                      open={isOpen1}
                      onClose={toggleDrawer1}
                      direction="right"
                      className="bla bla bla dark:bg-black  "
                    >
                      <div className="dark:bg-black-bg-primary lg:pl-2 pt-16 lg:pt-0  min-h-screen ">
                        <p onClick={toggleDrawer1} className="pt-8 ">
                          <BsArrowLeftCircle
                            size={26}
                            className="hover:scale-110 ml-4"
                          />
                        </p>
                        <div className="lg:text-lg lg:pl-2 flex flex-col  gap-5 w-11/12 mx-auto">
                          <div className="">
                            {" "}
                            <ThemeButton />
                          </div>

                          <p className=" flex items-center group  hover:ml-2 transition-all">
                            <MdOutlineLockReset
                              size={28}
                              className="inline mr-2"
                            />
                            <Link href='/auth/resetPassword'>
                              Reset Password
                            </Link>
                            <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                          </p>
                        </div>
                      </div>
                    </Drawer>
                    {/*  */}
                    <div className={pathname === '/bookmark' ? 'sideActive' : ''}>
                      <Link href="/bookmark">
                        {" "}
                        <p className=" flex items-center group  hover:ml-2 transition-all">
                          <BsBookmarkCheck size={28} className="inline mr-2" />
                          Bookmarks
                          <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                        </p>
                      </Link>
                    </div>
                    <div>
                      {loggedInUser?.role === "admin" ? (
                        <>
                          <div className={pathname === '/dashboard' ? 'sideActive' : ''}>
                            <Link href="/dashboard">
                              <p className=" flex items-center group  hover:ml-2 transition-all">
                                <TbLayoutDashboard
                                  size={28}
                                  className="inline mr-2"
                                />
                                Dashboard
                                <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                              </p>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                         <NavFeedback/>
                        </>
                      )}
                    </div>
                    {/* Hridoy Haque */}
                    <div className="lg:hidden block"><div className={pathname === '/allApprovedDonation' ? 'sideActive' : ''}>
                            <Link href="/allApprovedDonation">
                              <p className=" flex items-center group  hover:ml-2 transition-all">
                                <BiDonateBlood
                                  size={28}
                                  className="inline mr-2"
                                />
                                Donate
                                <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                              </p>
                            </Link>
                          </div></div>
                    {/* Hridoy Haque */}
                    

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
          <div className="flex items-center gap-8">
            <div className="hover:scale-110  transform transition-transform">
              {" "}
              <Link
                className="  text-primary-color dark:hover:text-primary-color hover:text-white hover:bg-primary-color dark:hover:bg-black bg-white  py-3 border-primary-color border dark:bg-primary-color dark:text-white shadow-primary-color font-semibold px-3 rounded-xl"
                href="/auth/signin"
              >
                Sign In
              </Link>
              {/* <Link
              className="  text-red dark:hover:text-red hover:text-white hover:bg-red dark:hover:bg-black bg-white  py-3 border-red  border dark:bg-red dark:text-white shadow-primary-color font-semibold px-3 rounded-xl"
              href="/auth/signin"
            >
              Sign In
            </Link> */}
            </div>
            <div>
              {" "}
              {user ? (
                <></>
              ) : (
                <div className=" hover:scale-125  transform transition-transform">
                  <DashboardThemeButton />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavItems;
