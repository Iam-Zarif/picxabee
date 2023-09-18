"use client"
import cover from "/public/catCover.PNG";
import useSWR from 'swr';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGraduationCap, FaSchool, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { TbSend } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { LuEdit } from 'react-icons/lu';
import React, { useState } from 'react';
// import AuthContext from "@/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from "@/components/Navbar/Navbar";
import EditProfileModal from "@/components/OwnProfile/editProfileModal";


const ProfilePage = () => {
const [showModal, setShowModal] = useState(false)
    const { user } = useAuth();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: ownPosts,
        error,
        isLoading,
    } = useSWR(
        `/api/profile?userEmail=${user?.email}`,
        fetcher
    );

    // const ownPosts = data && data?.filter(post => post?.author?.email === user?.email)
    console.log(ownPosts);
    return (
        <>
            <Navbar />
            <div className='profile-container my-container '>
                <Image src={cover} alt='Profile Cover' className=' cover-img mx-auto rounded-[14px] mb-4 w-[1550px] ' />
                <div className="profile-details rounded-[4px] flex justify-between">
                    <div className="mx-auto">
                        <div className="flex mx-auto">
                            <div className="mr-5">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        user && <Image src={user?.photoURL} height={120} width={120} alt='Profile Picture' />
                                    }
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <h3 className='text-25 font-semibold text-2xl'>{user?.displayName}</h3>
                                <p className='text-30 '>120+ Friend</p>
                                <div className='flex justify-start space-x-2 w-full pt-3 '>
                                    <BsFacebook size={24} />
                                    <AiFillLinkedin size={24} />
                                    <BsGithub size={24} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">

                        <button className='btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3 mb-2' type='button'>Contact <TbSend /></button>
                        <button className='btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3 mb-2' type='button'>Follow <AiOutlinePlus /></button>
                       <button 
                       onClick={() => setShowModal(true)}
                       className="btn btn-success inline-flex border-spacing-0 outline-0 pt-1 items-center ml-3"><LuEdit /></button>

                    </div>
                </div>
                <hr className='mt-10' />

                <div className='profile-info'>
                    <div className="post-col grid lg:grid-cols-12">
                        <div className='col-span-5'>

                            {/* Education Section Code  */}

                            <div className='mt-6 mx-auto ml-8'>
                                <p className='text-center'>Education</p>
                                <hr className="h-1 w-28 bg-primary-color mx-auto mt-4 mb-3"></hr>
                                <div className='flex ml-16'>
                                    <FaGraduationCap size={36} />
                                    <h1 className='text-1xl ml-2 mt-1'>Studies at <span className='font-semibold'>Govt. Bangabandhu College</span></h1>
                                </div>
                                <div className='flex ml-16'>
                                    <FaSchool size={36} />
                                    <h1 className='text-1xl ml-2 mt-1'>Went to <span className='font-semibold'>Alim Uddin High School</span></h1>
                                </div>
                            </div>

                            {/* Skills Section Code */}

                            <div className='mt-6 mx-auto ml-8'>
                                <p className='text-center'>Skills</p>
                                <hr className="h-1 w-28 bg-primary-color mx-auto mt-4 mb-3"></hr>
                                <div className='flex ml-16'>
                                    <FaReact size={36} />
                                    <h1 className='text-1xl ml-2 mt-1'>Comfortable in <span className='font-semibold'>React</span></h1>
                                </div>
                                <div className='flex ml-16'>
                                    <SiNextdotjs size={36} />
                                    <h1 className='text-1xl ml-2 mt-1'>Comfortable in <span className='font-semibold'>Next JS</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-7 mr-12 mt-12'>
                            {/* <PostCards /> */}
                            {
                                ownPosts && ownPosts.map(post => <SinglePost key={post._id} post={post}></SinglePost>)

                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <EditProfileModal isVisible={showModal} onClose={() => setShowModal(false)}/> */}
        </>
    );
};

export default ProfilePage;