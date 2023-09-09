import useLoggedInUser from '@/hooks/useLoggedInUser';
import React from 'react'
import { AiOutlineArrowRight, AiOutlineQuestionCircle } from 'react-icons/ai'

const NavFeedback = () => {
  const { loggedInUser } = useLoggedInUser();
  console.log(loggedInUser?.role);
  return (
    <>
   
        <p onClick={()=>window.my_modal_1.showModal()} className=" flex items-center group  hover:ml-2 transition-all">
    <AiOutlineQuestionCircle size={28} className="inline mr-2" />
    Give Feedback
    <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
  </p>
   
  {/*  */}

  
 

  </>
  )
}

export default NavFeedback