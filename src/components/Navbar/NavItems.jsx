import React from "react";
import { GoHome } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
// import 'animate.css';
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineArrowRight,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { TbLayoutDashboard } from "react-icons/tb";
import NavFeedback from "./NavFeedback";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import useFetchData from "@/hooks/useFetchData";

const NavItems = () => {
  const { user, logout } = useAuth();
  const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
console.log(loggedInUser?.role);
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
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  

  const router = useRouter();
  return (
    <>
      {user ? (
        <>
          <li>
            <Link href="/">
              <p
                data-tip="Home"
                className="flex items-center tooltip-bottom tooltip  hover:scale-125 hover:translate-x-1 transform transition-transform "
              >
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
          {/* <li className="hidden lg:relative lg:block">
            <a className="indicator hover:bg-transparent  hover:scale-125 transform transition-transform ">
              <span className="lg:absolute left-3 top-2 indicator-item badge text-white bg-primary-color  font-bold px-2">
                5
              </span>
              <IoNotificationsOutline className="rotate-45 text-xl lg:text-2xl hover:scale-125 transform transition-transform" />
            </a>
          </li> */}
          <li>
            <Link
              href={"/recycle"}
              data-tip="Recycle bin"
              className="hover:bg-transparent tooltip-bottom tooltip  hover:scale-125 transform transition-transform "
            >
              <RiDeleteBin5Line className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
            </Link>
          </li>
          <li>
            <a className=" hover:bg-transparent ">
              <Image
                alt="User image"
                src={user?.photoURL}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full  hover:scale-125  transform transition-transform"
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
                    {/* <p className=" flex items-center group  hover:ml-2 transition-all">
                      <IoSettingsOutline size={28} className="inline mr-2" />
                      Settings
                      <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                    </p> */}
                    <Link href="/bookmark">
                      {" "}
                      <p className=" flex items-center group  hover:ml-2 transition-all">
                        <BsBookmarkCheck size={28} className="inline mr-2" />
                        Bookmarks
                        <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                      </p>
                    </Link>
                    <NavFeedback />
                    {
                      (loggedInUser?.user === "admin") ? <><Link href="/dashboard">
                      
                      <p className=" flex items-center group  hover:ml-2 transition-all">
                        <TbLayoutDashboard size={28} className="inline mr-2" />
                        Dashboard
                        <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
                      </p>
                    </Link></>
                      :
                      <><div className="hidden"></div></> 
                    }
                    
                    {/*  */}

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
};

export default NavItems;
