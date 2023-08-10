import { FaHome, FaPlusCircle,FaUserAlt } from 'react-icons/fa';

import { RiSendPlaneFill } from 'react-icons/ri';
import {  HiUserGroup } from 'react-icons/hi';
import {  AiOutlineHeart,AiFillSetting,AiOutlineArrowRight } from 'react-icons/ai';
import Hooks from './Hooks';

const Nav = () => {
  const navItems = <>
  <li>
     <a
       
       className="flex items-center hover:bg-white  hover:scale-125 transform transition-transform "
     >
       <FaHome className="text-xl lg:text-2xl " />
       <span className="lg:hidden ">Home</span>
     </a>
   </li>
     <li><a className='hover:bg-white  hover:scale-125 transform transition-transform'>
     <RiSendPlaneFill className='text-xl lg:text-2xl hover:scale-125 transform transition-transform  '/>
     <span className="lg:hidden">Message</span>
     </a></li>
     <li><a className='hover:bg-white  hover:scale-125 transform transition-transform'>
     <FaPlusCircle className='text-xl lg:text-2xl hover:scale-125 transform transition-transform '/>
     <span className="lg:hidden">Post</span>
     </a></li>
     <li><a className='hover:bg-white hover:scale-125 transform transition-transform '>
     <HiUserGroup className='text-xl lg:text-2xl hover:scale-125 transform transition-transform  '/>
     <span className="lg:hidden">Friends</span>
     </a></li>
     <li><a className='hover:bg-white  hover:scale-125 transform transition-transform'>
     <AiOutlineHeart className='text-xl lg:text-2xl hover:scale-125 transform transition-transform '/>
     <span className="lg:hidden">Notifications</span>
     </a></li>
     <li><a className='hover:bg-white  '>
     <div className="dropdown  ">
 <label tabIndex={0} className=" "> <FaUserAlt  className='text-xl lg:text-2xl hover:scale-125 transform transition-transform cursor-pointer'/></label>
 <div tabIndex={0} className="dropdown-content  z-[1] card card-compact  shadow  ">
   <div className="card-body w-60 hidden lg:block mt-5 shadow-md rounded-xl shadow-slate-400">
    
     <p className="text-lg "><FaUserAlt className='inline'/> User Full Name</p>
     <div className='divider'></div>
     <p className='text-lg flex items-center group hover:scale-125 transform transition-transform'>
     <AiFillSetting className='inline mr-2'/>
     Settings
     <AiOutlineArrowRight className='ml-2 opacity-0 group-hover:opacity-100 inline'/>
   </p>
   <p className='text-lg flex items-center group hover:scale-125 transform transition-transform'>
     <AiFillSetting className='inline mr-2'/>
     Settings
     <AiOutlineArrowRight className='ml-2 opacity-0 group-hover:opacity-100 inline'/>
   </p>
   <p className='text-lg flex items-center group hover:scale-125 transform transition-transform'>
     <AiFillSetting className='inline mr-2'/>
     Settings
     <AiOutlineArrowRight className='ml-2 opacity-0 group-hover:opacity-100 inline'/>
   </p>
   <p className='text-lg flex items-center group hover:scale-125 transform transition-transform'>
     <AiFillSetting className='inline mr-2'/>
     Settings
     <AiOutlineArrowRight className='ml-2 opacity-0 group-hover:opacity-100 inline'/>
   </p> 
   </div>
 </div>
</div>
       {/*  */}
    
     <span className="lg:hidden">User</span>
     </a></li>
 </>
  return (
    <div className=' shadow-md shadow-slate-200 mt-3 lg:mt-0'>
           <Hooks>
            <div className=" lg:navbar  bg-base-100 pb-2 lg:pb-0  items-center ">
  <div className='flex lg:flex lg:gap-64 items-center content-center'>
    
  <div className="navbar-start">
              {/* responsive dropdown */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="flex flex-row gap-2  menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-36 shadow-slate-400 shadow-md">
        {navItems}
      </ul>
    </div>
    <span className='lg:hidden  inline-block'>Pic</span>
    {/* responsive dropdown */}
    <a className=" logo normal-case text-xl lg:text-3xl hidden lg:block lg:mb-5"> <span className='text-5xl'>P</span>icxa<span className='bee  '>bee</span></a>
    
  </div>
  

{/* search box */}

<div className='navbar-center relative '>
  
<input
  type="text"
  name="search"
  id="search"
  placeholder="Search"
  className="mx-10 lg:pl-12 pl-2 w-[200px] lg:w-full  block  lg:ml-0 rounded-2xl  pr-2 py-2 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
/>
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute lg:left-5 hidden lg:block top-2 text-gray-500 z-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
 
</div>
<div className='flex  mr-8'>

<RiSendPlaneFill  className='lg:hidden text-3xl cursor-pointer'/>
</div>

  </div>

  {/* search box */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     {navItems}
     {/* <FaUserAlt  className='text-xl  lg:text-2xl'/> */}
    </ul>
  </div>
  
</div>

</Hooks> 
        </div>
  )
}

export default Nav;