/* eslint-disable jsx-a11y/alt-text */
"use client"
import useSWR from 'swr';
import React, { useState } from "react";
import photo from "../../../public/fatin.PNG"
import Image from 'next/image';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Suggestions from "@/components/HomePage/RighSidebar/Suggestions";
import Navbar from '@/components/Navbar/Navbar';
import DonationCards from '@/components/HomePage/Donation/DonationCards';
import Link from 'next/link';
const SearchPage =  ({ searchParams }) => {
  const[seeMore, setSeeMore] = useState(false)
  const SeeMoreData =()=>{
    setSeeMore(true);
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR('/api/users', fetcher)
  const searchText = searchParams.userSearch;

  const filteredResults = data?.filter((user) =>
    user.name.replace(/\s+/g, "").toLowerCase().includes(searchText)
  );
  return (
    <>
    <Navbar/>
    <div className="flex lg:flex-row flex-col   items-center lg:items-start content-center justify-center gap-10 mt-28">
      {filteredResults?.length === 0 ? (
        "No User Found"
      ) : (
        <div className="flex lg:flex-row flex-col-reverse lg:items-start  lg:gap-40 justify-between items-center  content-center">
         <div className=''> 
         <p className='lg:hidden text-center mt-10'>Donate for The poors</p>
         <DonationCards/></div>
          <div className='flex flex-col gap-2 lg:px-0 px-8'><p className="mb-2 text-3xl font-semibold">People</p>
          
         
          {filteredResults?.slice(0, seeMore ? filteredResults.length : 4).map((user, index) => (
            <div key={index} className="border  hover:bg-light-gray dark:hover:bg-black border-gray justify-between rounded-xl flex items-center px-5 py-2 ">
              <div className='flex gap-2 items-center'>
              <Image src={user?.profile_picture} height={50} width={50} className="rounded-full lg:w-10 lg:h-10 h-8 w-8"></Image>
             <h2 className='lg:font-bold font-normal text-sm lg:text-base'> {user?.name}</h2>
              </div>
             
             <div className="flex gap-5">
              <button className="flex items-center border-1 gap-2 border-1 border  px-2 py-1 rounded-md text-primary-color  border-primary-color hover:bg-primary-color hover:text-white"><span className='text-sm'>Follow</span> <AiOutlinePlusCircle size={22}/></button>
              <button className="flex items-center border-1 gap-2 border-1 border  px-2 py-1 rounded-md text-primary-color  border-primary-color hover:bg-primary-color hover:text-white"><span className='lg:block hidden'>Message</span> <HiOutlineChatAlt2 size={22}/></button>
             </div>
            
            </div>
          ))}
{!seeMore && (
          <div className='mx-auto mt-5 items-center gap-5 flex'>
<hr className='w-20' />
           <button
           onClick={SeeMoreData} 
           className="  text-primary-color dark:hover:text-primary-color hover:text-white hover:bg-primary-color dark:hover:bg-black bg-white  py-3 border-primary-color border dark:bg-primary-color dark:text-white shadow-primary-color font-semibold px-3 rounded-xl">See more</button>
<hr className='w-20'/>
          </div>
)}
          </div>
        </div>
      )}
     
      <div className="mt-2 lg:block hidden">
        <Suggestions/>
      </div>
    </div>
    </>
  );
};

export default SearchPage;


