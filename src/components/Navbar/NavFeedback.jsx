"use client";
import useAuth from "@/hooks/useAuth";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

import React from "react";
import { AiOutlineArrowRight, AiOutlineQuestionCircle } from "react-icons/ai";

const NavFeedback = () => {
  const { user } = useAuth();
  const { data: loggedInUser } = useFetchData(
    `/api/loggedInUser?userEmail=${user?.email}`
  );

  return (
    <>
     
          <p
            onClick={() => window.my_modal_1.showModal()}
            className=" flex items-center group  hover:ml-2 transition-all"
          >
            <AiOutlineQuestionCircle size={28} className="inline mr-2" />
            Give Feedback
            <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
          </p>
       
    </>
  );
};

export default NavFeedback;
