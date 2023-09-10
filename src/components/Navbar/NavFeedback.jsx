"use client"
import useAuth from '@/hooks/useAuth';
import useFetchData from '@/hooks/useFetchData';
import Link from 'next/link';

import React from 'react'
import { AiOutlineArrowRight, AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbLayoutDashboard } from 'react-icons/tb';


const NavFeedback = () => {
  const {user} = useAuth()
  const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
console.log(loggedInUser?.role);

  return (
    <>

    
   {
  
     <><p onClick={()=>window.my_modal_1.showModal()} className=" flex items-center group  hover:ml-2 transition-all">
     <AiOutlineQuestionCircle size={28} className="inline mr-2" />
     Give Feedback
     <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
   </p></> 
    
   }
    {/* <div> {
      (loggedInUser?.role === "user") &&  <div><p onClick={()=>window.my_modal_1.showModal()} className=" flex items-center group  hover:ml-2 transition-all">
      <AiOutlineQuestionCircle size={28} className="inline mr-2" />
      Give Feedback
      <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
    </p></div> 
     }   
     {
      (loggedInUser?.role === "admin") &&  <div><Link href="/dashboard">
                      
      <p className=" flex items-center group  hover:ml-2 transition-all">
        <TbLayoutDashboard size={28} className="inline mr-2" />
        Dashboard
        <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
      </p>
    </Link></div>
     }</div>    */}
   
  {/*  */}

  
 

  </>
  )
}

export default NavFeedback